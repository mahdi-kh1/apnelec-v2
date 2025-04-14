import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }
    
    const installerId = parseInt(params.id);
    if (isNaN(installerId)) {
      return NextResponse.json(
        { error: 'Invalid installer ID' },
        { status: 400 }
      );
    }
    
    const data = await request.json();
    
    const subscription = await prisma.subscription.create({
      data: {
        installerId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        plan: data.plan,
        type: data.type,
        isActive: data.isActive
      }
    });
    
    return NextResponse.json(subscription);
  } catch (error) {
    console.error('Error creating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }
    
    const installerId = parseInt(params.id);
    if (isNaN(installerId)) {
      return NextResponse.json(
        { error: 'Invalid installer ID' },
        { status: 400 }
      );
    }
    
    const data = await request.json();
    
    const subscription = await prisma.subscription.update({
      where: {
        installerId
      },
      data: {
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        plan: data.plan,
        type: data.type,
        isActive: data.isActive
      }
    });
    
    return NextResponse.json(subscription);
  } catch (error) {
    console.error('Error updating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
} 