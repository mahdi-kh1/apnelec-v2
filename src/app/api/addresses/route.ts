import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma-api';
import { authOptions } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    
    // Create address
    const address = await prisma.address.create({
      data: {
        referenceId: body.referenceId,
        referenceType: body.referenceType,
        street: body.street,
        city: body.city,
        postcode: body.postcode,
        latitude: body.latitude,
        longitude: body.longitude,
      },
    });
    
    return NextResponse.json(address, { status: 201 });
  } catch (error) {
    console.error('Error creating address:', error);
    return NextResponse.json(
      { message: 'Failed to create address' },
      { status: 500 }
    );
  }
} 