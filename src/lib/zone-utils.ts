import { promises as fs } from "fs";
import path from "path";
import ExcelJS from "exceljs";

export interface SolarCalculationInputs {
  pvOutput: number; // kWp
  postcode: string;
  slope: number; // degrees
  orientation: number; // degrees
  shadeFactor: number; // percentage
  occupancyType: "home_all_day" | "in_half_day" | "out_all_day" | "unknown";
  annualConsumption: number; // kWh
  batteryCapacity: number; // kWh
}

export interface SolarCalculationResult {
  annualACOutput: number; // kWh
  selfConsumptionPercentage: number;
  estimatedSavings: number; // £
  zone: string;
}

export async function getZoneFromPostcode(
  postcode: string
): Promise<string | null> {
  try {
    const normalizedPostcode = postcode.toLowerCase();

    // Read the CSV file
    const csvPath = path.join(process.cwd(), "documents", "PostcodeZone.csv");
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.toLowerCase().replace(/\r/g, "").split("\n");
    const headers = lines.shift()?.split(",") || [];

    // Find the zone for the postcode
    let numOfChars = 4;
    let postcodeZone;

    while (numOfChars > 0 && !postcodeZone) {
      const searchPostcode = normalizedPostcode.substr(0, numOfChars);
      postcodeZone = lines
        .map((line) => {
          const values = line.split(",");
          return headers.reduce((obj: any, header, i) => {
            obj[header] = values[i];
            return obj;
          }, {});
        })
        .find((e) => e.postcode === searchPostcode);
      numOfChars--;
    }

    if (!postcodeZone) {
      return null;
    }

    return "Z" + postcodeZone.zone.toUpperCase();
  } catch (error) {
    console.error("Error in getZoneFromPostcode:", error);
    return null;
  }
}

// Cache for irradiance data to avoid reading the Excel file multiple times
let irradianceDataCache: { [key: string]: any } = {};

// async function getIrradianceData(zone: string, slope: number, orientation: number): Promise<number> {
//   try {
//     // Round slope and orientation to nearest 5 degrees for lookup
//     // const roundedSlope = Math.round(slope / 5) * 5;
//     // Clamp slope between 0 and 90 degrees
//     const clampedSlope = Math.max(0, Math.min(90, slope));

//     // Make sure orientation is in the correct range (-180 to 180)
//     let orientationValue = orientation;
//     if (orientationValue < -180) orientationValue = -180;
//     if (orientationValue > 180) orientationValue = 180;

//     // Convert to positive for lookup (Excel only has 0-180)
//     const positiveOrientation = Math.abs(orientationValue);
//     const roundedOrientation = Math.round(positiveOrientation / 5) * 5;
//     // Clamp orientation between 0 and 180 degrees
//     const clampedOrientation = Math.min(180, roundedOrientation);

//     // Check if we have the data in cache
//     const cacheKey = `${zone}_${clampedSlope}_${clampedOrientation}`;
//     if (irradianceDataCache[cacheKey] !== undefined) {
//       console.log(`Using cached irradiance data for ${cacheKey}: ${irradianceDataCache[cacheKey]}`);
//       return irradianceDataCache[cacheKey];
//     }

//     console.log(`Looking up irradiance data for zone: ${zone}, slope: ${clampedSlope}, orientation: ${clampedOrientation}`);

//     // Map zone to region
//     const regions: { [key: string]: string } = {
//       'Z1': 'Zone 1 - London',
//       'Z2': 'Zone 2 - Brighton',
//       'Z3': 'Zone 3 - Southampton',
//       'Z4': 'Zone 4 - Plymouth',
//       'Z5E': 'Zone 5E - Bristol',
//       'Z5W': 'Zone 5W - Cardiff',
//       'Z6': 'Zone 6 - Birmingham',
//       'Z7E': 'Zone 7E - Manchester',
//       'Z7W': 'Zone 7W - Chester',
//       'Z8E': 'Zone 8E - Carlisle',
//       'Z8S': 'Zone 8S - Dumfries',
//       'Z9E': 'Zone 9E - Newcastle',
//       'Z9S': 'Zone 9S - Edinburgh',
//       'Z10': 'Zone 10 - Middlesborough',
//       'Z11': 'Zone 11 - Sheffield',
//       'Z12': 'Zone 12 - Norwich',
//       'Z13': 'Zone 13 - Aberystwith',
//       'Z14': 'Zone 14 - Glasgow',
//       'Z15': 'Zone 15 - Dundee',
//       'Z16': 'Zone 16 - Aberdeen',
//       'Z17': 'Zone 17 - Inverness',
//       'Z18': 'Zone 18 - Stornoway',
//       'Z19': 'Zone 19 - Kirkwall',
//       'Z20': 'Zone 20 - Lerwick',
//       'Z21': 'Zone 21 - Belfast'
//     };

