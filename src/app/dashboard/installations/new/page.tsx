"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'react-hot-toast';
import { ArrowLeft, Loader2, Plus } from 'lucide-react';
import Link from 'next/link';
import SolarCalculator from '@/components/installations/SolarCalculator';
import dynamic from 'next/dynamic';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  addresses: {
    id: number;
    street: string;
    city: string;
    postcode: string;
  }[];
}

export default function NewInstallationPage() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin');
    },
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('customer-info');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [selectedAddressId, setSelectedAddressId] = useState<string>('');
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const [formData, setFormData] = useState({
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: {
        street: '',
        city: '',
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

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers');
        if (!response.ok) throw new Error('Failed to fetch customers');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        toast.error('Failed to load customers');
      }
    };

    fetchCustomers();
  }, []);

  const handleCustomerSelect = (customerId: string) => {
    if (customerId === 'new') {
      setIsNewCustomer(true);
      setSelectedCustomer(null);
      setSelectedAddressId('');
      setFormData(prev => ({
        ...prev,
        customer: {
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          address: {
            street: '',
            city: '',
            postcode: '',
          },
        },
      }));
    } else {
      setIsNewCustomer(false);
      const customer = customers.find(c => c.id.toString() === customerId);
      if (customer) {
        setSelectedCustomer(customer);
        setFormData(prev => ({
          ...prev,
          customer: {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email || '',
            mobile: customer.mobile || '',
            address: {
              street: '',
              city: '',
              postcode: '',
            },
          },
        }));
      }
    }
  };

  const handleAddressSelect = (addressId: string) => {
    setSelectedAddressId(addressId);
    if (selectedCustomer) {
      const address = selectedCustomer.addresses.find(a => a.id.toString() === addressId);
      if (address) {
        setFormData(prev => ({
          ...prev,
          customer: {
            ...prev.customer,
            address: {
              street: address.street || '',
              city: address.city || '',
              postcode: address.postcode,
            },
          },
          installation: {
            ...prev.installation,
            postcode: address.postcode,
          },
        }));
      }
    }
  };

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
    console.log('Calculation results:', results);
    
    // Separate the data for different parts of the form
    const totalPVOutput = results.installedCapacity || results.pvOutput || 0;
    const annualACOutput = results.estimatedAnnualOutput || results.annualACOutput || 0;
    console.log('Total batteryCapacity:', results.batteryCapacity);
    
    // Set a default batteryCapacity value if undefined or 0
    // const batteryCapacity = results.batteryCapacity !== undefined ? results.batteryCapacity : 5;
    
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
        // Store the complete results for reference
        results: results,
      },
    }));
    setActiveTab('results');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let customerId: number;

      if (isNewCustomer) {
        // Create new customer
        const customerResponse = await fetch('/api/customers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData.customer),
        });

        if (!customerResponse.ok) {
          throw new Error('Failed to create customer');
        }

        const customer = await customerResponse.json();
        customerId = customer.id;
      } else if (selectedCustomer) {
        customerId = selectedCustomer.id;
      } else {
        throw new Error('No customer selected');
      }

      // Create installation - transform data to match the server schema
      const installationResponse = await fetch('/api/installations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId,
          addressId: selectedAddressId ? parseInt(selectedAddressId) : undefined,
          postcode: formData.installation.postcode || formData.customer.address.postcode,
          zone: formData.installation.zone || '',
          totalPVOutput: formData.installation.totalPVOutput,
          annualACOutput: formData.installation.annualACOutput,
          roofDetails: {
            type: formData.installation.roofDetails.type,
            orientation: formData.installation.roofDetails.orientation,
            slope: formData.installation.roofDetails.slope,
            shadeFactor: formData.installation.roofDetails.shadeFactor
          },
          // Convert other calculation result fields to JSON for storage
          results: formData.installation.results
        }),
      });

      if (!installationResponse.ok) {
        throw new Error('Failed to create installation');
      }

      toast.success('Installation created successfully');
      router.push('/dashboard/installations');
    } catch (error) {
      console.error('Error creating installation:', error);
      toast.error('Failed to create installation');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard/installations" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">New Installation</h1>
      </div>

      <form onSubmit={handleSubmit}>
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
                <CardDescription>Select an existing customer or create a new one</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Label>Select Customer</Label>
                      <Select
                        value={selectedCustomer ? selectedCustomer.id.toString() : isNewCustomer ? 'new' : ''}
                        onValueChange={handleCustomerSelect}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a customer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">
                            <span className="flex items-center gap-2">
                              <Plus className="h-4 w-4" />
                              Create New Customer
                            </span>
                          </SelectItem>
                          {customers.map((customer) => (
                            <SelectItem key={customer.id} value={customer.id.toString()}>
                              {customer.firstName} {customer.lastName} ({customer.email})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedCustomer && (
                      <div className="flex-1">
                        <Label>Select Address</Label>
                        <Select value={selectedAddressId} onValueChange={handleAddressSelect}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an address" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedCustomer.addresses.map((address) => (
                              <SelectItem key={address.id} value={address.id.toString()}>
                                {address.street}, {address.city}, {address.postcode}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {(isNewCustomer || selectedCustomer) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.customer.firstName}
                          onChange={handleCustomerInfoChange}
                          required
                          readOnly={!isNewCustomer}
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
                          readOnly={!isNewCustomer}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.customer.email}
                          onChange={handleCustomerInfoChange}
                          required
                          readOnly={!isNewCustomer}
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
                          readOnly={!isNewCustomer}
                        />
                      </div>

                      {(isNewCustomer || !selectedAddressId) && (
                        <>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address.street">Street Address</Label>
                            <Input
                              id="address.street"
                              name="address.street"
                              value={formData.customer.address.street}
                              onChange={handleCustomerInfoChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address.city">City</Label>
                            <Input
                              id="address.city"
                              name="address.city"
                              value={formData.customer.address.city}
                              onChange={handleCustomerInfoChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address.postcode">Postcode</Label>
                            <Input
                              id="address.postcode"
                              name="address.postcode"
                              value={formData.customer.address.postcode}
                              onChange={handleCustomerInfoChange}
                              required
                            />
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between mt-6">
                    {selectedCustomer && (
                      <Link href={`/dashboard/customers/${selectedCustomer.id}/edit`}>
                        <Button type="button" variant="outline">
                          Edit Customer Details
                        </Button>
                      </Link>
                    )}
                    <Button
                      type="button"
                      onClick={() => setActiveTab('installation-details')}
                      disabled={!selectedCustomer && !isNewCustomer}
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
                <div className="flex justify-end mt-6 space-x-4">
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
                <CardDescription>Review and save the installation details</CardDescription>
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
                          // Create client-side PDF
                          const { jsPDF } = await import('jspdf');
                          // Dynamically import autoTable plugin for better formatting
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
                          doc.text(`Email: ${formData.customer.email}`, 14, 37);
                          doc.text(`Mobile: ${formData.customer.mobile}`, 14, 42);
                          doc.text(`Address: ${formData.customer.address.street}, ${formData.customer.address.city}, ${formData.customer.address.postcode}`, 14, 47);
                          
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
                          
                          // C. Estimated PV self-consumption - PV Only
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
                          
                          // D. Estimated PV self-consumption - With EESS
                          const tableEndY3 = (doc as any).lastAutoTable.finalY + 10;
                          doc.setFontSize(14);
                          doc.text('D. Estimated PV Self-Consumption - With EESS', 14, tableEndY3);
                          
                          autoTable(doc, {
                            startY: tableEndY3 + 3,
                            head: [['Parameter', 'Value']],
                            body: [
                              ['Assumed usable capacity of electrical energy storage device', `${formData.installation.batteryCapacity.toFixed(1)} kWh`],
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
                      Generate PDF Report
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
                    <Button
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        'Save Installation'
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
} 