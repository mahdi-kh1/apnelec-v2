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
    
    // Check if user is an installer
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
    });
    
    const isInstaller = !!installer;
    
    // Check for active subscription if user is an installer
    let subscription = null;
    if (isInstaller) {
      const subscriptionData = await prisma.subscription.findFirst({
        where: {
          installerId: installer.id,
          isActive: true,
        },
      });
      
      if (subscriptionData) {
        const startDate = new Date(subscriptionData.startDate);
        const endDate = new Date(subscriptionData.endDate);
        const today = new Date();
        
        // Calculate days remaining based on today and end date
        const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        // Create a properly formatted subscription object for the frontend
        subscription = {
          id: subscriptionData.id,
          startDate: startDate.toISOString(),
          expiryDate: endDate.toISOString(),
          plan: subscriptionData.plan,
          type: subscriptionData.type,
          daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
          // Add calculated total days for progress bar
          totalDays: subscriptionData.plan === "monthly" 
            ? 30 // Approximately a month
            : 365, // A year
        };
      }
    }
    
    // Check for active application
    const application = await prisma.subscriptionApplication.findFirst({
      where: {
        userId: session.user.id,
        status: {
          in: ['pending', 'approved']
        }
      },
    });
    
    return NextResponse.json({
      databaseStatus: "connected",
      isInstaller,
      subscription,
      hasActiveApplication: !!application,
      applicationStatus: application?.status || null
    });
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return NextResponse.json(
      { 
        message: 'Failed to check subscription status',
        databaseStatus: "disconnected"
      },
      { status: 500 }
    );
  }
} 