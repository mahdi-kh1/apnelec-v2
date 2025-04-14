import { promises as fs } from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

export interface SolarCalculationInputs {
  pvOutput: number;  // kWp
  postcode: string;
  slope: number;  // degrees
  orientation: number;  // degrees
  shadeFactor: number;  // percentage
  occupancyType: 'home_all_day' | 'in_half_day' | 'out_all_day' | 'unknown';
  annualConsumption: number;  // kWh
}

export interface SolarCalculationResult {
  annualACOutput: number;  // kWh
  selfConsumptionPercentage: number;
  estimatedSavings: number;  // £
  zone: string;
}

export async function getZoneFromPostcode(postcode: string): Promise<string | null> {
  try {
    const normalizedPostcode = postcode.toLowerCase();
    
    // Read the CSV file
    const csvPath = path.join(process.cwd(), 'documents', 'PostcodeZone.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    const lines = csvContent.toLowerCase().replace(/\r/g, '').split('\n');
    const headers = lines.shift()?.split(',') || [];

    // Find the zone for the postcode
    let numOfChars = 4;
    let postcodeZone;

    while (numOfChars > 0 && !postcodeZone) {
      const searchPostcode = normalizedPostcode.substr(0, numOfChars);
      postcodeZone = lines
        .map(line => {
          const values = line.split(',');
          return headers.reduce((obj: any, header, i) => {
            obj[header] = values[i];
            return obj;
          }, {});
        })
        .find(e => e.postcode === searchPostcode);
      numOfChars--;
    }

    if (!postcodeZone) {
      return null;
    }

    return 'Z' + postcodeZone.zone.toUpperCase();
  } catch (error) {
    console.error('Error in getZoneFromPostcode:', error);
    return null;
  }
}

// Cache for irradiance data to avoid reading the Excel file multiple times
let irradianceDataCache: { [key: string]: any } = {};

async function getIrradianceData(zone: string, slope: number, orientation: number): Promise<number> {
  try {
    // Round slope and orientation to nearest 5 degrees for lookup
    const roundedSlope = Math.round(slope / 5) * 5;
    // Clamp slope between 0 and 90 degrees
    const clampedSlope = Math.max(0, Math.min(90, roundedSlope));
    
    const positiveOrientation = Math.abs(orientation);
    const roundedOrientation = Math.round(positiveOrientation / 5) * 5;
    // Clamp orientation between 0 and 180 degrees
    const clampedOrientation = Math.min(180, roundedOrientation);
    
    // Check if we have the data in cache
    const cacheKey = `${zone}_${clampedSlope}_${clampedOrientation}`;
    if (irradianceDataCache[cacheKey] !== undefined) {
      return irradianceDataCache[cacheKey];
    }
    
    console.log(`Looking up irradiance data for zone: ${zone}, slope: ${clampedSlope}, orientation: ${clampedOrientation}`);
    
    // Read the Excel file
    const excelPath = path.join(process.cwd(), 'documents', 'Irradiance-Datasets.xlsx');
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelPath);
    
    // The first worksheet contains the data
    const worksheet = workbook.worksheets[0];
    
    if (!worksheet) {
      console.error('No worksheet found in Irradiance-Datasets.xlsx');
      return 950; // Default value
    }
    
    // Find the row for the slope
    let targetRow: any = null;
    let exactMatch = false;
    
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header row
      
      const rowSlope = Number(row.getCell(1).value);
      if (!isNaN(rowSlope)) {
        if (rowSlope === clampedSlope) {
          targetRow = row;
          exactMatch = true;
          return false; // Break the loop
        } else if (!exactMatch && !targetRow) {
          // Use as fallback if no exact match
          targetRow = row;
        }
      }
    });
    
    if (!targetRow) {
      console.error(`No data found for slope ${clampedSlope}, using default value`);
      return 950; // Default value
    }
    
    // Find the column for the orientation
    // Headers are in 5-degree increments from 0 to 180
    const orientationStep = 5;
    const orientationIndex = Math.round(clampedOrientation / orientationStep) + 2; // +2 because first column is slope
    const irradianceCell = targetRow.getCell(orientationIndex);
    
    if (!irradianceCell || irradianceCell.value === null) {
      console.error(`No data found for orientation ${clampedOrientation}, using default value`);
      return 950; // Default value
    }
    
    const irradiance = Number(irradianceCell.value);
    
    if (isNaN(irradiance)) {
      console.error(`Invalid irradiance value for slope ${clampedSlope}, orientation ${clampedOrientation}`);
      return 950; // Default value
    }
    
    // Cache the result
    irradianceDataCache[cacheKey] = irradiance;
    
    return irradiance;
  } catch (error) {
    console.error('Error reading irradiance data:', error);
    return 950; // Default value
  }
}

// Cache for peak velocity pressure data
let peakVelocityPressureCache: { [key: string]: number } = {};

