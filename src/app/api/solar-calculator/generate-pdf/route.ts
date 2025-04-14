import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerDetails, installationDetails } = body;
    
    // Instead of generating a PDF server-side, just return the data
    // that will be used for client-side PDF generation
    return NextResponse.json({
      success: true,
      data: {
        customerDetails,
        installationDetails,
        generatedAt: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error processing PDF data:', error);
    return NextResponse.json(
      { error: 'Failed to process data' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Please use POST method with appropriate data to get PDF content'
  });
} 