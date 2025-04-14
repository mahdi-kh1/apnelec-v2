import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { subscriptionType, receiptCode, receiptPhotoPath, notes } = await req.json();

    // Check if user already has a pending application
    const existingApplication = await prisma.subscriptionApplication.findFirst({
      where: {
        userId,
        status: 'pending',
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { message: 'You already have a pending application' },
        { status: 400 }
      );
    }

    // Check if user is an installer
    const existingInstaller = await prisma.installer.findUnique({
      where: { userId },
    });

    if (!existingInstaller) {
      return NextResponse.json(
        { message: 'You are not registered as an installer' },
        { status: 400 }
      );
    }

    // Create new application for extension
    const application = await prisma.subscriptionApplication.create({
      data: {
        userId,
        subscriptionType,
        receiptCode,
        receiptPhotoPath,
        notes,
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error creating subscription extension application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 