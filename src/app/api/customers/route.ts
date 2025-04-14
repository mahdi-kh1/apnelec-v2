import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    // Check if user is an installer
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
      select: { id: true }
    });
    
    // If user is not an admin and not an installer, they can't access customers
    if (!session.user.isAdmin && !installer) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }
    
    // Query based on user role
    const customers = await prisma.customer.findMany({
      where: session.user.isAdmin 
        ? undefined  // Admin can see all customers
        : { installerId: installer?.id }, // Installer can only see their customers
      include: {
        addresses: true,
        installations: {
          select: {
            id: true,
            status: true,
            createdDate: true
          }
        },
        installer: {
          select: {
            id: true,
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true
              }
            }
          }
        }
      },
      orderBy: {
        createdDate: 'desc',
      },
    });
    
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { message: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
    });
    
    if (!installer && !session.user.isAdmin) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }
    
    const body = await request.json();
    
    // Create customer first
    const customer = await prisma.customer.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        mobile: body.mobile,
        installerId: installer?.id || 0,
      },
    });
    
    // Then create address separately if provided
    if (body.address) {
      await prisma.address.create({
        data: {
          referenceId: customer.id,
          referenceType: 'customer',
          street: body.address.street,
          city: body.address.city,
          postcode: body.address.postcode,
        },
      });
    }
    
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { message: 'Failed to create customer' },
      { status: 500 }
    );
  }
} 