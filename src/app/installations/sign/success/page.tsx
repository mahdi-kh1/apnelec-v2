'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { useState } from 'react';

export default function SignSuccessPage() {
  const [showDetails, setShowDetails] = useState(false);
  const signatureInfo = typeof window !== 'undefined' ? sessionStorage.getItem('signatureInfo') : null;
  const signatureData = signatureInfo ? JSON.parse(signatureInfo) : null;

  return (
    <div className="container mx-auto py-8">
      <Card className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Contract Signed Successfully</h2>
        
        <p className="text-gray-600 mb-6">
          Thank you for signing the installation contract. A copy of the signed document has been downloaded to your device.
        </p>

        {signatureData && (
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 mx-auto"
            >
              {showDetails ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
              {showDetails ? 'Hide Signature Details' : 'Show Signature Details'}
            </button>
            
            {showDetails && (
              <div className="mt-2 p-4 bg-gray-50 rounded-md text-left max-w-md mx-auto">
                <div className="flex items-center mb-2">
                  <Info className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="text-sm text-gray-600">Contract Signature Information</span>
                </div>
                <p className="text-sm"><strong>Signed By:</strong> {signatureData.customerName}</p>
                <p className="text-sm"><strong>IP Address:</strong> {signatureData.ipAddress}</p>
                <p className="text-sm"><strong>MAC Address:</strong> {signatureData.macAddress}</p>
                <p className="text-sm"><strong>Date & Time:</strong> {new Date(signatureData.signedAt).toLocaleString()}</p>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-center">
          <Button onClick={() => window.close()}>Close Window</Button>
        </div>
      </Card>
    </div>
  );
} 