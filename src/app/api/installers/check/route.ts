import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    // Check if user is already an installer
    const installer = await prisma.installer.findUnique({
      where: { userId },
    });

    // Check if user has a pending application
    const pendingApplication = await prisma.subscriptionApplication.findFirst({
      where: {
        userId,
        status: 'pending',
      },
    });

    return NextResponse.json({
      isInstaller: !!installer,
      hasActiveApplication: !!pendingApplication,
    });
  } catch (error) {
    console.error('Error checking installer status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 