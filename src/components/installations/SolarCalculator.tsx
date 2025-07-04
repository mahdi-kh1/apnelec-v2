'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { toast } from 'react-hot-toast';
import { MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RoofType {
  name: string;
  src: string;
}

const roofTypes: RoofType[] = [
  { name: 'Pitched Composite Slate', src: '/icons/roof-type-02-piched-composite-slate.png' },
  { name: 'Pitched Slate', src: '/icons/roof-type-01-piched-slate.png' },
  { name: 'Pitched Plain Tile', src: '/icons/roof-type-04-piched-plain-tile.png' },
  { name: 'Pitched Concrete Tile', src: '/icons/roof-type-03-piched-concrete-tile.png' },
  { name: 'Pitched Sheet Metal', src: '/icons/roof-type-06-piched-sheet-metall.png' },
  { name: 'Pitched Pan Tile', src: '/icons/roof-type-05-piched-pan-tile.png' },
  { name: 'Flat', src: '/icons/roof-type-07-Flat.png' },
  { name: 'Ground Mounted', src: '/icons/roof-type-08-ground-mounted.png' }
];

interface SolarCalculatorProps {
  postcode: string;
  onCalculate: (results: any) => void;
}

export default function SolarCalculator({ postcode, onCalculate }: SolarCalculatorProps) {
  const [loading, setLoading] = useState(false);
  const [roofType, setRoofType] = useState<string>('');
  const [orientation, setOrientation] = useState<number>(0);
  const [slope, setSlope] = useState<number>(30);
  const [shadeFactor, setShadeFactor] = useState<number>(0);
  const [pvOutput, setPvOutput] = useState<number>(0);
  const [zone, setZone] = useState<string>('');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [occupancyType, setOccupancyType] = useState<string>('unknown');
  const [annualConsumption, setAnnualConsumption] = useState<number>(3500);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(0);
  const [results, setResults] = useState<any>(null);

  const handleGetZone = useCallback(async () => {
    try {
      const formattedPostcode = postcode.trim().replace(/\s+/g, '');
      if (!formattedPostcode) {
        setZone('');
        return;
      }
      
      const response = await fetch(`/api/solar-calculator/zone?postcode=${encodeURIComponent(formattedPostcode)}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || 'Failed to fetch zone';
        console.error('Zone API error:', errorMessage);
        toast.error(`Error: ${errorMessage}`);
        
        // If zone not found, try using a default zone
        if (response.status === 404) {
          console.log('Using default zone Z3');
          setZone('Z3'); // Use a default zone if not found
          return;
        }
        
        throw new Error(errorMessage);
      }
      
      const data = await response.json();
      console.log('Zone data:', data);
      setZone(data.zone);
    } catch (error) {
      console.error('Error getting zone:', error);
      toast.error('Failed to get zone information. Using default zone.');
      setZone('Z3'); // Use a default zone as fallback
    }
  }, [postcode]);

  const handleGetCoordinates = useCallback(async () => {
    try {
      const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
      if (!response.ok) throw new Error('Failed to fetch coordinates');
      const data = await response.json();
      
      setCoordinates({
        lat: data.result.latitude,
        lng: data.result.longitude
      });

      // Update map
      const mapContainer = document.getElementById('map-container');
      if (mapContainer) {
        const iframeSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.94233897586585!2d${data.result.longitude}!3d${data.result.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1702407346148!5m2!1sen!2s`;
        mapContainer.innerHTML = `<iframe src="${iframeSrc}" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      toast.error('Failed to get coordinates');
    }
  }, [postcode]);

  useEffect(() => {
    if (postcode) {
      handleGetZone();
      handleGetCoordinates();
    }
  }, [postcode, handleGetZone, handleGetCoordinates]);

  const handleCalculate = async () => {
    if (!zone) {
      toast.error('Please wait for zone calculation');
      return;
    }

    if (!roofType) {
      toast.error('Please select a roof type');
      return;
    }

    if (!pvOutput || pvOutput <= 0 || pvOutput > 100) {
      toast.error('Please enter a valid PV output between 0.1 and 100 kWp');
      return;
    }

    if (slope < 0 || slope > 90) {
      toast.error('Slope must be between 0 and 90 degrees');
      return;
    }

    if (orientation < -180 || orientation > 180) {
      toast.error('Orientation must be between -180 and 180 degrees');
      return;
    }

    if (shadeFactor < 0 || shadeFactor > 100) {
      toast.error('Shade factor must be between 0 and 100 percent');
      return;
    }

    console.log('Battery Capacity:', batteryCapacity, 'kWh');

    setLoading(true);
    try {
      // Round orientation to nearest 5 before sending to API
      const roundedOrientation = Math.round(orientation / 5) * 5;
      
      const response = await fetch('/api/solar-calculator/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pvOutput,
          postcode,
          slope,
          orientation: roundedOrientation,
          shadeFactor,
          occupancyType,
          annualConsumption,
          batteryCapacity,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Calculation failed');
      }
      
      const calculationResults = await response.json();
      console.log('Calculation results with battery:', {
        calculationResults,
        batteryCapacity,
        expectedSelfConsumptionWithBattery: calculationResults.expectedSelfConsumptionWithBattery,
        gridIndependenceWithBattery: calculationResults.gridIndependenceWithBattery
      });
      
      setResults(calculationResults);
      
      onCalculate({
        ...calculationResults,
        pvOutput,
        roofDetails: {
          type: roofType,
          orientation: roundedOrientation,
          slope,
          shadeFactor,
        },
      });
    } catch (error) {
      console.error('Error calculating results:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to calculate results');
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePDF = async () => {
    if (!results) {
      toast.error('Please calculate results first');
      return;
    }

    try {
      const pdfResponse = await fetch('/api/solar-calculator/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerDetails: {
            name: 'mahdi khodaei',
            email: 'mikhodaee@gmail.com',
            mobile: '989129525614',
            address: 'APN Elec 85 Howard Road, Sompting, Lancing, West Sussex , BN15 0LP'
          },
          installationDetails: {
            ...results,
            pvOutput,
            roofDetails: {
              type: roofType,
              orientation,
              slope,
              shadeFactor,
            },
          }
        }),
      });

      if (pdfResponse.ok) {
        const blob = await pdfResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'solar-calculation-results.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        throw new Error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF report');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>Roof Type</Label>
                <Select value={roofType} onValueChange={setRoofType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select roof type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roofTypes.map((type) => (
                      <SelectItem key={type.name} value={type.name}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Orientation (degrees)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[orientation]}
                    onValueChange={(values) => {
                      setOrientation(values[0]);
                    }}
                    min={-180}
                    max={180}
                    step={1}
                  />
                  <Input
                    type="number"
                    value={orientation}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      if (!isNaN(value)) {
                        // Clamp value between -180 and 180
                        value = Math.max(-180, Math.min(180, value));
                        setOrientation(value);
                      }
                    }}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <Label>Roof Slope (degrees)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[slope]}
                    onValueChange={(values) => setSlope(values[0])}
                    min={0}
                    max={90}
                    step={1}
                  />
                  <Input
                    type="number"
                    value={slope}
                    onChange={(e) => setSlope(Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <Label>Shade Factor (%)</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    value={[shadeFactor]}
                    onValueChange={(values) => setShadeFactor(values[0])}
                    min={0}
                    max={100}
                    step={1}
                  />
                  <Input
                    type="number"
                    value={shadeFactor}
                    onChange={(e) => setShadeFactor(Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>

              <div>
                <Label>PV System Output (kWp)</Label>
                <Input
                  type="number"
                  value={pvOutput}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 0 && value <= 100) {
                      setPvOutput(value);
                    }
                  }}
                  min={0}
                  max={100}
                  step={0.1}
                  placeholder="Enter value between 0.1 and 100 kWp"
                />
              </div>

              <div>
                <Label>Occupancy Type</Label>
                <Select value={occupancyType} onValueChange={setOccupancyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select occupancy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home_all_day">Home All Day</SelectItem>
                    <SelectItem value="in_half_day">In Half Day</SelectItem>
                    <SelectItem value="out_all_day">Out All Day</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Annual Consumption (kWh)</Label>
                <Input
                  type="number"
                  value={annualConsumption}
                  onChange={(e) => setAnnualConsumption(Number(e.target.value))}
                  min={0}
                  step={100}
                  placeholder="Enter annual electricity consumption"
                />
              </div>

              <div>
                <Label>Battery Capacity (kWh)</Label>
                <Input
                  type="number"
                  value={batteryCapacity}
                  onChange={(e) => setBatteryCapacity(Number(e.target.value))}
                  min={0}
                  max={15.1}
                  step={0.1}
                  placeholder="Enter battery capacity"
                />
              </div>

              <div>
                <Label>Zone</Label>
                <Input value={zone} readOnly />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>Location</Label>
                <div className="flex gap-2">
                  <Input value={postcode} readOnly />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleGetCoordinates}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Refresh Map
                  </Button>
                </div>
              </div>

              <div>
                <Label>Coordinates</Label>
                <div className="flex gap-2">
                  <Input
                    value={coordinates?.lat || ''}
                    placeholder="Latitude"
                    readOnly
                  />
                  <Input
                    value={coordinates?.lng || ''}
                    placeholder="Longitude"
                    readOnly
                  />
                </div>
              </div>

              <div id="map-container" className="w-full h-[300px] bg-gray-100 rounded-lg"></div>

              {results && (
                <div className="space-y-4 mt-4">
                  <h3 className="text-lg font-semibold">A. Installation Data</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Installed Capacity of PV System</Label>
                      <Input value={`${results.installedCapacity} kWp`} readOnly />
                    </div>
                    <div>
                      <Label>Orientation of PV System (degrees from south)</Label>
                      <Input value={`${results.orientation}°`} readOnly />
                    </div>
                    <div>
                      <Label>Inclination of System (degrees from horizontal)</Label>
                      <Input value={`${results.inclination}°`} readOnly />
                    </div>
                    <div>
                      <Label>Postcode</Label>
                      <Input value={results.postcode} readOnly />
                    </div>
                    <div>
                      <Label>Region</Label>
                      <Input value={results.region} readOnly />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-6">B. Performance Calculations</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>kWh/kWp (Kk) from table</Label>
                      <Input 
                        value={`${results.kwhPerKwp !== undefined ? Math.round(results.kwhPerKwp * 10) / 10 : 0} kWh/kWp`} 
                        readOnly 
                      />
                    </div>
                    <div>
                      <Label>Shade Factor (SF)</Label>
                      <Input value={`${results.shadeFactor}%`} readOnly />
                    </div>
                    <div>
                      <Label>Estimated Annual Output (kWp × Kk × SF)</Label>
                      <Input value={`${results.estimatedAnnualOutput} kWh`} readOnly />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-6">C. Estimated PV Self-Consumption - PV Only</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Assumed Occupancy Archetype</Label>
                      <Input value={results.occupancyArchetype} readOnly />
                    </div>
                    <div>
                      <Label>Assumed Annual Electricity Consumption</Label>
                      <Input value={`${results.annualElectricityConsumption} kWh`} readOnly />
                    </div>
                    <div>
                      <Label>Expected Solar PV Self-Consumption (PV Only)</Label>
                      <Input value={`${results.expectedSelfConsumption} kWh`} readOnly />
                    </div>
                    <div>
                      <Label>Grid Independence / Self-Sufficiency (Without Battery)</Label>
                      <Input value={`${results.gridIndependence}%`} readOnly />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-6">D. Estimated PV Self-Consumption - With EESS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Assumed Usable Capacity of Electrical Energy Storage Device</Label>
                      <Input value={`${batteryCapacity} kWh`} readOnly />
                    </div>
                    <div>
                      <Label>Expected Solar PV Self-Consumption (With EESS)</Label>
                      <Input value={`${results.expectedSelfConsumptionWithBattery} kWh`} readOnly />
                    </div>
                    <div>
                      <Label>Grid Independence / Self-Sufficiency (With EESS)</Label>
                      <Input value={`${results.gridIndependenceWithBattery}%`} readOnly />
                    </div>
                  </div>

                  <Button
                    onClick={handleGeneratePDF}
                    variant="outline"
                    className="w-full mt-4"
                  >
                    Download PDF Report
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          onClick={handleCalculate}
          disabled={loading || !zone || !roofType}
        >
          {loading ? 'Calculating...' : 'Calculate Results'}
        </Button>
      </div>
    </div>
  );
} 