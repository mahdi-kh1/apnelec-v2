import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    // First check if user is already an installer
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
    });
    
    if (installer) {
      return NextResponse.json({ 
        hasActiveApplication: false,
        isInstaller: true,
        status: 'approved'
      });
    }
    
    // Check if the user has any pending or approved applications
    const application = await prisma.subscriptionApplication.findFirst({
      where: {
        userId: session.user.id,
        status: {
          in: ['pending', 'approved']
        }
      },
    });
    
    return NextResponse.json({ 
      hasActiveApplication: !!application,
      isInstaller: false,
      status: application?.status || null
    });
  } catch (error) {
    console.error('Error checking application status:', error);
    return NextResponse.json(
      { message: 'Failed to check application status' },
      { status: 500 }
    );
  }
} 