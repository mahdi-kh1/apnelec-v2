import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const customerId = parseInt(id);
    
    if (isNaN(customerId)) {
      return NextResponse.json({ message: 'Invalid customer ID' }, { status: 400 });
    }
    
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
    
    // Get the customer with access control
    const customer = await prisma.customer.findFirst({
      where: { 
        id: customerId,
        // Only add installerId filter for non-admin users
        ...(session.user.isAdmin ? {} : { installerId: installer?.id })
      },
      include: {
        addresses: true,
        installations: {
          select: {
            id: true,
            status: true,
            createdDate: true,
            totalPVOutput: true,
            annualACOutput: true,
            postcode: true
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
    });
    
    if (!customer) {
      return NextResponse.json({ message: 'Customer not found' }, { status: 404 });
    }
    
    return NextResponse.json(customer);
  } catch (error) {
    console.error('Error fetching customer:', error);
    return NextResponse.json(
      { message: 'Failed to fetch customer' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const customerId = parseInt(id);
    
    if (isNaN(customerId)) {
      return NextResponse.json({ message: 'Invalid customer ID' }, { status: 400 });
    }
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
    });
    
    // Verify access to this customer
    const existingCustomer = await prisma.customer.findUnique({
      where: { 
        id: customerId,
        ...(session.user.isAdmin ? {} : { installerId: installer?.id })
      },
    });
    
    if (!existingCustomer) {
      return NextResponse.json({ message: 'Customer not found' }, { status: 404 });
    }
    
    const body = await request.json();
    
    // Update customer
    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        mobile: body.mobile,
      },
      include: {
        addresses: true,
      }
    });
    
    return NextResponse.json(updatedCustomer);
  } catch (error) {
    console.error('Error updating customer:', error);
    return NextResponse.json(
      { message: 'Failed to update customer' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const customerId = parseInt(id);
    
    if (isNaN(customerId)) {
      return NextResponse.json({ message: 'Invalid customer ID' }, { status: 400 });
    }
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
    });
    
    // Verify access to this customer
    const existingCustomer = await prisma.customer.findUnique({
      where: { 
        id: customerId,
        ...(session.user.isAdmin ? {} : { installerId: installer?.id })
      },
    });
    
    if (!existingCustomer) {
      return NextResponse.json({ message: 'Customer not found' }, { status: 404 });
    }
    
    // Delete customer (cascade will handle related records)
    await prisma.customer.delete({
      where: { id: customerId },
    });
    
    return NextResponse.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return NextResponse.json(
      { message: 'Failed to delete customer' },
      { status: 500 }
    );
  }
} 