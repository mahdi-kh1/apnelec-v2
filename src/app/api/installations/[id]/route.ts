import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { id: paramId } = await params;
    const id = parseInt(paramId);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid installation ID' }, { status: 400 });
    }
    
    // Get the installation with related data
    const installation = await prisma.installation.findUnique({
      where: { id },
      include: {
        customer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            mobile: true,
            email: true,
          }
        },
        address: {
          select: {
            id: true,
            street: true,
            city: true,
            postcode: true,
            telephone: true,
            buildingUse: true,
            propertyType: true,
          }
        }
      }
    });
    
    if (!installation) {
      return NextResponse.json({ error: 'Installation not found' }, { status: 404 });
    }
    
    // Check if the user is authorized to view this installation
    const isAdmin = session.user.isAdmin;
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id }
    });
    
    if (!isAdmin && (!installer || installer.id !== installation.installerId)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    
    return NextResponse.json(installation);
  } catch (error) {
    console.error('Error fetching installation:', error);
    return NextResponse.json(
      { error: 'Failed to fetch installation' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid installation ID' }, { status: 400 });
    }
    
    // Check if the installation exists
    const existingInstallation = await prisma.installation.findUnique({
      where: { id }
    });
    
    if (!existingInstallation) {
      return NextResponse.json({ error: 'Installation not found' }, { status: 404 });
    }
    
    // Check if the user is authorized to update this installation
    const isAdmin = session.user.isAdmin;
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id }
    });
    
    if (!isAdmin && (!installer || installer.id !== existingInstallation.installerId)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    
    const data = await request.json();
    
    // Update the installation
    const updatedInstallation = await prisma.installation.update({
      where: { id },
      data: {
        postcode: data.postcode,
        zone: data.zone,
        totalPVOutput: data.totalPVOutput,
        annualACOutput: data.annualACOutput,
        roofDetails: data.roofDetails,
        shadeFactors: data.shadeFactors,
        orientations: data.orientations,
        roofSlopes: data.roofSlopes,
        roofTypes: data.roofTypes,
        results: data.results,
      },
      include: {
        customer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            mobile: true,
            email: true,
          }
        },
        address: {
          select: {
            id: true,
            street: true,
            city: true,
            postcode: true,
            telephone: true,
            buildingUse: true,
            propertyType: true,
          }
        }
      }
    });
    
    return NextResponse.json(updatedInstallation);
  } catch (error) {
    console.error('Error updating installation:', error);
    return NextResponse.json(
      { error: 'Failed to update installation' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid installation ID' }, { status: 400 });
    }
    
    // Check if the installation exists
    const existingInstallation = await prisma.installation.findUnique({
      where: { id }
    });
    
    if (!existingInstallation) {
      return NextResponse.json({ error: 'Installation not found' }, { status: 404 });
    }
    
    // Check if the user is authorized to delete this installation
    const isAdmin = session.user.isAdmin;
    const installer = await prisma.installer.findUnique({
      where: { userId: session.user.id }
    });
    
    if (!isAdmin && (!installer || installer.id !== existingInstallation.installerId)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    
    // Delete the installation
    await prisma.installation.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting installation:', error);
    return NextResponse.json(
      { error: 'Failed to delete installation' },
      { status: 500 }
    );
  }
} 