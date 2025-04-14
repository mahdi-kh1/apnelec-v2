'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { use } from 'react';

interface InstallationData {
  id: number;
  customer: {
    firstName: string;
    lastName: string;
  };
  address: {
    street: string;
    city: string;
    postcode: string;
  };
  totalPVOutput: number;
  annualACOutput: number;
  zone: string;
  status: string;
}

interface NetworkInfo {
  macAddress: string;
  ipAddress: string;
}

export default function SignInstallationPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const router = useRouter();
  const [installation, setInstallation] = useState<InstallationData | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch installation data
        const installationResponse = await fetch(`/api/installations/sign/${token}`);
        if (!installationResponse.ok) {
          throw new Error('Invalid or expired signature link');
        }
        const installationData = await installationResponse.json();
        setInstallation(installationData);

        // Fetch network info
        const networkResponse = await fetch('/api/network-info');
        if (networkResponse.ok) {
          const networkData = await networkResponse.json();
          setNetworkInfo(networkData);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [token]);
  
  const handleSign = async () => {
    if (!installation || !customerName || !networkInfo) return;
    
    try {
      setLoading(true);
      
      const signatureData = {
        customerName,
        macAddress: networkInfo.macAddress,
        ipAddress: networkInfo.ipAddress,
        signedAt: new Date().toISOString()
      };
      
      const response = await fetch(`/api/installations/${installation.id}/sign`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signatureData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to sign installation');
      }
      
      const { pdfUrl } = await response.json();
      
      // Store signature info in sessionStorage
      sessionStorage.setItem('signatureInfo', JSON.stringify(signatureData));
      
      // Download the signed PDF
      window.open(pdfUrl, '_blank');
      
      // Redirect to success page
      router.push('/installations/sign/success');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to sign installation');
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p>{error}</p>
        </Card>
      </div>
    );
  }
  
  if (!installation) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Installation Not Found</h2>
          <p>The installation you're looking for could not be found.</p>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Sign Installation Contract</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
            <p><strong>Name:</strong> {installation.customer.firstName} {installation.customer.lastName}</p>
            <p><strong>Address:</strong> {installation.address.street}, {installation.address.city}, {installation.address.postcode}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Installation Details</h3>
            <p><strong>Total PV Output:</strong> {installation.totalPVOutput} kWp</p>
            <p><strong>Annual AC Output:</strong> {installation.annualACOutput} kWh</p>
            <p><strong>Zone:</strong> {installation.zone}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <Label htmlFor="customerName">Please enter your full name to sign</Label>
          <Input
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your full name"
            className="mt-1"
          />
        </div>

        <div className="mb-6">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            {showDetails ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
            {showDetails ? 'Hide Signature Details' : 'Show Signature Details'}
          </button>
          
          {showDetails && networkInfo && (
            <div className="mt-2 p-4 bg-gray-50 rounded-md">
              <div className="flex items-center mb-2">
                <Info className="h-4 w-4 mr-2 text-blue-500" />
                <span className="text-sm text-gray-600">This information will be recorded with your signature</span>
              </div>
              <p className="text-sm"><strong>IP Address:</strong> {networkInfo.ipAddress}</p>
              <p className="text-sm"><strong>MAC Address:</strong> {networkInfo.macAddress}</p>
              <p className="text-sm"><strong>Date & Time:</strong> {new Date().toLocaleString()}</p>
            </div>
          )}
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => window.close()}>Cancel</Button>
          <Button 
            onClick={handleSign}
            disabled={!customerName || loading || !networkInfo}
          >
            {loading ? 'Signing...' : 'Sign Contract'}
          </Button>
        </div>
      </Card>
    </div>
  );
} 