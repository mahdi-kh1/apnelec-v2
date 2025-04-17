import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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

    // Update the application status to rejected
    await prisma.subscriptionApplication.update({
      where: { id: applicationId },
      data: {
        status: 'rejected',
        reviewedByUserId: session.user.id,
        reviewNotes: body.reviewNotes || 'Rejected by admin',
        updatedDate: new Date(),
      },
    });

    return NextResponse.json({ success: true, message: 'Application rejected successfully' });
  } catch (error) {
    console.error('Error rejecting application:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'An error occurred while rejecting the application' },
      { status: 500 }
    );
  }
} 