//     // Get region from zone
//     let region: string;
//     if (regions[zone]) {
//       region = regions[zone];
//     } else {
//       // Try to match main zone (e.g., Z5 from Z5E)
//       const mainZone = zone.substring(0, 2);
//       if (regions[mainZone]) {
//         region = regions[mainZone] + " (Region)";
//       } else {
//         region = zone; // Fallback to zone code
//       }
//     }

//     console.log(`Using region "${region}" for zone ${zone}`);

//     // Check if the Excel file exists
//     const excelPath = path.join(process.cwd(), 'documents', 'Irradiance-Datasets.xlsx');
//     try {
//       await fs.access(excelPath);
//     } catch (error) {
//       console.error(`Error accessing Irradiance-Datasets.xlsx: ${error}`);
//       return 950; // Default value if file doesn't exist
//     }

//     console.log('Access to Irradiance-Datasets.xlsx successful');

//     // Read the Excel file
//     let workbook;
//     try {
//       workbook = new ExcelJS.Workbook();
//       await workbook.xlsx.readFile(excelPath);
//     } catch (error) {
//       console.error(`Error reading Excel file: ${error}`);
//       return 950; // Default value
//     }

//     console.log('Successfully read Irradiance-Datasets.xlsx');

//     // List all worksheet names for debugging
//     console.log('Available worksheets:', workbook.worksheets.map(ws => ws.name));

//     // Access the worksheet by region name
//     const worksheet = workbook.getWorksheet(region);

//     if (!worksheet) {
//       console.error(`No worksheet found for region "${region}"`);
//       console.log('Falling back to first worksheet');
//       const fallbackWorksheet = workbook.worksheets[0];

//       if (!fallbackWorksheet) {
//         console.error('No worksheets found in the workbook');
//         return 950; // Default value
//       }

//       // Use the fallback worksheet
//       return processWorksheet(fallbackWorksheet, clampedSlope, clampedOrientation, cacheKey);
//     }

//     console.log(`Accessing worksheet for region: ${region}`);

//     return processWorksheet(worksheet, clampedSlope, clampedOrientation, cacheKey);
//   } catch (error) {
//     console.error('Error reading irradiance data:', error);
//     return 950; // Default value
//   }
// }

// Helper function to process worksheet data

async function getIrradianceData(
  zone: string,
  slope: number,
  orientation: number
): Promise<number> {
  try {
    const clampedSlope = Math.max(0, Math.min(90, slope));

    let orientationValue = orientation;
    if (orientationValue < -180) orientationValue = -180;
    if (orientationValue > 180) orientationValue = 180;
    const positiveOrientation = Math.abs(orientationValue);
    const roundedOrientation = Math.round(positiveOrientation / 5) * 5;
    const clampedOrientation = Math.min(180, roundedOrientation);

    const cacheKey = `${zone}_${clampedSlope}_${clampedOrientation}`;
    if (irradianceDataCache[cacheKey] !== undefined) {
      console.log(
        `Using cached irradiance data for ${cacheKey}: ${irradianceDataCache[cacheKey]}`
      );
      return irradianceDataCache[cacheKey];
    }

    console.log(
      `Looking up irradiance data for zone: ${zone}, slope: ${clampedSlope}, orientation: ${clampedOrientation}`
    );

    const regions: { [key: string]: string } = {
      Z1: "Zone 1 - London",
      Z2: "Zone 2 - Brighton",
      Z3: "Zone 3 - Southampton",
      Z4: "Zone 4 - Plymouth",
      Z5E: "Zone 5E - Bristol",
      Z5W: "Zone 5W - Cardiff",
      Z6: "Zone 6 - Birmingham",
      Z7E: "Zone 7E - Manchester",
      Z7W: "Zone 7W - Chester",
      Z8E: "Zone 8E - Carlisle",
      Z8S: "Zone 8S - Dumfries",
      Z9E: "Zone 9E - Newcastle",
      Z9S: "Zone 9S - Edinburgh",
      Z10: "Zone 10 - Middlesborough",
      Z11: "Zone 11 - Sheffield",
      Z12: "Zone 12 - Norwich",
      Z13: "Zone 13 - Aberystwith",
      Z14: "Zone 14 - Glasgow",
      Z15: "Zone 15 - Dundee",
      Z16: "Zone 16 - Aberdeen",
      Z17: "Zone 17 - Inverness",
      Z18: "Zone 18 - Stornoway",
      Z19: "Zone 19 - Kirkwall",
      Z20: "Zone 20 - Lerwick",
      Z21: "Zone 21 - Belfast",
    };

    let region: string;
    if (regions[zone]) {
      region = regions[zone];
    } else {
      const mainZone = zone.substring(0, 2);
      if (regions[mainZone]) {
        region = regions[mainZone] + " (Region)";
      } else {
        region = zone; // Fallback to zone code
      }
    }

    const excelPath = path.join(
      process.cwd(),
      "documents",
      "Irradiance-Datasets.xlsx"
    );
    try {
      await fs.access(excelPath);
    } catch (error) {
      console.error(`Error accessing Irradiance-Datasets.xlsx: ${error}`);
      return 950; // Default value if file doesn't exist
    }

    let workbook;
    try {
      workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(excelPath);
    } catch (error) {
      console.error(`Error reading Excel file: ${error}`);
      return 950; // Default value
    }

    const worksheet = workbook.getWorksheet(region);
    if (!worksheet) {
      console.error(`No worksheet found for region "${region}"`);
      return 950; // Default value
    }

    console.log(`Accessing worksheet for region: ${region}`);

    return processWorksheet(
      worksheet,
      clampedSlope,
      clampedOrientation,
      cacheKey
    );
  } catch (error) {
    console.error("Error reading irradiance data:", error);
    return 950; // Default value
  }
}

