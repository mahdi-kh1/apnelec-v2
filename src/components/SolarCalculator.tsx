'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

type CalculationResult = {
  annualOutput: number;
  recommendedPanels: number;
  estimatedSavings: number;
};

export default function SolarCalculator() {
  const [roofArea, setRoofArea] = useState<number>(0);
  const [roofType, setRoofType] = useState<string>('');
  const [orientation, setOrientation] = useState<string>('');
  const [slope, setSlope] = useState<number>(0);
  const [shadeFactor, setShadeFactor] = useState<number>(0);
  const [zone, setZone] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/solar-calculator/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roofArea: Number(roofArea),
          roofType,
          orientation,
          slope: Number(slope),
          shadeFactor: Number(shadeFactor),
          zone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to calculate');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Solar Potential Calculator</CardTitle>
        <CardDescription>
          Calculate the solar potential for your property
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="roofArea">Roof Area (m²)</Label>
            <Input
              id="roofArea"
              type="number"
              min="0"
              step="0.1"
              value={roofArea}
              onChange={(e) => setRoofArea(parseFloat(e.target.value))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="roofType">Roof Type</Label>
            <Select value={roofType} onValueChange={setRoofType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select roof type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tile">Tile</SelectItem>
                <SelectItem value="slate">Slate</SelectItem>
                <SelectItem value="metal">Metal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="orientation">Orientation</Label>
            <Select value={orientation} onValueChange={setOrientation} required>
              <SelectTrigger>
                <SelectValue placeholder="Select orientation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="northeast">Northeast</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="southeast">Southeast</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="southwest">Southwest</SelectItem>
                <SelectItem value="west">West</SelectItem>
                <SelectItem value="northwest">Northwest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Roof Slope (degrees)</Label>
            <div className="pt-2">
              <Slider
                value={[slope]}
                onValueChange={(values) => setSlope(values[0])}
                min={0}
                max={90}
                step={1}
              />
              <div className="mt-1 text-sm text-gray-500">{slope}°</div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Shade Factor</Label>
            <div className="pt-2">
              <Slider
                value={[shadeFactor]}
                onValueChange={(values) => setShadeFactor(values[0])}
                min={0}
                max={1}
                step={0.1}
              />
              <div className="mt-1 text-sm text-gray-500">{(shadeFactor * 100).toFixed(0)}% shaded</div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="zone">Zone</Label>
            <Select value={zone} onValueChange={setZone} required>
              <SelectTrigger>
                <SelectValue placeholder="Select zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Zone 1</SelectItem>
                <SelectItem value="2">Zone 2</SelectItem>
                <SelectItem value="3">Zone 3</SelectItem>
                <SelectItem value="4">Zone 4</SelectItem>
                <SelectItem value="5">Zone 5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Calculating...' : 'Calculate Solar Potential'}
          </Button>

          {result && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{result.annualOutput.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Annual Output (kWh)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{result.recommendedPanels}</div>
                  <div className="text-sm text-gray-500">Recommended Panels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">£{result.estimatedSavings.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Estimated Annual Savings</div>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
} 