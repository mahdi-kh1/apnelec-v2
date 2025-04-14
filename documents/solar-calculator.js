/**
 * Utility functions for solar calculator
 */

/**
 * Load and parse a CSV file
 * @param {string} filename - Path to the CSV file
 * @returns {Promise<Array>} - Parsed CSV data as an array of objects
 */
export async function loadCSVFile(filename) {
  try {
    const response = await fetch(filename);
    const text = await response.text();
    const lines = text.toLowerCase().replace(/\r/g, '').split('\n');
    const headers = lines.shift().split(',');
    const data = lines.map(line => {
      const currentLine = line.split(',');
      let obj = {};
      headers.forEach((header, i) => {
        obj[header] = currentLine[i];
      });
      return obj;
    });
    return data;
  } catch (error) {
    console.error('Error loading CSV file:', error);
    throw error;
  }
}

/**
 * Calculate solar output based on parameters
 * @param {Object} params - Calculation parameters
 * @returns {Object} - Calculation results
 */
export async function calculateSolarOutput(params) {
  const { 
    postcode, 
    roofOrientation, 
    roofSlope, 
    shadeFactor, 
    pvOutput 
  } = params;
  
  // Load postcode zone data
  const postcodeZones = await loadCSVFile('/Portals/0/solar-calculation/postcode-zone.csv');
  
  // Find zone for postcode
  let numOfChars = 4;
  let postcodeZone;
  const lowercasePostcode = postcode.toLowerCase();
  
  while (numOfChars > 0 && !postcodeZone) {
    postcodeZone = postcodeZones.find(e => e.postcode === lowercasePostcode.substr(0, numOfChars));
    numOfChars--;
  }
  
  if (!postcodeZone) {
    throw new Error('Postcode not found in database');
  }
  
  // Get zone file
  const zone = 'Z' + postcodeZone.zone.toUpperCase();
  const zoneFile = await loadCSVFile(`/Portals/0/solar-calculation/zones/${zone}.csv`);
  
  // Process orientation
  const positiveOrientation = Math.abs(parseFloat(roofOrientation));
  const orientation = Math.round(positiveOrientation / 5) * 5;
  
  if (orientation > 180) {
    throw new Error('Orientation out of range (0-180)');
  }
  
  // Process inclination
  const inclination = Math.round(parseFloat(roofSlope));
  
  if (inclination < 0 || inclination > 90) {
    throw new Error('Inclination out of range (0-90)');
  }
  
  // Get radiation amount from zone file
  const amountOfRadiation = parseFloat(zoneFile[inclination][orientation]);
  
  // Process shade factor
  const shadeFactorValue = 1 - (parseFloat(shadeFactor) / 100);
  
  if (shadeFactorValue < 0 || shadeFactorValue > 1) {
    throw new Error('Shade factor out of range (0-100)');
  }
  
  // Calculate result
  const kWp = parseFloat(pvOutput);
  const result = (amountOfRadiation * shadeFactorValue * kWp).toFixed(2);
  
  return {
    zone,
    amountOfRadiation,
    annualOutput: parseFloat(result),
    pvOutput: kWp
  };
}

/**
 * Generate PDF from installation data
 * @param {Object} installationData - Installation data
 * @returns {Promise<string>} - Path to generated PDF
 */
export async function generatePDF(installationData) {
  // Implementation for PDF generation
  // This would use a library like html2pdf or jsPDF
  
  // Example using html2pdf (client-side):
  /*
  const element = document.getElementById('contentToPdf');
  const currentDate = new Date();
  const dateString = currentDate.toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');
  const filename = `solar_calculation_${dateString}.pdf`;
  
  const opt = {
    margin: 0.5,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  return html2pdf().set(opt).from(element).save();
  */
  
  // For server-side PDF generation, you would use a different approach
  // Return the path to the generated PDF
  return `/generated-pdfs/installation_${installationData.id}.pdf`;
} 