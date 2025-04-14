import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    const decoded = Buffer.from(token, 'base64').toString();
    const [installationId] = decoded.split('-');
    
    if (!installationId) {
      return NextResponse.json(
        { error: 'Invalid signature token' },
        { status: 400 }
      );
    }
    
    // Get installation
    const installation = await prisma.installation.findUnique({
      where: { id: parseInt(installationId) },
      include: {
        customer: {
          select: {
            firstName: true,
            lastName: true
          }
        },
        address: {
          select: {
            street: true,
            city: true,
            postcode: true
          }
        }
      }
    });
    
    if (!installation) {
      return NextResponse.json(
        { error: 'Installation not found' },
        { status: 404 }
      );
    }
    
    // Check if installation can be signed
    if (installation.status !== 'SIGNATURE_NEEDED') {
      return NextResponse.json(
        { error: 'Installation is not ready for signature' },
        { status: 400 }
      );
    }
    
    // Return installation data
    return NextResponse.json({
      id: installation.id,
      customer: installation.customer,
      address: installation.address,
      totalPVOutput: installation.totalPVOutput,
      annualACOutput: installation.annualACOutput,
      zone: installation.zone
    });
  } catch (error) {
    console.error('Error validating signature token:', error);
    return NextResponse.json(
      { error: 'Failed to validate signature token' },
      { status: 500 }
    );
  }
} 