async function getPeakVelocityPressure(zone: string): Promise<number> {
  try {
    // Check if we have the data in cache
    if (peakVelocityPressureCache[zone] !== undefined) {
      return peakVelocityPressureCache[zone];
    }
    
    // Read the CSV file
    const csvPath = path.join(process.cwd(), 'documents', 'Peak velocity pressures (qp) in pascals.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    const lines = csvContent.split('\n');
    
    // Find the row for the zone
    const zoneRow = lines.find(line => {
      const values = line.split(',');
      return values[0] === zone;
    });
    
    if (!zoneRow) {
      console.error(`No data found for zone ${zone} in peak velocity pressure data`);
      return 1000; // Default value
    }
    
    // Extract the peak velocity pressure value
    const values = zoneRow.split(',');
    const peakVelocityPressure = Number(values[1]);
    
    // Cache the result
    peakVelocityPressureCache[zone] = peakVelocityPressure;
    
    return peakVelocityPressure;
  } catch (error) {
    console.error('Error reading peak velocity pressure data:', error);
    return 1000; // Default value
  }
}

// Cache for MGD003 lookup tables
let mgd003Cache: { [key: string]: any } = {};

async function getMGD003Data(sheetName: string, rowKey: string, columnKey: string): Promise<number> {
  try {
    // Check if we have the data in cache
    const cacheKey = `${sheetName}_${rowKey}_${columnKey}`;
    if (mgd003Cache[cacheKey] !== undefined) {
      return mgd003Cache[cacheKey];
    }
    
    // Read the CSV file instead of Excel
    const csvPath = path.join(process.cwd(), 'documents', 'MGD003-LookupTables-FINAL.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    const lines = csvContent.split('\n');
    
    // Find the performance ratio for the zone
    const zoneNumber = rowKey.substring(1); // Remove 'Z' prefix
    const performanceRatio = 0.75; // Default value
    
    // Parse CSV to find the correct value
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith(zoneNumber + ',')) {
        const values = line.split(',');
        if (values.length >= 2) {
          const ratio = Number(values[1]);
          if (!isNaN(ratio)) {
            return ratio;
          }
        }
        break;
      }
    }
    
    return performanceRatio;
  } catch (error) {
    console.error('Error reading MGD003 data:', error);
    return 0.75; // Default performance ratio
  }
}

async function calculateSelfConsumption(
  annualConsumption: number,
  annualACOutput: number,
  occupancyType: string
): Promise<number> {
  try {
    // Default self-consumption percentages based on occupancy type
    const defaultRates: { [key: string]: number } = {
      'home_all_day': 0.45,  // 45% self-consumption
      'in_half_day': 0.30,   // 30% self-consumption
      'out_all_day': 0.20,   // 20% self-consumption
      'unknown': 0.30        // 30% self-consumption as default
    };
    
    // Get base rate for this occupancy type
    const type = occupancyType || 'unknown';
    const baseRate = defaultRates[type] || 0.30;
    
    // Calculate the ratio of production to consumption
    const ratio = annualACOutput / annualConsumption;
    
    // If production exceeds consumption, cap self-consumption based on consumption
    if (ratio > 1) {
      // Maximum possible self-consumption (as a percentage of generation)
      return annualConsumption / annualACOutput;
    } else {
      // For lower production, use the default consumption rate
      return baseRate;
    }
  } catch (error) {
    console.error('Error calculating self-consumption:', error);
    return 0.30; // Default 30% as fallback
  }
}

export interface DetailedSolarCalculationResult {
  // A. Installation data
  installedCapacity: number;  // kWp
  orientation: number;  // degrees from south
  inclination: number;  // degrees from horizontal
  postcode: string;
  region: string;  // derived from zone
  
  // B. Performance calculations
  kwhPerKwp: number;  // kWh/kWp (Kk)
  shadeFactor: number;  // %
  estimatedAnnualOutput: number;  // kWh
  
  // C. Estimated PV self-consumption - PV Only
  occupancyArchetype: string;
  annualElectricityConsumption: number;  // kWh
  expectedSelfConsumption: number;  // kWh
  gridIndependence: number;  // %
  
  // D. Estimated PV self-consumption - With EESS
  batteryCapacity: number;  // kWh
  expectedSelfConsumptionWithBattery: number;  // kWh
  gridIndependenceWithBattery: number;  // %
}