// function processWorksheet(worksheet: ExcelJS.Worksheet, clampedSlope: number, clampedOrientation: number, cacheKey: string): number {
//   // Find the row for the slope
//   let targetRow: any = null;
//   let exactMatch = false;

//   worksheet.eachRow((row, rowNumber) => {
//     if (rowNumber === 1) return; // Skip header row

//     // console.log(`Row ${rowNumber} values:`, row.values);

//     let rowSlope;
//     try {
//       rowSlope = Number(row.getCell(2).value);
//     } catch (error) {
//       console.warn(`Error reading slope value in row ${rowNumber}: ${error}`);
//       return; // Skip this row
//     }

//     if (!isNaN(rowSlope)) {
//       if (rowSlope === clampedSlope) {
//         targetRow = row;
//         exactMatch = true;
//         return false; // Break the loop
//       } else if (!exactMatch && !targetRow) {
//         // Use as fallback if no exact match
//         targetRow = row;
//       }
//     }
//   });

//   if (!targetRow) {
//     console.error(`No data found for slope ${clampedSlope}, using default value`);
//     return 950; // Default value
//   }

//   // Find the column for the orientation
//   // Headers are in 5-degree increments from 0 to 180
//   const orientationStep = 5;
//   const orientationIndex = Math.round(clampedOrientation / orientationStep) + 2; // +2 because first column is slope

//   let irradianceCell;
//   try {
//     irradianceCell = targetRow.getCell(orientationIndex);
//   } catch (error) {
//     console.error(`Error accessing cell for orientation ${clampedOrientation}: ${error}`);
//     return 950; // Default value
//   }

//   if (!irradianceCell || irradianceCell.value === null) {
//     console.error(`No data found for orientation ${clampedOrientation}, using default value`);
//     return 950; // Default value
//   }

//   let irradiance;
//   try {
//     irradiance = Number(irradianceCell.value);
//   } catch (error) {
//     console.error(`Error converting irradiance value to number: ${error}`);
//     return 950; // Default value
//   }

//   if (isNaN(irradiance)) {
//     console.error(`Invalid irradiance value for slope ${clampedSlope}, orientation ${clampedOrientation}`);
//     return 950; // Default value
//   }

//   console.log(`Successfully retrieved irradiance value: ${irradiance}`);

//   // Cache the result
//   irradianceDataCache[cacheKey] = irradiance;

//   console.log('Successfully accessed worksheet');

//   return irradiance;
// }

// Cache for peak velocity pressure data

function processWorksheet(
  worksheet: ExcelJS.Worksheet,
  clampedSlope: number,
  clampedOrientation: number,
  cacheKey: string
): number {
  let targetRow: any = null;
  let exactMatch = false;

  // بررسی هر سطر برای پیدا کردن سطر مناسب با شیب
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // سطر اول که هدر است را رد می‌کنیم

    let rowSlope;
    try {
      rowSlope = Number(row.getCell(2).value); // فرض بر این است که ستون ۲ مربوط به شیب است
    } catch (error) {
      console.warn(`Error reading slope value in row ${rowNumber}: ${error}`);
      return; // این ردیف را نادیده می‌گیریم
    }

    if (!isNaN(rowSlope)) {
      if (rowSlope === clampedSlope) {
        targetRow = row;
        exactMatch = true;
        return false; // توقف حلقه زمانی که سطر مناسب پیدا شد
      } else if (!exactMatch && !targetRow) {
        // استفاده از اولین ردیف نزدیک به شیب
        targetRow = row;
      }
    }
  });

  if (!targetRow) {
    console.error(
      `No data found for slope ${clampedSlope}, using default value`
    );
    return 950; // مقدار پیش‌فرض
  }

  // بررسی ستون مناسب برای جهت‌گیری (orientation)
  const orientationStep = 5; // هر ۵ درجه یک ستون در جهت‌گیری
  const orientationIndex = Math.round(clampedOrientation / orientationStep) + 3; // +3 چون ستون اول برای شیب است و ستون دوم برای اعداد جهت‌گیری است

  let irradianceCell;
  try {
    irradianceCell = targetRow.getCell(orientationIndex); // سلول مناسب با جهت‌گیری
  } catch (error) {
    console.error(
      `Error accessing cell for orientation ${clampedOrientation}: ${error}`
    );
    return 950; // مقدار پیش‌فرض
  }

  if (!irradianceCell || irradianceCell.value === null) {
    console.error(
      `No data found for orientation ${clampedOrientation}, using default value`
    );
    return 950; // مقدار پیش‌فرض
  }

  let irradiance;
  try {
    irradiance = Number(irradianceCell.value);
  } catch (error) {
    console.error(`Error converting irradiance value to number: ${error}`);
    return 950; // مقدار پیش‌فرض
  }

  if (isNaN(irradiance)) {
    console.error(
      `Invalid irradiance value for slope ${clampedSlope}, orientation ${clampedOrientation}`
    );
    return 950; // مقدار پیش‌فرض
  }

  console.log(`Successfully retrieved irradiance value: ${irradiance}`);

  // ذخیره نتیجه در کش
  irradianceDataCache[cacheKey] = irradiance;

  console.log("Successfully accessed worksheet");

  return irradiance;
}

