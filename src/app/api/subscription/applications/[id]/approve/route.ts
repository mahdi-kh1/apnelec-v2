import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const applicationId = parseInt(id);
    
    if (isNaN(applicationId)) {
      return NextResponse.json({ message: 'Invalid application ID' }, { status: 400 });
    }
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    
    // Find the application
    const application = await prisma.subscriptionApplication.findUnique({
      where: { id: applicationId },
      include: { user: true },
    });

    if (!application) {
      return NextResponse.json({ message: 'Application not found' }, { status: 404 });
    }

    if (application.status !== 'pending') {
      return NextResponse.json(
        { message: 'Application has already been processed' },
        { status: 400 }
      );
    }

    // Update the application status
    await prisma.subscriptionApplication.update({
      where: { id: applicationId },
      data: {
        status: 'approved',
        reviewedByUserId: session.user.id,
        reviewNotes: body.reviewNotes || 'Approved by admin',
        updatedDate: new Date(),
      },
    });

    // Get brand photo path from application
    const brandPhotoPath = application.brandPhotoPath;

    // Create or update the installer record
    const installer = await prisma.installer.findUnique({
      where: { userId: application.userId },
    });

    if (!installer) {
      // Create new installer record with brand photo if available
      const newInstaller = await prisma.installer.create({
        data: {
          userId: application.userId,
          // Use a type assertion to bypass type checking temporarily
          ...(brandPhotoPath ? { brandPhotoPath } : {}),
        } as any,
      });

      // Create subscription for the installer
      await prisma.subscription.create({
        data: {
          installerId: newInstaller.id,
          startDate: new Date(),
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
          plan: 'monthly',
          type: application.subscriptionType,
          isActive: true,
          createdByUserId: session.user.id,
        },
      });
    } else {
      // Update existing subscription
      const subscription = await prisma.subscription.findUnique({
        where: { installerId: installer.id },
      });

      // Update installer's brand photo if available
      if (brandPhotoPath) {
        await prisma.installer.update({
          where: { id: installer.id },
          data: {
            // Use a type assertion to bypass type checking temporarily
            brandPhotoPath,
          } as any,
        }); 
      }

      if (subscription) {
        await prisma.subscription.update({
          where: { id: subscription.id },
          data: {
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            type: application.subscriptionType,
            isActive: true,
            updatedByUserId: session.user.id,
            updatedDate: new Date(),
          },
        });
      } else {
        await prisma.subscription.create({
          data: {
            installerId: installer.id,
            startDate: new Date(),
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            plan: 'monthly',
            type: application.subscriptionType,
            isActive: true,
            createdByUserId: session.user.id,
          },
        });
      }
    }

    return NextResponse.json({ message: 'Application approved successfully' });
  } catch (error) {
    console.error('Error approving application:', error);
    return NextResponse.json(
      { message: 'An error occurred while approving the application' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // ...
} 