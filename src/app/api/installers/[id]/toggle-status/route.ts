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
    
    const { isActive } = await request.json();
    
    // First check if the installer exists
    const existingInstaller = await prisma.installer.findUnique({
      where: { id: installerId }
    });
    
    if (!existingInstaller) {
      return NextResponse.json(
        { error: 'Installer not found' },
        { status: 404 }
      );
    }
    
    const installer = await prisma.installer.update({
      where: { id: installerId },
      data: {
        isActive: Boolean(isActive)
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            image: true
          }
        },
        subscription: true
      }
    });
    
    return NextResponse.json(installer);
  } catch (error) {
    console.error('Error updating installer status:', error);
    return NextResponse.json(
      { error: 'Failed to update installer status' },
      { status: 500 }
    );
  }
} 