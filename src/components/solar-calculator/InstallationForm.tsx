"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

// UI components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

// Define TypeScript interfaces
interface RoofData {
  orientation: number;
  slope: number;
  shadeFactor: number;
  pvOutput: number;
  type: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  postcode: string;
  street: string;
  city: string;
  telephone: string;
  buildingUse: string;
  propertyType: string;
  roofs: RoofData[];
  // For website customers
  isWebsiteCustomer: boolean;
}

interface CalculationResult {
  installation: any;
  pdfPath: string;
  success: boolean;
}

// Add new interface for calculation result from the API
interface RoofCalculationResult {
  annualACOutput: number;
  selfConsumptionPercentage: number;
  estimatedSavings: number;
  zone: string;
  kwhPerKwp?: number;
  roofType: string;
  amountOfRadiation?: number;
}

export default function InstallationForm() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState('customer');
  const [formData, setFormData] = useState<FormData>({
    // Customer details
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    
    // Address details
    postcode: '',
    street: '',
    city: '',
    telephone: '',
    buildingUse: 'Domestic',
    propertyType: 'Semi-detached',
    
    // Roof details
    roofs: [
      {
        orientation: 0,
        slope: 30,
        shadeFactor: 0,
        pvOutput: 0,
        type: 'Tile'
      }
    ],
    
    // For website customers
    isWebsiteCustomer: true
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authError, setAuthError] = useState<boolean>(false);
  const [results, setResults] = useState<CalculationResult | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRoofChange = (index: number, field: keyof RoofData, value: number | string) => {
    setFormData(prev => {
      const updatedRoofs = [...prev.roofs];
      updatedRoofs[index] = {
        ...updatedRoofs[index],
        [field]: value
      };
      return {
        ...prev,
        roofs: updatedRoofs
      };
    });
  };
  
  const addRoof = () => {
    setFormData(prev => ({
      ...prev,
      roofs: [
        ...prev.roofs,
        {
          orientation: 0,
          slope: 30,
          shadeFactor: 0,
          pvOutput: 0,
          type: 'Tile'
        }
      ]
    }));
  };
  
  const removeRoof = (index: number) => {
    if (formData.roofs.length > 1) {
      setFormData(prev => {
        const updatedRoofs = [...prev.roofs];
        updatedRoofs.splice(index, 1);
        return {
          ...prev,
          roofs: updatedRoofs
        };
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAuthError(false);
    
    // Check if user is authenticated before proceeding
    if (!session?.user) {
      setLoading(false);
      setAuthError(true);
      return;
    }
    
    try {
      // First, calculate the solar output for each roof
      const roofCalculations: RoofCalculationResult[] = [];
      
      for (const roof of formData.roofs) {
        const calculateResponse = await fetch('/api/solar-calculator/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pvOutput: roof.pvOutput,
            postcode: formData.postcode,
            slope: roof.slope,
            orientation: roof.orientation,
            shadeFactor: roof.shadeFactor,
            occupancyType: 'unknown', // Default occupancy type
            annualConsumption: 3500 // Default consumption value in kWh
          })
        });
        
        if (!calculateResponse.ok) {
          const errorData = await calculateResponse.json();
          throw new Error(errorData.error || 'Failed to calculate solar output');
        }
        
        const calculationResult = await calculateResponse.json();
        roofCalculations.push({
          ...calculationResult,
          roofType: roof.type
        });
      }
      
      // Calculate total outputs
      const totalPVOutput = formData.roofs.reduce((sum, roof) => sum + roof.pvOutput, 0);
      const totalAnnualOutput = roofCalculations.reduce((sum, result) => sum + result.annualACOutput, 0);
      const totalRadiation = roofCalculations.reduce((sum, result) => sum + (result.amountOfRadiation || 0), 0) / roofCalculations.length;
      
      // Create a customer first
      const customerResponse = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile
        })
      });
      
      if (!customerResponse.ok) {
        const errorData = await customerResponse.json();
        throw new Error(errorData.message || 'Failed to create customer');
      }
      
      const customerData = await customerResponse.json();
      
      // Now save the installation with the calculation results
      const installResponse = await fetch('/api/installations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customerId: customerData.id,
          postcode: formData.postcode,
          street: formData.street,
          city: formData.city,
          telephone: formData.telephone,
          buildingUse: formData.buildingUse,
          propertyType: formData.propertyType,
          roofDetails: formData.roofs.map(roof => ({
            orientation: roof.orientation,
            slope: roof.slope,
            shadeFactor: roof.shadeFactor,
            pvOutput: roof.pvOutput,
            type: roof.type
          })),
          occupancyArchetype: 'unknown',
          annualConsumption: 3500
        })
      });
      
      if (!installResponse.ok) {
        const errorData = await installResponse.json();
        throw new Error(errorData.message || 'Failed to create installation');
      }
      
      const data = await installResponse.json();
      
      // Create a result object for display
      const resultWithPdf = {
        installation: {
          ...data,
          totalPVOutput: totalPVOutput,
          annualACOutput: totalAnnualOutput,
          zone: roofCalculations[0]?.zone || 'Unknown',
          amountOfRadiation: totalRadiation,
          results: formData.roofs.map((roof, index) => ({
            type: roof.type,
            orientation: roof.orientation,
            slope: roof.slope,
            shadeFactor: roof.shadeFactor,
            result: {
              pvOutput: roof.pvOutput,
              annualOutput: roofCalculations[index]?.annualACOutput || 0,
              amountOfRadiation: roofCalculations[index]?.amountOfRadiation || 0
            }
          }))
        },
        pdfPath: `/generated-pdfs/installation_${data.id}.pdf`,
        success: true
      };
      
      setResults(resultWithPdf);
      setActiveTab('results');
      
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container py-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Solar Installation Calculator</CardTitle>
          <CardDescription>
            Calculate and plan your solar installation
          </CardDescription>
        </CardHeader>
        <CardContent>
          {authError ? (
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
              <h3 className="text-lg font-medium text-amber-800 mb-2">Authentication Required</h3>
              <p className="text-amber-700 mb-4">
                You need to be logged in to save installation details. Please sign in to continue.
              </p>
              <Button 
                onClick={() => router.push(`/sign-in?callbackUrl=${encodeURIComponent(window.location.href)}`)}
              >
                Go to Login
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="customer">Customer Details</TabsTrigger>
                  <TabsTrigger value="address">Property Details</TabsTrigger>
                  <TabsTrigger value="roof">Roof Details</TabsTrigger>
                </TabsList>
                
                {/* Customer Details Tab */}
                <TabsContent value="customer" className="space-y-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                      </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button type="button" onClick={() => setActiveTab('address')}>
                      Next
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Address Details Tab */}
                <TabsContent value="address" className="space-y-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode</Label>
                      <Input
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="street">Street</Label>
                      <Input
                        id="street"
                        name="street"
                        value={formData.street}
                            onChange={handleChange} 
                        required
                          />
                        </div>
                      </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Telephone</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                            type="tel" 
                        value={formData.telephone}
                            onChange={handleChange} 
                          />
                        </div>
                      </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="buildingUse">Building Use</Label>
                      <Select name="buildingUse" value={formData.buildingUse} onValueChange={(value) => setFormData(prev => ({ ...prev, buildingUse: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select building use" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Domestic">Domestic</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Industrial">Industrial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select name="propertyType" value={formData.propertyType} onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Detached">Detached</SelectItem>
                          <SelectItem value="Semi-detached">Semi-detached</SelectItem>
                          <SelectItem value="Terraced">Terraced</SelectItem>
                          <SelectItem value="Flat">Flat</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('customer')}>
                      Previous
                    </Button>
                    <Button type="button" onClick={() => setActiveTab('roof')}>
                      Next
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Roof Details Tab */}
                <TabsContent value="roof" className="space-y-6 py-4">
                  {formData.roofs.map((roof, index) => (
                    <Card key={index} className="mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>Roof {index + 1}</span>
                          {formData.roofs.length > 1 && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => removeRoof(index)}
                            >
                              Remove
                            </Button>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Roof Type</Label>
                          <Select 
                            value={roof.type} 
                            onValueChange={(value) => handleRoofChange(index, 'type', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select roof type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Tile">Tile</SelectItem>
                              <SelectItem value="Slate">Slate</SelectItem>
                              <SelectItem value="Flat">Flat</SelectItem>
                              <SelectItem value="Metal">Metal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Orientation (degrees)</Label>
                          <div className="pt-2">
                            <Slider
                              value={[roof.orientation]}
                              onValueChange={([value]) => handleRoofChange(index, 'orientation', value)}
                              min={0}
                              max={359}
                              step={1}
                            />
                            <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                              <span>{roof.orientation}°</span>
                              <span>
                                {roof.orientation <= 22.5 || roof.orientation > 337.5 ? 'North' :
                                 roof.orientation <= 67.5 ? 'Northeast' :
                                 roof.orientation <= 112.5 ? 'East' :
                                 roof.orientation <= 157.5 ? 'Southeast' :
                                 roof.orientation <= 202.5 ? 'South' :
                                 roof.orientation <= 247.5 ? 'Southwest' :
                                 roof.orientation <= 292.5 ? 'West' :
                                 'Northwest'}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Roof Slope (degrees)</Label>
                          <div className="pt-2">
                            <Slider
                              value={[roof.slope]}
                              onValueChange={([value]) => handleRoofChange(index, 'slope', value)}
                              min={0}
                              max={90}
                              step={1}
                            />
                            <div className="mt-1 text-sm text-muted-foreground">
                              {roof.slope}°
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Shade Factor (%)</Label>
                          <div className="pt-2">
                            <Slider
                              value={[roof.shadeFactor]}
                              onValueChange={([value]) => handleRoofChange(index, 'shadeFactor', value)}
                              min={0}
                              max={100}
                              step={1}
                            />
                            <div className="mt-1 text-sm text-muted-foreground">
                              {roof.shadeFactor}% shaded
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`pvOutput-${index}`}>PV Output (kWp)</Label>
                          <Input
                            id={`pvOutput-${index}`}
                            type="number"
                            value={roof.pvOutput}
                            onChange={(e) => handleRoofChange(index, 'pvOutput', parseFloat(e.target.value))}
                            min="0"
                            step="0.1"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={addRoof}
                    className="w-full mb-4"
                  >
                    Add Another Roof
                  </Button>
                  
                  {error && (
                    <div className="p-4 mb-4 bg-red-50 border border-red-300 rounded-md text-red-700">
                      {error}
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setActiveTab('address')}
                    >
                      Previous
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : session ? 'Calculate' : 'Calculate & Sign In'}
                    </Button>
                  </div>
                </TabsContent>
                
                {/* Results Tab */}
                {results && (
                  <TabsContent value="results" className="py-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Installation Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-lg font-medium mb-2">Customer Information</h4>
                            <p className="mb-1"><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                            <p className="mb-1"><span className="font-medium">Contact:</span> {formData.email} | {formData.mobile}</p>
                            <p className="mb-1"><span className="font-medium">Address:</span> {formData.street}, {formData.city}, {formData.postcode}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-2">Installation Details</h4>
                            <p className="mb-1"><span className="font-medium">Total PV Output:</span> {results.installation.totalPVOutput.toFixed(1)} kWp</p>
                            <p className="mb-1"><span className="font-medium">Annual AC Output:</span> {results.installation.annualACOutput.toFixed(1)} kWh</p>
                            <p className="mb-1"><span className="font-medium">Zone:</span> {results.installation.zone}</p>
                            <p className="mb-1"><span className="font-medium">Solar Radiation:</span> {results.installation.amountOfRadiation.toFixed(1)}%</p>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-medium mb-3">Roof Details</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="px-4 py-2 text-left">Roof</th>
                                <th className="px-4 py-2 text-left">Type</th>
                                <th className="px-4 py-2 text-left">Orientation</th>
                                <th className="px-4 py-2 text-left">Slope</th>
                                <th className="px-4 py-2 text-left">Shade Factor</th>
                                <th className="px-4 py-2 text-left">PV Output</th>
                                <th className="px-4 py-2 text-left">Annual Output</th>
                                <th className="px-4 py-2 text-left">Radiation</th>
                              </tr>
                            </thead>
                            <tbody>
                              {results.installation.results.map((roof: any, index: number) => (
                                <tr key={index} className="border-b">
                                  <td className="px-4 py-2">{index + 1}</td>
                                  <td className="px-4 py-2">{roof.type}</td>
                                  <td className="px-4 py-2">{roof.orientation}°</td>
                                  <td className="px-4 py-2">{roof.slope}°</td>
                                  <td className="px-4 py-2">{roof.shadeFactor}%</td>
                                  <td className="px-4 py-2">{roof.result.pvOutput.toFixed(1)} kWp</td>
                                  <td className="px-4 py-2">{roof.result.annualOutput.toFixed(1)} kWh</td>
                                  <td className="px-4 py-2">{roof.result.amountOfRadiation.toFixed(1)}%</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                          <Button asChild>
                            <a 
                              href={results.pdfPath} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Download PDF
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => router.push('/')}
                          >
                            Back to Home
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
              </Tabs>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 