export async function calculateSolarOutput(params: SolarCalculationInputs): Promise<DetailedSolarCalculationResult | null> {
  try {
    const { pvOutput, postcode, slope, orientation, shadeFactor, occupancyType, annualConsumption } = params;
    
    console.log('Starting solar calculation with params:', params);
    
    // STEP 1: Get zone and region
    const zone = await getZoneFromPostcode(postcode);
    console.log('Determined zone:', zone);
    if (!zone) {
      console.error('Could not determine zone from postcode');
      return null;
    }
    
    // Map zone to region
    const regions: { [key: string]: string } = {
      'Z1': 'South East England',
      'Z2': 'South England',
      'Z3': 'South West England',
      'Z4': 'South West Peninsula',
      'Z5E': 'Thames Valley East',
      'Z5W': 'Thames Valley West',
      'Z6': 'Midlands',
      'Z7E': 'West Pennines East',
      'Z7W': 'West Pennines West',
      'Z8E': 'North West England East',
      'Z8S': 'North West England South',
      'Z9E': 'North East England East',
      'Z9S': 'North East England South',
      'Z10': 'Borders',
      'Z11': 'Yorkshire',
      'Z12': 'East Anglia',
      'Z13': 'Wales',
      'Z14': 'West Scotland',
      'Z15': 'East Scotland',
      'Z16': 'North East Scotland',
      'Z17': 'Highland',
      'Z18': 'Western Isles',
      'Z19': 'Orkney',
      'Z20': 'Shetland',
      'Z21': 'Northern Ireland'
    };
    
    // Extract region from zone (handle subzones like Z5E, Z5W, etc.)
    let region: string;
    if (regions[zone]) {
      region = regions[zone];
    } else {
      // Try to match main zone (e.g., Z5 from Z5E)
      const mainZone = zone.substring(0, 2);
      if (regions[mainZone]) {
        region = regions[mainZone] + " (Region)";
      } else {
        region = zone; // Fallback to zone code
      }
    }
    
    console.log('Using region:', region);
    
    // STEP 2: Get irradiance data (kWh/kWp)
    console.log('Looking up irradiance data for slope:', slope, 'orientation:', orientation);
    const kwhPerKwp = await getIrradianceData(zone, slope, orientation);
    console.log('Retrieved kWh/kWp:', kwhPerKwp);
    
    // STEP 3: Get performance ratio
    console.log('Looking up performance ratio from MGD003');
    const performanceRatio = await getMGD003Data('Performance Ratio', zone, 'Standard');
    console.log('Retrieved performance ratio:', performanceRatio);
    
    // STEP 4: Calculate annual output
    const shadeFactorDecimal = 1 - (shadeFactor / 100);
    const estimatedAnnualOutput = kwhPerKwp * pvOutput * performanceRatio * shadeFactorDecimal;
    console.log('Calculated annual output:', estimatedAnnualOutput);
    
    // STEP 5: Calculate self-consumption
    const selfConsumptionPercentage = await calculateSelfConsumption(
      annualConsumption,
      estimatedAnnualOutput,
      occupancyType
    );
    console.log('Calculated self-consumption percentage:', selfConsumptionPercentage);
    
    // STEP 6: Calculate with battery (if applicable)
    const batteryCapacity = 0; // No battery in this calculation
    const selfConsumptionWithBattery = selfConsumptionPercentage; // Same as without battery for now
    
    // STEP 7: Calculate grid independence - must not exceed 100%
    let expectedSelfConsumption = Math.round(estimatedAnnualOutput * selfConsumptionPercentage);
    // Ensure self-consumption doesn't exceed annual consumption
    if (expectedSelfConsumption > annualConsumption) {
      expectedSelfConsumption = annualConsumption;
    }
    
    const gridIndependence = (expectedSelfConsumption / annualConsumption) * 100;
    const gridIndependenceWithBattery = gridIndependence; // Same as without battery for now
    
    // Convert occupancy type to more readable format
    let occupancyArchetype: string;
    switch(occupancyType) {
      case 'home_all_day':
        occupancyArchetype = "Home All Day";
        break;
      case 'in_half_day':
        occupancyArchetype = "In Half Day";
        break;
      case 'out_all_day':
        occupancyArchetype = "Out All Day";
        break;
      default:
        occupancyArchetype = "Unknown";
        break;
    }
    
    console.log('Expected self-consumption:', expectedSelfConsumption);
    console.log('Grid independence:', gridIndependence);
    
    return {
      // A. Installation data
      installedCapacity: pvOutput,
      orientation: orientation,
      inclination: slope,
      postcode: postcode,
      region: region,
      
      // B. Performance calculations
      kwhPerKwp: kwhPerKwp,
      shadeFactor: shadeFactor,
      estimatedAnnualOutput: Math.round(estimatedAnnualOutput),
      
      // C. Estimated PV self-consumption - PV Only
      occupancyArchetype: occupancyArchetype,
      annualElectricityConsumption: annualConsumption,
      expectedSelfConsumption: expectedSelfConsumption,
      gridIndependence: parseFloat(gridIndependence.toFixed(1)),
      
      // D. Estimated PV self-consumption - With EESS
      batteryCapacity: batteryCapacity,
      expectedSelfConsumptionWithBattery: expectedSelfConsumption,
      gridIndependenceWithBattery: parseFloat(gridIndependence.toFixed(1))
    };
  } catch (error) {
    console.error('Error in calculateSolarOutput:', error);
    return null;
  }
} 