let peakVelocityPressureCache: { [key: string]: number } = {};

async function getPeakVelocityPressure(zone: string): Promise<number> {
  try {
    // Check if we have the data in cache
    if (peakVelocityPressureCache[zone] !== undefined) {
      return peakVelocityPressureCache[zone];
    }

    // Read the CSV file
    const csvPath = path.join(
      process.cwd(),
      "documents",
      "Peak velocity pressures (qp) in pascals.csv"
    );
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n");

    // Find the row for the zone
    const zoneRow = lines.find((line) => {
      const values = line.split(",");
      return values[0] === zone;
    });

    if (!zoneRow) {
      console.error(
        `No data found for zone ${zone} in peak velocity pressure data`
      );
      return 1000; // Default value
    }

    // Extract the peak velocity pressure value
    const values = zoneRow.split(",");
    const peakVelocityPressure = Number(values[1]);

    // Cache the result
    peakVelocityPressureCache[zone] = peakVelocityPressure;

    return peakVelocityPressure;
  } catch (error) {
    console.error("Error reading peak velocity pressure data:", error);
    return 1000; // Default value
  }
}

// Cache for MGD003 lookup tables
let mgd003Cache: { [key: string]: any } = {};

async function getMGD003Data(
  sheetName: string,
  rowKey: string,
  columnKey: string
): Promise<number> {
  try {
    // Check if we have the data in cache
    const cacheKey = `${sheetName}_${rowKey}_${columnKey}`;
    if (mgd003Cache[cacheKey] !== undefined) {
      return mgd003Cache[cacheKey];
    }

    // Read the CSV file instead of Excel
    const csvPath = path.join(
      process.cwd(),
      "documents",
      "MGD003-LookupTables-FINAL.csv"
    );
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n");

    // Find the performance ratio for the zone
    const zoneNumber = rowKey.substring(1); // Remove 'Z' prefix
    const performanceRatio = 0.75; // Default value

    // Parse CSV to find the correct value
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith(zoneNumber + ",")) {
        const values = line.split(",");
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
    console.error("Error reading MGD003 data:", error);
    return 0.75; // Default performance ratio
  }
}

