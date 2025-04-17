import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { generateSignatureToken } from '@/lib/signature';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Convert the params.id to a number after ensuring it's defined
    const { id } = await params;
    const installationId = parseInt(id);
    
    if (isNaN(installationId)) {
      return NextResponse.json(
        { error: 'Invalid installation ID' },
        { status: 400 }
      );
    }
    
    // Get the installation
    const installation = await prisma.installation.findUnique({
      where: { id: installationId },
      include: {
        installer: {
          select: {
            id: true,
            userId: true,
            brandPhotoPath: true
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
    
    // Only allow generating signature link if the installation is in DETAILS_COMPLETED or SIGNATURE_NEEDED status
    if (installation.status !== 'DETAILS_COMPLETED' && installation.status !== 'SIGNATURE_NEEDED') {
      return NextResponse.json(
        { error: 'Installation is not ready for signature' },
        { status: 400 }
      );
    }
    
    // Generate signature token
    const signatureToken = generateSignatureToken(installationId);
    
    // Update installation status to SIGNATURE_NEEDED if it's not already
    let updatedInstallation = installation;
    if (installation.status !== 'SIGNATURE_NEEDED') {
      updatedInstallation = await prisma.installation.update({
        where: { id: installationId },
        data: {
          status: 'SIGNATURE_NEEDED'
        },
        include: {
          installer: {
            select: {
              id: true,
              userId: true,
              brandPhotoPath: true
            }
          }
        }
      });
    }
    
    return NextResponse.json({
      url: `/installations/sign/${signatureToken}`,
      signatureToken,
      installation: updatedInstallation
    });
  } catch (error) {
    console.error('Error generating signature link:', error);
    return NextResponse.json(
      { error: 'Failed to generate signature link' },
      { status: 500 }
    );
  }
} 