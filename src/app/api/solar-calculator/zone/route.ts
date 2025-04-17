import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postcode = searchParams.get('postcode');

    if (!postcode) {
      return NextResponse.json({ error: 'Postcode is required' }, { status: 400 });
    }

    // Normalize the postcode for comparison
    const normalizedPostcode = postcode.toLowerCase().replace(/\s/g, '');
    
    // Read the CSV file
    const csvPath = path.join(process.cwd(), 'documents', 'PostcodeZone.csv');
    
    // Check if the file exists
    try {
      await fs.access(csvPath);
    } catch (error) {
      console.error(`Error accessing PostcodeZone.csv: ${error}`);
      return NextResponse.json({ error: 'Zone data file not found' }, { status: 500 });
    }
    
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    const lines = csvContent.toLowerCase().replace(/\r/g, '').split('\n');
    
    if (lines.length <= 1) {
      console.error('CSV file is empty or contains only headers');
      return NextResponse.json({ error: 'Zone data is empty' }, { status: 500 });
    }
    
    const headers = lines[0].split(',');
    const postcodeIndex = headers.indexOf('postcode');
    const zoneIndex = headers.indexOf('zone');
    
    if (postcodeIndex === -1 || zoneIndex === -1) {
      console.error('CSV file is missing required columns: postcode or zone');
      return NextResponse.json({ error: 'Zone data file is invalid' }, { status: 500 });
    }

    // Find the zone for the postcode by progressively shortening the postcode
    let numOfChars = Math.min(normalizedPostcode.length, 4);
    let zone = null;

    while (numOfChars > 0 && !zone) {
      const searchPostcode = normalizedPostcode.substring(0, numOfChars);
      
      // Find a matching postcode in the CSV
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        if (values.length > Math.max(postcodeIndex, zoneIndex)) {
          const csvPostcode = values[postcodeIndex].trim();
          if (csvPostcode === searchPostcode) {
            zone = 'Z' + values[zoneIndex].trim().toUpperCase();
            break;
          }
        }
      }
      
      numOfChars--;
    }

    if (!zone) {
      console.warn(`No zone found for postcode: ${postcode}`);
      return NextResponse.json({ error: 'Zone not found for postcode' }, { status: 404 });
    }

    console.log(`Found zone ${zone} for postcode ${postcode}`);
    return NextResponse.json({ zone });
  } catch (error) {
    console.error('Error getting zone:', error);
    return NextResponse.json({ error: 'Failed to get zone' }, { status: 500 });
  }
} 