import { NextResponse } from 'next/server';
import { getZoneFromPostcode } from '@/lib/zone-utils';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');

    if (!postcode) {
      return NextResponse.json(
        { error: 'Postcode is required' },
        { status: 400 }
      );
    }

    const zone = await getZoneFromPostcode(postcode);

    if (!zone) {
      return NextResponse.json(
        { error: 'Zone not found for postcode' },
        { status: 404 }
      );
    }

    return NextResponse.json({ zone });
  } catch (error) {
    console.error('Error getting zone:', error);
    return NextResponse.json(
      { error: 'Failed to get zone' },
      { status: 500 }
    );
  }
} 