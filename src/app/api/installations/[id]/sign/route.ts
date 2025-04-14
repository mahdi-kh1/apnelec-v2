import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { InstallationStatus, Prisma } from '@prisma/client';

interface SignatureData {
  customerName: string;
  macAddress: string;
  ipAddress: string;
  signedAt: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const installationId = parseInt(params.id);
    if (isNaN(installationId)) {
      return NextResponse.json({ error: 'Invalid installation ID' }, { status: 400 });
    }

    const installation = await prisma.installation.findUnique({
      where: { id: installationId },
      include: {
        customer: true,
        address: true
      }
    });

    if (!installation) {
      return NextResponse.json({ error: 'Installation not found' }, { status: 404 });
    }

    if (installation.status !== InstallationStatus.SIGNATURE_NEEDED) {
      return NextResponse.json(
        { error: 'Installation is not ready for signature' },
        { status: 400 }
      );
    }

    const signatureData: SignatureData = await request.json();
    
    // Add timestamp if not provided
    if (!signatureData.signedAt) {
      signatureData.signedAt = new Date().toISOString();
    }

    // Update installation with signature info
    const updatedInstallation = await prisma.installation.update({
      where: { id: installationId },
      data: {
        status: InstallationStatus.CONTRACT_SIGNED,
        signatureInfo: {
          ...signatureData,
          signedAt: signatureData.signedAt,
          customerName: signatureData.customerName,
          macAddress: signatureData.macAddress,
          ipAddress: signatureData.ipAddress
        } as Prisma.InputJsonValue,
      },
      include: {
        customer: true,
        address: true
      }
    });

    // Generate PDF with signature details
    const pdfData = {
      ...updatedInstallation,
      signatureInfo: signatureData,
      generatedAt: new Date().toISOString()
    };

    // Return the updated installation with PDF URL
    return NextResponse.json({
      ...updatedInstallation,
      pdfUrl: `/api/installations/${installationId}/contract-pdf`
    });
  } catch (error) {
    console.error('Error signing installation:', error);
    return NextResponse.json(
      { error: 'Failed to sign installation' },
      { status: 500 }
    );
  }
} 