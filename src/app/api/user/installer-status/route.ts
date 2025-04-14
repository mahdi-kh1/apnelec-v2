import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id },
    });
    
    return NextResponse.json({ isInstaller: !!installer });
  } catch (error) {
    console.error('Error checking installer status:', error);
    return NextResponse.json(
      { message: 'Failed to check installer status' },
      { status: 500 }
    );
  }
} 