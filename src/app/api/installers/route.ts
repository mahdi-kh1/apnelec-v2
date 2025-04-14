import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { isAdmin: true }
    });
    
    if (!user?.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }
    
    // Get all installers with their user info
    const installers = await prisma.installer.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            mobile: true,
            firstName: true,
            lastName: true,
            image: true,
            createdAt: true
          }
        },
        subscription: {
          select: {
            id: true,
            startDate: true,
            endDate: true,
            plan: true,
            type: true,
            isActive: true
          }
        },
        customers: {
          select: {
            id: true
          }
        },
        installations: {
          select: {
            id: true
          }
        }
      }
    });
    
    // Transform data to include counts and format dates
    const transformedInstallers = installers.map(installer => ({
      ...installer,
      customersCount: installer.customers.length,
      installationsCount: installer.installations.length,
      createdDate: installer.user.createdAt.toISOString(),
      subscription: installer.subscription ? {
        ...installer.subscription,
        endDate: installer.subscription.endDate.toISOString()
      } : null,
      customers: undefined,
      installations: undefined
    }));
    
    return NextResponse.json(transformedInstallers);
  } catch (error) {
    console.error('Error fetching installers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch installers' },
      { status: 500 }
    );
  }
} 