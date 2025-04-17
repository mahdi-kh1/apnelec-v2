import { NextRequest, NextResponse } from 'next/server';
import { calculateSolarOutput, SolarCalculationInputs } from '@/lib/zone-utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      pvOutput,
      postcode,
      slope,
      orientation,
      shadeFactor,
      occupancyType,
      annualConsumption
    } = body as SolarCalculationInputs;

    // Validate required fields
    if (!pvOutput || !postcode || slope === undefined || orientation === undefined || 
        shadeFactor === undefined || !occupancyType || !annualConsumption) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate numeric values
    if (typeof pvOutput !== 'number' || typeof slope !== 'number' || 
        typeof orientation !== 'number' || typeof shadeFactor !== 'number' || 
        typeof annualConsumption !== 'number') {
      return NextResponse.json(
        { error: 'Invalid numeric values' },
        { status: 400 }
      );
    }

    // Validate ranges
    if (pvOutput <= 0 || slope < 0 || slope > 90 || 
        orientation < -180 || orientation > 180 || 
        shadeFactor < 0 || shadeFactor > 100 || 
        annualConsumption <= 0) {
      return NextResponse.json(
        { error: 'Values out of valid range' },
        { status: 400 }
      );
    }

    // Validate occupancy type
    const validOccupancyTypes = ['home_all_day', 'in_half_day', 'out_all_day', 'unknown'];
    if (!validOccupancyTypes.includes(occupancyType)) {
      return NextResponse.json(
        { error: 'Invalid occupancy type' },
        { status: 400 }
      );
    }

    console.log('Processing solar calculation for:', {
      pvOutput,
      postcode,
      slope,
      orientation,
      shadeFactor,
      occupancyType
    });

    const result = await calculateSolarOutput({
      pvOutput,
      postcode,
      slope,
      orientation,
      shadeFactor,
      occupancyType,
      annualConsumption
    });

    if (!result) {
      return NextResponse.json(
        { error: 'Calculation failed' },
        { status: 500 }
      );
    }

    // Ensure kwhPerKwp is defined and properly formatted
    if (result.kwhPerKwp === undefined || isNaN(result.kwhPerKwp)) {
      console.warn('kwhPerKwp is undefined or NaN, setting default value');
      result.kwhPerKwp = 950; // Default value if not calculated properly
    }

    // Round kwhPerKwp to one decimal place for consistency
    result.kwhPerKwp = Math.round(result.kwhPerKwp * 10) / 10;

    console.log('Calculation result:', result);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in solar calculation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 