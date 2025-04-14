import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

interface SolarCalculationParams {
  postcode: string;
  roofOrientation: number;
  roofSlope: number;
  shadeFactor: number;
  pvOutput: number;
}

interface SolarCalculationResult {
  zone: string;
  amountOfRadiation: number;
  annualOutput: number;
  pvOutput: number;
}

interface PostcodeZone {
  postcode: string;
  zone: string;
}

export async function calculateSolarOutput(params: SolarCalculationParams): Promise<SolarCalculationResult> {
  try {
    // Read postcode zones from CSV
    const csvPath = path.join(process.cwd(), 'documents', 'PostcodeZone.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const records: PostcodeZone[] = parse(csvContent, {
      columns: true,
      skip_empty_lines: true
    });

    // Find zone for postcode
    const postcode = params.postcode.toUpperCase().split(' ')[0]; // Get first part of postcode
    const zoneRecord = records.find(r => postcode.startsWith(r.postcode));
    const zone = zoneRecord ? `Z${zoneRecord.zone}` : 'Unknown';

    // Calculate radiation based on zone, orientation, and slope
    // This is a simplified calculation - you should implement your actual logic
    const baseRadiation = 1000; // Base radiation value
    const orientationFactor = Math.cos((params.roofOrientation * Math.PI) / 180);
    const slopeFactor = Math.cos((params.roofSlope * Math.PI) / 180);
    const amountOfRadiation = baseRadiation * orientationFactor * slopeFactor;

    // Calculate annual output
    const annualOutput = params.pvOutput * amountOfRadiation * (1 - params.shadeFactor/100);

    return {
      zone,
      amountOfRadiation,
      annualOutput,
      pvOutput: params.pvOutput
    };
  } catch (error) {
    console.error('Error in solar calculation:', error);
    throw error;
  }
}

export async function generatePDF(data: any): Promise<string> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  return `/generated-pdfs/installation_${timestamp}.pdf`;
} 