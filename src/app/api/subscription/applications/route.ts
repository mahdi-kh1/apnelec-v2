import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    if (!session.user.isAdmin) {
      return NextResponse.json({ message: 'Forbidden: Admin access required' }, { status: 403 });
    }
    
    // Fetch all subscription applications with user information
    const applications = await prisma.subscriptionApplication.findMany({
      orderBy: {
        createdDate: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    
    // Transform the data to match the expected format
    const formattedApplications = applications.map((app: any) => ({
      ...app,
      applicant: {
        name: app.user.name,
        email: app.user.email,
      },
    }));
    
    return NextResponse.json({ applications: formattedApplications });
  } catch (error) {
    console.error('Error fetching subscription applications:', error);
    return NextResponse.json(
      { message: 'Failed to fetch subscription applications' },
      { status: 500 }
    );
  }
} 