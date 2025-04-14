'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { Spinner } from '@/components/ui/spinner';

interface RoofData {
  type: string;
  orientation: number;
  slope: number;
  shadeFactor: number;
  pvOutput: number;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
}

interface CalculationResult {
  zone: string;
  amountOfRadiation: number;
  annualOutput: number;
  pvOutput: number;
}

export default function SolarCalculator() {
  const { data: session } = useSession();
  const router = useRouter();
  const [step, setStep] = useState('customer');
  const [loading, setLoading] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: ''
  });
  const [roofs, setRoofs] = useState<RoofData[]>([{
    type: 'Main',
    orientation: 0,
    slope: 30,
    shadeFactor: 0,
    pvOutput: 5
  }]);
  const [results, setResults] = useState<CalculationResult | null>(null);

  const handleCustomerChange = (field: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoofChange = (index: number, field: keyof RoofData, value: number | string) => {
    setRoofs(prev => prev.map((roof, i) => 
      i === index ? { ...roof, [field]: value } : roof
    ));
  };

  const addRoof = () => {
    setRoofs(prev => [...prev, {
      type: `Roof ${prev.length + 1}`,
      orientation: 0,
      slope: 30,
      shadeFactor: 0,
      pvOutput: 5
    }]);
  };

  const removeRoof = (index: number) => {
    setRoofs(prev => prev.filter((_, i) => i !== index));
  };

  const calculateResults = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/solar-calculator/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postcode: customerData.postcode,
          roofs
        })
      });

      if (!response.ok) {
        throw new Error('Failed to calculate solar output');
      }

      const data = await response.json();
      setResults(data);
      setStep('results');
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to calculate solar output',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const saveInstallation = async () => {
    if (!session?.user) {
      toast({
        title: 'Error',
        description: 'You must be logged in to save an installation',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/installations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: customerData,
          roofs,
          results
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save installation');
      }

      const data = await response.json();
      router.push(`/dashboard/installations/${data.id}`);
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save installation',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Solar Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={step} onValueChange={setStep}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="customer">Customer Details</TabsTrigger>
            <TabsTrigger value="roofs">Roof Details</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="customer">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={customerData.name}
                    onChange={e => handleCustomerChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerData.email}
                    onChange={e => handleCustomerChange('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={customerData.phone}
                  onChange={e => handleCustomerChange('phone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={customerData.address}
                  onChange={e => handleCustomerChange('address', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  value={customerData.postcode}
                  onChange={e => handleCustomerChange('postcode', e.target.value)}
                />
              </div>
              <Button onClick={() => setStep('roofs')}>Next</Button>
            </div>
          </TabsContent>

          <TabsContent value="roofs">
            <div className="space-y-6">
              {roofs.map((roof, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {roof.type}
                      {roofs.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="float-right"
                          onClick={() => removeRoof(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Orientation (degrees)</Label>
                        <Slider
                          value={[roof.orientation]}
                          onValueChange={([value]: number[]) => handleRoofChange(index, 'orientation', value)}
                          min={0}
                          max={360}
                          step={5}
                        />
                        <div className="text-sm text-muted-foreground text-center">
                          {roof.orientation}° ({
                            roof.orientation <= 22.5 ? 'North' :
                            roof.orientation <= 67.5 ? 'Northeast' :
                            roof.orientation <= 112.5 ? 'East' :
                            roof.orientation <= 157.5 ? 'Southeast' :
                            roof.orientation <= 202.5 ? 'South' :
                            roof.orientation <= 247.5 ? 'Southwest' :
                            roof.orientation <= 292.5 ? 'West' :
                            roof.orientation <= 337.5 ? 'Northwest' : 'North'
                          })
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Slope (degrees)</Label>
                        <Slider
                          value={[roof.slope]}
                          onValueChange={([value]: number[]) => handleRoofChange(index, 'slope', value)}
                          min={0}
                          max={90}
                          step={1}
                        />
                        <div className="text-sm text-muted-foreground text-center">
                          {roof.slope}°
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Shade Factor (%)</Label>
                        <Slider
                          value={[roof.shadeFactor]}
                          onValueChange={([value]: number[]) => handleRoofChange(index, 'shadeFactor', value)}
                          min={0}
                          max={100}
                          step={1}
                        />
                        <div className="text-sm text-muted-foreground text-center">
                          {roof.shadeFactor}%
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>PV Output (kWp)</Label>
                        <Input
                          type="number"
                          value={roof.pvOutput}
                          onChange={e => handleRoofChange(index, 'pvOutput', parseFloat(e.target.value))}
                          min={0}
                          step={0.1}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-between">
                <Button variant="outline" onClick={addRoof}>Add Roof</Button>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => setStep('customer')}>Back</Button>
                  <Button onClick={calculateResults} disabled={loading}>
                    {loading ? <Spinner className="mr-2" /> : null}
                    Calculate
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results">
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Total PV Output</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{results.pvOutput.toFixed(1)} kWp</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Annual Output</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{results.annualOutput.toFixed(1)} kWh</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <div>Zone: {results.zone}</div>
                  <div>Solar Radiation: {results.amountOfRadiation.toFixed(1)}%</div>
                </div>
                {session?.user && (
                  <Button onClick={saveInstallation} disabled={loading}>
                    {loading ? <Spinner className="mr-2" /> : null}
                    Save Installation
                  </Button>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p>No results yet. Please fill in the customer and roof details and click Calculate.</p>
                <Button className="mt-4" onClick={() => setStep('customer')}>
                  Start Over
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 