async function calculateSelfConsumption(
  annualConsumption: number,
  annualACOutput: number,
  occupancyType: string,
  batteryCapacity: number = 0
): Promise<{
  selfConsumptionRate: number;
  selfConsumptionWithBattery: number;
}> {
  try {
    console.log(`--input:`, {
      annualConsumption,
      annualACOutput,
      occupancyType,
      batteryCapacity,
    });
    // Get the appropriate column from the lookup table based on occupancy type
    let occupancyCategory: string;
    switch (occupancyType) {
      case "home_all_day":
        occupancyCategory = "Home all day";
        break;
      case "in_half_day":
        occupancyCategory = "In half the day";
        break;
      case "out_all_day":
        occupancyCategory = "Out during the day";
        break;
      default:
        occupancyCategory = "Home all day"; // Default to home all day if unknown
    }
    console.log(
      `Looking up self-consumption for occupancy type: ${occupancyCategory}`
    );

    // Determine which consumption row to use based on annual consumption
    let consumptionBand: string;

    if (annualConsumption < 1500) {
      consumptionBand = "1,500 kWh to 1,999 kWh"; // Use the smallest band if consumption is below 1500
    } else if (annualConsumption < 2000) {
      consumptionBand = "1,500 kWh to 1,799 kWh";
    } else if (annualConsumption < 2500) {
      consumptionBand = "2,000 kWh to 2,499 kWh";
    } else if (annualConsumption < 3000) {
      consumptionBand = "2,500 kWh to 2,999 kWh";
    } else if (annualConsumption < 3500) {
      consumptionBand = "3,000 kWh to 3,499 kWh";
    } else if (annualConsumption < 4000) {
      consumptionBand = "3,500 kWh to 3,999 kWh";
    } else if (annualConsumption < 4500) {
      consumptionBand = "4,000 kWh to 4,499 kWh";
    } else if (annualConsumption < 5000) {
      consumptionBand = "4,500 kWh to 4,999 kWh";
    } else if (annualConsumption < 5500) {
      consumptionBand = "5,000 kWh to 5,499 kWh";
    } else {
      consumptionBand = "5,500 kWh to 5,999 kWh"; // Use the largest band if consumption is above 5500
    }
    console.log(`Using consumption band: ${consumptionBand}`);

    // Determine which generation band to use based on annual output
    let generationBand: string;

    if (annualACOutput < 300) {
      generationBand = "0 kWh to 299 kWh";
    } else if (annualACOutput < 600) {
      generationBand = "300 kWh to 599 kWh";
    } else if (annualACOutput < 900) {
      generationBand = "900 kWh to 899 kWh";
    } else if (annualACOutput < 1200) {
      generationBand = "900 kWh to 1,199 kWh";
    } else if (annualACOutput < 1500) {
      generationBand = "1200 kWh to 1,499 kWh";
    } else if (annualACOutput < 1800) {
      generationBand = "1500 kWh to 1,799 kWh";
    } else if (annualACOutput < 2100) {
      generationBand = "1800 kWh to 2,099 kWh";
    } else if (annualACOutput < 2400) {
      generationBand = "2100 kWh to 2,399 kWh";
    } else if (annualACOutput < 2700) {
      generationBand = "2400 kWh to 2,699 kWh";
    } else if (annualACOutput < 3000) {
      generationBand = "2700 kWh to 2,999 kWh";
    } else if (annualACOutput < 3300) {
      generationBand = "3000 kWh to 3,299 kWh";
    } else if (annualACOutput < 3600) {
      generationBand = "3300 kWh to 3,599 kWh";
    } else if (annualACOutput < 3900) {
      generationBand = "3600 kWh to 3,899 kWh";
    } else if (annualACOutput < 4200) {
      generationBand = "3900 kWh to 4,199 kWh";
    } else if (annualACOutput < 4500) {
      generationBand = "4200 kWh to 4,499 kWh";
    } else if (annualACOutput < 4800) {
      generationBand = "4500 kWh to 4,799 kWh";
    } else if (annualACOutput < 5100) {
      generationBand = "4800 kWh to 5,099 kWh";
    } else if (annualACOutput < 5400) {
      generationBand = "5100 kWh to 5,399 kWh";
    } else if (annualACOutput < 5700) {
      generationBand = "5400 kWh to 5,699 kWh";
    } else {
      generationBand = "5700 kWh to 5,999 kWh";
    }
    console.log(`Using generation band: ${generationBand}`);

    let batteryCapacityIndex: number;

    if (batteryCapacity < 1.1) {
      batteryCapacityIndex = 0;
    } else if (batteryCapacity >= 1.1 && batteryCapacity < 2.1) {
      batteryCapacityIndex = 1;
    } else if (batteryCapacity >= 2.1 && batteryCapacity < 3.1) {
      batteryCapacityIndex = 2;
    } else if (batteryCapacity >= 3.1 && batteryCapacity < 4.1) {
      batteryCapacityIndex = 3;
    } else if (batteryCapacity >= 4.1 && batteryCapacity < 5.1) {
      batteryCapacityIndex = 4;
    } else if (batteryCapacity >= 5.1 && batteryCapacity < 6.1) {
      batteryCapacityIndex = 5;
    } else if (batteryCapacity >= 6.1 && batteryCapacity < 7.1) {
      batteryCapacityIndex = 6;
    } else if (batteryCapacity >= 7.1 && batteryCapacity < 8.1) {
      batteryCapacityIndex = 7;
    } else if (batteryCapacity >= 8.1 && batteryCapacity < 9.1) {
      batteryCapacityIndex = 8;
    } else if (batteryCapacity >= 9.1 && batteryCapacity < 10.1) {
      batteryCapacityIndex = 9;
    } else if (batteryCapacity >= 10.1 && batteryCapacity < 11.1) {
      batteryCapacityIndex = 10;
    } else if (batteryCapacity >= 11.1 && batteryCapacity < 12.1) {
      batteryCapacityIndex = 11;
    } else if (batteryCapacity >= 12.1 && batteryCapacity < 13.1) {
      batteryCapacityIndex = 12;
    } else if (batteryCapacity >= 13.1 && batteryCapacity < 14.1) {
      batteryCapacityIndex = 13;
    } else if (batteryCapacity >= 14.1 && batteryCapacity < 15.1) {
      batteryCapacityIndex = 14;
    } else {
      batteryCapacityIndex = 0;
    }

    // Read the lookup table from CSV
    try {
      const csvPath = path.join(
        process.cwd(),
        "documents",
        "MGD003-LookupTables-FINAL.csv"
      );
      console.log(`Reading CSV file from: ${csvPath}`);

      const csvContent = await fs.readFile(csvPath, "utf-8");
      const lines = csvContent.split("\n");
      console.log(`CSV file loaded with ${lines.length} lines`);

      // Find the header row for the correct occupancy type
      let headerRowIndex = -1;
      let pvOnlyColIndex = -1;
      let batteryColIndex = -1;
      let foundSection = false;
      let selfConsumptionPercentage = 0;
      let selfConsumptionWithBatteryPercentage = 0;

      console.log(
        `Searching for section with occupancy: ${occupancyCategory} and consumption band: ${consumptionBand}`
      );

      // Construct the exact section header we're looking for
      const sectionHeader = `Occupancy: ${occupancyCategory}. Annual electricity consumption: ${consumptionBand}`;
      console.log(`Looking for section header: ${sectionHeader}`);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes(sectionHeader)) {
          headerRowIndex = i + 2; // Skip the header line and the battery capacity header line
          foundSection = true;
          console.log(`Found exact section header at line ${i}`);
          console.log(`Setting header row to line ${headerRowIndex}`);
          break;
        }
      }

      if (!foundSection) {
        console.log(`Could not find section header: ${sectionHeader}`);
      }

      if (foundSection && headerRowIndex !== -1) {
        // Find the column indices for 'PV' and 'Battery' in the header row
        const headerRow = lines[headerRowIndex].split(",");
        console.log(`Header row content: ${headerRow.join("|")}`);

        for (let j = 0; j < headerRow.length; j++) {
          if (headerRow[j].trim() === "PV") {
            pvOnlyColIndex = j;
            console.log(`Found 'PV' column at index ${j}`);
          }
        }
        batteryColIndex = batteryCapacityIndex;

        if (pvOnlyColIndex === -1) {
          console.log("Could not find 'PV' column in header row");
        }

        // Now, search for the generation band row and get the values from the found columns
        console.log(`Searching for generation band: ${generationBand}`);

        // Skip the "Annual generation from solar PV system, kWh" prefix when searching
        const searchGenerationBand = generationBand.replace(/,/g, ""); // Remove commas for comparison

        // for (let i = headerRowIndex + 1; i < lines.length; i++) {
        for (let i = headerRowIndex + 1; i < lines.length; i++) {
          const dataRow = lines[i];
          if (dataRow.trim() === "") {
            console.log(`Reached end of section at line ${i}`);
            break;
          }
          // Clean up the row data for comparison
          const cleanRow = dataRow.replace(/,/g, "");
          if (cleanRow.includes(searchGenerationBand)) {
            console.log(`Found generation band row: ${dataRow}`);
            // Parse CSV line properly handling commas within quotes
            const values: string[] = [];
            let value = "";
            let insideQuotes = false;

            for (let char of dataRow) {
              if (char === '"') {
                insideQuotes = !insideQuotes;
              } else if (char === "," && !insideQuotes) {
                values.push(value.trim());
                value = "";
              } else {
                value += char;
              }
            }
            // Push the last value
            values.push(value.trim());

            console.log(`Parsed row values: ${JSON.stringify(values)}`);
            let targetOccurrence = 1; // Default value

            if (occupancyCategory === "Home all day") {
              targetOccurrence = 1;
            } else if (occupancyCategory === "In half the day") {
              targetOccurrence = 2;
            } else if (occupancyCategory === "Out during the day") {
              targetOccurrence = 3;
            }

            let occurrenceCount = 0;
            selfConsumptionPercentage = 0;
            selfConsumptionWithBatteryPercentage = 0;

            for (let i = 0; i < values.length; i++) {
              if (values[i].trim() === generationBand) {
                occurrenceCount++;
                if (occurrenceCount === targetOccurrence) {
                  // Get PV only value
                  if (pvOnlyColIndex !== -1 && values[pvOnlyColIndex]) {
                    const rawValue = values[pvOnlyColIndex].trim();
                    const cleanValue = rawValue.replace(/["'\s]/g, "");
                    const match = cleanValue.match(/^([\d.]+)%?$/);
                    if (match) {
                      selfConsumptionPercentage = parseFloat(match[1]);
                    }
                  }

                  // Get battery value if battery capacity is provided
                  if (
                    batteryCapacity > 0 &&
                    batteryColIndex !== -1 &&
                    values[batteryColIndex]
                  ) {
                    const rawValue = values[batteryColIndex].trim();
                    const cleanValue = rawValue.replace(/["'\s]/g, "");
                    const match = cleanValue.match(/^([\d.]+)%?$/);
                    if (match) {
                      selfConsumptionWithBatteryPercentage = parseFloat(
                        match[1]
                      );
                    }
                  } else {
                    // If no battery or no battery column found, use PV only value
                    selfConsumptionWithBatteryPercentage =
                      selfConsumptionPercentage;
                  }
                  break;
                }
              }
            }
          }
        }
      }

      if (
        foundSection &&
        (selfConsumptionPercentage > 0 ||
          selfConsumptionWithBatteryPercentage > 0)
      ) {
        console.log(
          `Found self-consumption percentages - PV Only: ${selfConsumptionPercentage}%, With Battery: ${selfConsumptionWithBatteryPercentage}%`
        );
        return {
          selfConsumptionRate: selfConsumptionPercentage,
          selfConsumptionWithBattery: selfConsumptionWithBatteryPercentage,
        };
      } else {
        console.log(
          "Could not find valid self-consumption percentages in lookup table"
        );
      }
    } catch (error) {
      console.error("Error reading self-consumption lookup table:", error);
    }

    // Fallback to default calculations if lookup table approach fails
    // Default self-consumption percentages based on occupancy type
    const defaultRates: { [key: string]: number } = {
      home_all_day: 0.45, // 45% self-consumption
      in_half_day: 0.3, // 30% self-consumption
      out_all_day: 0.2, // 20% self-consumption
      unknown: 0.3, // 30% self-consumption as default
    };

    // Get base rate for this occupancy type
    const type = occupancyType || "unknown";
    const baseRate = defaultRates[type] || 0.3;

    // Calculate the ratio of production to consumption
    const ratio = annualACOutput / annualConsumption;

    // If production exceeds consumption, cap self-consumption based on consumption
    let selfConsumptionRate =
      ratio > 1 ? annualConsumption / annualACOutput : baseRate;

    // Calculate battery boost factor (simple linear increase up to 30% additional self-consumption)
    const maxBatteryBoost = 0.3; // Maximum 30% additional self-consumption
    const batteryBoostFactor = Math.min(
      maxBatteryBoost,
      (batteryCapacity / 15.1) * maxBatteryBoost
    );

    // Apply battery boost to self-consumption rate
    const selfConsumptionWithBattery = Math.min(
      1,
      selfConsumptionRate + batteryBoostFactor
    );

    return {
      selfConsumptionRate: selfConsumptionRate * 100,
      selfConsumptionWithBattery: selfConsumptionWithBattery * 100,
    };
  } catch (error) {
    console.error("Error calculating self-consumption:", error);
    return {
      selfConsumptionRate: 30, // Default 30% as fallback
      selfConsumptionWithBattery: 30,
    };
  }
}

export interface DetailedSolarCalculationResult {
  // A. Installation data
  installedCapacity: number; // kWp
  orientation: number; // degrees from south
  inclination: number; // degrees from horizontal
  postcode: string;
  region: string; // derived from zone

  // B. Performance calculations
  kwhPerKwp: number; // kWh/kWp (Kk)
  shadeFactor: number; // %
  estimatedAnnualOutput: number; // kWh

  // C. Estimated PV self-consumption - PV Only
  occupancyArchetype: string;
  annualElectricityConsumption: number; // kWh
  selfConsumptionRate: number; // % - Percentage of generated electricity that is self-consumed
  expectedSelfConsumption: number; // kWh - Amount of generated electricity that is self-consumed
  exportedElectricity: number; // kWh - Amount of generated electricity exported to the grid
  gridIndependence: number; // % - Percentage of total consumption covered by PV

  // D. Estimated PV self-consumption - With EESS
  batteryCapacity: number; // kWh
  expectedSelfConsumptionWithBattery: number; // kWh
  gridIndependenceWithBattery: number; // %
}

export async function calculateSolarOutput(
  params: SolarCalculationInputs
): Promise<DetailedSolarCalculationResult | null> {
  try {
    if (!params) {
      console.error("Solar calculation params are null");
      return null;
    }

    const {
      pvOutput,
      postcode,
      slope,
      orientation,
      shadeFactor,
      occupancyType,
      annualConsumption,
      batteryCapacity,
    } = params;

    console.log("Starting solar calculation with params:", {
      ...params,
      batteryCapacity: `${batteryCapacity} kWh`,
    });

    // STEP 1: Get zone and region
    const zone = await getZoneFromPostcode(postcode);
    console.log("Determined zone:", zone);
    if (!zone) {
      console.error("Could not determine zone from postcode");
      return null;
    }

    // Map zone to region
    const regions: { [key: string]: string } = {
      Z1: "Zone 1 - London",
      Z2: "Zone 2 - Brighton",
      Z3: "Zone 3 - Southampton",
      Z4: "Zone 4 - Plymouth",
      Z5E: "Zone 5E - Bristol",
      Z5W: "Zone 5W - Cardiff",
      Z6: "Zone 6 - Birmingham",
      Z7E: "Zone 7E - Manchester",
      Z7W: "Zone 7W - Chester",
      Z8E: "Zone 8E - Carlisle",
      Z8S: "Zone 8S - Dumfries",
      Z9E: "Zone 9E - Newcastle",
      Z9S: "Zone 9S - Edinburgh",
      Z10: "Zone 10 - Middlesborough",
      Z11: "Zone 11 - Sheffield",
      Z12: "Zone 12 - Norwich",
      Z13: "Zone 13 - Aberystwith",
      Z14: "Zone 14 - Glasgow",
      Z15: "Zone 15 - Dundee",
      Z16: "Zone 16 - Aberdeen",
      Z17: "Zone 17 - Inverness",
      Z18: "Zone 18 - Stornoway",
      Z19: "Zone 19 - Kirkwall",
      Z20: "Zone 20 - Lerwick",
      Z21: "Zone 21 - Belfast",
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

    console.log("Using region:", region);

    // STEP 2: Get irradiance data (kWh/kWp)
    console.log(
      "Looking up irradiance data for slope:",
      slope,
      "orientation:",
      orientation
    );
    const kwhPerKwp = await getIrradianceData(zone, slope, orientation);
    console.log("Retrieved kWh/kWp:", kwhPerKwp);

    // STEP 3: Get performance ratio
    console.log("Looking up performance ratio from MGD003");
    const performanceRatio = await getMGD003Data(
      "Performance Ratio",
      zone,
      "Standard"
    );
    console.log("Retrieved performance ratio:", performanceRatio);

    // STEP 4: Calculate annual output
    const shadeFactorDecimal = 1 - shadeFactor / 100;
    const estimatedAnnualOutput = kwhPerKwp * pvOutput * shadeFactorDecimal;
    console.log("Calculated annual output:", estimatedAnnualOutput);

    // STEP 5: Calculate self-consumption
    console.log(
      "Calculating self-consumption with battery capacity:",
      batteryCapacity,
      "kWh"
    );
    const selfConsumption = await calculateSelfConsumption(
      annualConsumption,
      estimatedAnnualOutput,
      occupancyType,
      batteryCapacity
    );
    console.log("Self-consumption calculation results:", {
      withoutBattery: `${selfConsumption.selfConsumptionRate.toFixed(1)}%`,
      withBattery: `${selfConsumption.selfConsumptionWithBattery.toFixed(1)}%`,
      batteryCapacity: `${batteryCapacity} kWh`,
      improvement: `${(
        selfConsumption.selfConsumptionWithBattery -
        selfConsumption.selfConsumptionRate
      ).toFixed(1)}%`,
    });

    // STEP 6: Calculate self-consumption values and grid independence
    let expectedSelfConsumption = Math.round(
      (estimatedAnnualOutput * selfConsumption.selfConsumptionRate) / 100
    );

    let expectedSelfConsumptionWithBattery = Math.round(
      (estimatedAnnualOutput * selfConsumption.selfConsumptionWithBattery) / 100
    );

    // Ensure self-consumption doesn't exceed annual consumption
    if (expectedSelfConsumption > annualConsumption) {
      expectedSelfConsumption = annualConsumption;
    }
    if (expectedSelfConsumptionWithBattery > annualConsumption) {
      expectedSelfConsumptionWithBattery = annualConsumption;
    }

    // Calculate exported electricity
    const exportedElectricity = Math.round(
      estimatedAnnualOutput - expectedSelfConsumption
    );

    // Calculate grid independence - must not exceed 100%
    const gridIndependence = Math.min(
      100,
      (expectedSelfConsumption / annualConsumption) * 100
    );

    const gridIndependenceWithBattery = Math.min(
      100,
      (expectedSelfConsumptionWithBattery / annualConsumption) * 100
    );

    console.log("Battery impact on grid independence:", {
      withoutBattery: `${gridIndependence.toFixed(1)}%`,
      withBattery: `${gridIndependenceWithBattery.toFixed(1)}%`,
      improvement: `${(gridIndependenceWithBattery - gridIndependence).toFixed(
        1
      )}%`,
      batteryCapacity: `${batteryCapacity} kWh`,
    });

    // Convert occupancy type to more readable format
    let occupancyArchetype: string;
    switch (occupancyType) {
      case "home_all_day":
        occupancyArchetype = "Home all day";
        break;
      case "in_half_day":
        occupancyArchetype = "In half the day";
        break;
      case "out_all_day":
        occupancyArchetype = "Out during the day";
        break;
      default:
        occupancyArchetype = "Home all day";
        break;
    }

    console.log("Expected self-consumption:", expectedSelfConsumption);
    console.log(
      "Expected self-consumption with battery:",
      expectedSelfConsumptionWithBattery
    );
    console.log("Exported electricity:", exportedElectricity);
    console.log("Grid independence:", gridIndependence);
    console.log("Grid independence with battery:", gridIndependenceWithBattery);

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
      selfConsumptionRate: parseFloat(
        selfConsumption.selfConsumptionRate.toFixed(1)
      ),
      expectedSelfConsumption: expectedSelfConsumption,
      exportedElectricity: exportedElectricity,
      gridIndependence: parseFloat(gridIndependence.toFixed(1)),

      // D. Estimated PV self-consumption - With EESS
      batteryCapacity: batteryCapacity || 0,
      expectedSelfConsumptionWithBattery: expectedSelfConsumptionWithBattery,
      gridIndependenceWithBattery: parseFloat(
        gridIndependenceWithBattery.toFixed(1)
      ),
    };
  } catch (error) {
    console.error("Error in calculateSolarOutput:", error);
    return null;
  }
}
