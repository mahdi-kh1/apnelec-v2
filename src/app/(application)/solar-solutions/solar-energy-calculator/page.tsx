'use client';

import { useState } from 'react';
import SolarCalculator from '@/components/installations/SolarCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'react-hot-toast';

export default function SolarCalculatorPage() {
  const [activeTab, setActiveTab] = useState('customer-info');

  const [formData, setFormData] = useState({
    customer: {
      firstName: '',
      lastName: '',
      mobile: '',
      address: {
        street: '',
        postcode: '',
      },
    },
    installation: {
      postcode: '',
      zone: '',
      region: '',
      kwhPerKwp: 0,
      totalPVOutput: 0,
      annualACOutput: 0,
      occupancyArchetype: '',
      annualElectricityConsumption: 0,
      expectedSelfConsumption: 0,
      gridIndependence: 0,
      batteryCapacity: 0,
      expectedSelfConsumptionWithBattery: 0,
      gridIndependenceWithBattery: 0,
      roofDetails: {
        type: '',
        orientation: 0,
        slope: 0,
        shadeFactor: 0,
      },
      results: null,
    },
  });

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        customer: {
          ...prev.customer,
          address: {
            ...prev.customer.address,
            [addressField]: value
          }
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        customer: {
          ...prev.customer,
          [name]: value
        }
      }));
    }
  };

  const handleCalculationResults = (results: any) => {
    const totalPVOutput = results.installedCapacity || results.pvOutput || 0;
    const annualACOutput = results.estimatedAnnualOutput || results.annualACOutput || 0;
    
    setFormData(prev => ({
      ...prev,
      installation: {
        ...prev.installation,
        postcode: prev.installation.postcode || prev.customer.address.postcode,
        zone: results.zone || '',
        region: results.region || '',
        kwhPerKwp: results.kwhPerKwp || 0,
        totalPVOutput: totalPVOutput,
        annualACOutput: annualACOutput,
        occupancyArchetype: results.occupancyArchetype || '',
        annualElectricityConsumption: results.annualElectricityConsumption || 3500,
        expectedSelfConsumption: results.expectedSelfConsumption || 0,
        gridIndependence: results.gridIndependence || 0,
        batteryCapacity: results.batteryCapacity,
        expectedSelfConsumptionWithBattery: results.expectedSelfConsumptionWithBattery || 0,
        gridIndependenceWithBattery: results.gridIndependenceWithBattery || 0,
        roofDetails: {
          type: results.roofDetails?.type || '',
          orientation: results.roofDetails?.orientation || results.orientation || 0,
          slope: results.roofDetails?.slope || results.inclination || 0,
          shadeFactor: results.roofDetails?.shadeFactor || results.shadeFactor || 0,
        },
        results: results,
      },
    }));
    setActiveTab('results');
  };
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Solar Energy Calculator</h1>
      <p className="lead mb-4">
        Use our solar energy calculator to estimate the performance of your solar PV system.
        Enter your details and roof information to get started.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="customer-info">Customer Information</TabsTrigger>
          <TabsTrigger value="installation-details">Installation Details</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="customer-info">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Please enter your details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.customer.firstName}
                      onChange={handleCustomerInfoChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.customer.lastName}
                      onChange={handleCustomerInfoChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      value={formData.customer.mobile}
                      onChange={handleCustomerInfoChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address.postcode">Post Code</Label>
                    <Input
                      id="address.postcode"
                      name="address.postcode"
                      value={formData.customer.address.postcode}
                      onChange={handleCustomerInfoChange}
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address.street">Address</Label>
                    <Input
                      id="address.street"
                      name="address.street"
                      value={formData.customer.address.street}
                      onChange={handleCustomerInfoChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button
                    type="button"
                    onClick={() => {
                      if (!formData.customer.firstName || !formData.customer.lastName || !formData.customer.mobile || !formData.customer.address.postcode || !formData.customer.address.street) {
                        toast.error('Please fill in all required fields');
                        return;
                      }
                      setActiveTab('installation-details');
                    }}
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="installation-details">
          <Card>
            <CardHeader>
              <CardTitle>Installation Details</CardTitle>
              <CardDescription>Enter the installation specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <SolarCalculator
                postcode={formData.customer.address.postcode}
                onCalculate={handleCalculationResults}
              />
              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveTab('customer-info')}
                >
                  Previous
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Installation Results</CardTitle>
              <CardDescription>Review your calculation results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">A. Installation Data</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p><strong>Installed capacity of PV system:</strong> {formData.installation.totalPVOutput} kWp</p>
                    </div>
                    <div>
                      <p><strong>Orientation of the PV system:</strong> {formData.installation.roofDetails.orientation}°</p>
                    </div>
                    <div>
                      <p><strong>Inclination of system:</strong> {formData.installation.roofDetails.slope}°</p>
                    </div>
                    <div>
                      <p><strong>Postcode:</strong> {formData.customer.address.postcode}</p>
                    </div>
                    <div>
                      <p><strong>Region:</strong> {formData.installation.region || 'Unknown'}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">B. Performance Calculations</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p><strong>kWh/kWp (Kk) from table:</strong> {formData.installation.kwhPerKwp || 'N/A'} kWh/kWp</p>
                    </div>
                    <div>
                      <p><strong>Shade Factor (SF):</strong> {formData.installation.roofDetails.shadeFactor}%</p>
                    </div>
                    <div>
                      <p><strong>Estimated annual output (kWp x Kk x SF):</strong> {formData.installation.annualACOutput} kWh</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">C. Estimated PV Self-Consumption - PV Only</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p><strong>Assumed occupancy archetype:</strong> {formData.installation.occupancyArchetype || 'Unknown'}</p>
                    </div>
                    <div>
                      <p><strong>Assumed annual electricity consumption:</strong> {formData.installation.annualElectricityConsumption || '3500'} kWh</p>
                    </div>
                    <div>
                      <p><strong>Expected solar PV self-consumption (PV Only):</strong> {formData.installation.expectedSelfConsumption || 'N/A'} kWh</p>
                    </div>
                    <div>
                      <p><strong>Grid electricity independence / Self-sufficiency (Without battery):</strong> {formData.installation.gridIndependence || 'N/A'}%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">D. Estimated PV Self-Consumption - With EESS</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <p><strong>Assumed usable capacity of electrical energy storage device:</strong> {formData.installation.batteryCapacity ?? 'N/A'} kWh</p>
                    </div>
                    <div>
                      <p><strong>Expected solar PV self-consumption (With EESS):</strong> {formData.installation.expectedSelfConsumptionWithBattery || 'N/A'} kWh</p>
                    </div>
                    <div>
                      <p><strong>Grid electricity independence / Self-sufficiency (with EESS):</strong> {formData.installation.gridIndependenceWithBattery || 'N/A'}%</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={async () => {
                      try {
                        const { jsPDF } = await import('jspdf');
                        const autoTable = (await import('jspdf-autotable')).default;
                        
                        const doc = new jsPDF();
                        
                        // Title
                        doc.setFontSize(18);
                        doc.text('Solar PV System Performance Estimate', 105, 15, { align: 'center' });
                        
                        // Customer information
                        doc.setFontSize(14);
                        doc.text('Customer Information', 14, 25);
                        doc.setFontSize(10);
                        doc.text(`Name: ${formData.customer.firstName} ${formData.customer.lastName}`, 14, 32);
                        doc.text(`Mobile: ${formData.customer.mobile}`, 14, 37);
                        doc.text(`Address: ${formData.customer.address.street}`, 14, 42);
                        doc.text(`Post Code: ${formData.customer.address.postcode}`, 14, 47);
                        
                        // A. Installation data
                        doc.setFontSize(14);
                        doc.text('A. Installation Data', 14, 57);
                        
                        autoTable(doc, {
                          startY: 60,
                          head: [['Parameter', 'Value']],
                          body: [
                            ['Installed capacity of PV system', `${formData.installation.totalPVOutput} kWp`],
                            ['Orientation of the PV system', `${formData.installation.roofDetails.orientation}°`],
                            ['Inclination of system', `${formData.installation.roofDetails.slope}°`],
                            ['Postcode', formData.customer.address.postcode],
                            ['Region', formData.installation.region || 'Unknown'],
                          ],
                          theme: 'grid',
                        });
                        
                        // B. Performance calculations
                        const tableEndY = (doc as any).lastAutoTable.finalY + 10;
                        doc.setFontSize(14);
                        doc.text('B. Performance Calculations', 14, tableEndY);
                        
                        autoTable(doc, {
                          startY: tableEndY + 3,
                          head: [['Parameter', 'Value']],
                          body: [
                            ['kWh/kWp (Kk) from table', `${formData.installation.kwhPerKwp || 'N/A'} kWh/kWp`],
                            ['Shade Factor (SF)', `${formData.installation.roofDetails.shadeFactor}%`],
                            ['Estimated annual output', `${formData.installation.annualACOutput} kWh`],
                          ],
                          theme: 'grid',
                        });
                        
                        // C. Estimated PV self-consumption
                        const tableEndY2 = (doc as any).lastAutoTable.finalY + 10;
                        doc.setFontSize(14);
                        doc.text('C. Estimated PV Self-Consumption - PV Only', 14, tableEndY2);
                        
                        autoTable(doc, {
                          startY: tableEndY2 + 3,
                          head: [['Parameter', 'Value']],
                          body: [
                            ['Assumed occupancy archetype', formData.installation.occupancyArchetype || 'Unknown'],
                            ['Assumed annual electricity consumption', `${formData.installation.annualElectricityConsumption || '3500'} kWh`],
                            ['Expected solar PV self-consumption (PV Only)', `${formData.installation.expectedSelfConsumption || 'N/A'} kWh`],
                            ['Grid electricity independence / Self-sufficiency', `${formData.installation.gridIndependence || 'N/A'}%`],
                          ],
                          theme: 'grid',
                        });
                        
                        // D. Estimated PV self-consumption with battery
                        const tableEndY3 = (doc as any).lastAutoTable.finalY + 10;
                        doc.setFontSize(14);
                        doc.text('D. Estimated PV Self-Consumption - With EESS', 14, tableEndY3);
                        
                        autoTable(doc, {
                          startY: tableEndY3 + 3,
                          head: [['Parameter', 'Value']],
                          body: [
                            ['Assumed usable capacity of electrical energy storage device', `${formData.installation.batteryCapacity} kWh`],
                            ['Expected solar PV self-consumption (With EESS)', `${formData.installation.expectedSelfConsumptionWithBattery || 'N/A'} kWh`],
                            ['Grid electricity independence / Self-sufficiency (with EESS)', `${formData.installation.gridIndependenceWithBattery || 'N/A'}%`],
                          ],
                          theme: 'grid',
                        });
                        
                        // Footer
                        doc.setFontSize(10);
                        doc.text('This is a preliminary estimate and actual performance may vary.', 105, 280, { align: 'center' });
                        doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 285, { align: 'center' });
                        
                        // Save the PDF
                        doc.save('solar-calculation-results.pdf');
                        toast.success('PDF generated successfully');
                      } catch (error) {
                        console.error('Error generating PDF:', error);
                        toast.error('Failed to generate PDF report');
                      }
                    }}
                    className="mr-4"
                  >
                    Export Results as PDF
                  </Button>
                </div>

                <div className="flex justify-end mt-6 space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveTab('installation-details')}
                  >
                    Previous
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 



