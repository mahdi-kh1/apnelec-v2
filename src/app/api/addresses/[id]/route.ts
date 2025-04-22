import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const addressId = parseInt(id);
    
    if (isNaN(addressId)) {
      return NextResponse.json({ message: 'Invalid address ID' }, { status: 400 });
    }
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    
    // Update address
    const address = await prisma.address.update({
      where: { id: addressId },
      data: {
        street: body.street,
        city: body.city,
        postcode: body.postcode,
        latitude: body.latitude,
        longitude: body.longitude,
      },
    });
    
    return NextResponse.json(address);
  } catch (error) {
    console.error('Error updating address:', error);
    return NextResponse.json(
      { message: 'Failed to update address' },
      { status: 500 }
    );
  }
} 