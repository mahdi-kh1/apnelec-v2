import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { calculateSolarOutput, generatePDF } from '@/documents/solar-calculator';
import { Prisma } from '@prisma/client';

// Define interfaces for data structures
interface RoofData {
  orientation: number;
  slope: number;
  shadeFactor: number;
  pvOutput: number;
  type: string;
}

interface InstallationData {
  customerId?: number;
  firstName: string;
  lastName: string;
  mobile?: string;
  email?: string;
  addressId?: number;
  postcode: string;
  street?: string;
  city?: string;
  telephone?: string;
  latitude?: number;
  longitude?: number;
  buildingUse?: string;
  propertyType?: string;
  roofs: RoofData[];
}

export async function POST(request: NextRequest) {
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
    
    if (!installer && !session.user.isAdmin) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }
    
    const body = await request.json();
    const { customerId, addressId, roofDetails, ...installationData } = body;

    // Calculate solar output for each roof
    const solarResults = await Promise.all(
      roofDetails.map(async (roof: any) => {
        return calculateSolarOutput({
          postcode: installationData.postcode,
          roofOrientation: roof.orientation,
          roofSlope: roof.slope,
          shadeFactor: roof.shadeFactor,
          pvOutput: roof.pvOutput
        });
      })
    );

    // Calculate total outputs
    const totalPVOutput = roofDetails.reduce((sum: number, roof: any) => sum + roof.pvOutput, 0);
    const totalAnnualOutput = solarResults.reduce((sum: number, result: any) => sum + result.annualOutput, 0);
    const zone = solarResults[0]?.zone || 'Unknown';

    // Create installation
    const installation = await prisma.installation.create({
      data: {
        postcode: installationData.postcode,
        zone,
        totalPVOutput,
        annualACOutput: totalAnnualOutput,
        roofDetails,
        results: {
          solarCalculations: solarResults,
          occupancyArchetype: installationData.occupancyArchetype || 'Unknown',
          annualConsumption: installationData.annualConsumption || null,
          batteryCapacity: installationData.batteryCapacity || null,
          selfConsumption: installationData.selfConsumption || null,
          gridIndependence: installationData.gridIndependence || null
        },
        customerId,
        addressId: addressId || undefined,
        installerId: installer?.id || 0,
        status: 'DETAILS_COMPLETED',
      },
      include: {
        customer: true,
        address: true
      }
    });
    
    return NextResponse.json(installation, { status: 201 });
  } catch (error) {
    console.error('Error creating installation:', error);
    return NextResponse.json(
      { message: 'Failed to create installation' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
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
    
    if (!installer && !session.user.isAdmin) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }
    
    // Get installations based on user role
    const installations = await prisma.installation.findMany({
      where: session.user.isAdmin 
        ? undefined 
        : { installerId: installer?.id },
      include: {
        customer: {
          include: {
            addresses: true
          }
        },
        address: true,
        installer: {
          include: {
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
        createdDate: 'desc'
      }
    });
    
    return NextResponse.json(installations);
  } catch (error) {
    console.error('Error fetching installations:', error);
    return NextResponse.json(
      { message: 'Failed to fetch installations' },
      { status: 500 }
    );
  }
}