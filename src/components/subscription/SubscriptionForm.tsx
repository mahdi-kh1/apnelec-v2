"use client";

import { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import SubscriptionImageUpload from './SubscriptionImageUpload';

export default function SubscriptionForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState('basic');
  const [receiptCode, setReceiptCode] = useState('');
  const [notes, setNotes] = useState('');
  
  // Files for upload
  const [receiptPhoto, setReceiptPhoto] = useState<File | null>(null);
  const [brandPhoto, setBrandPhoto] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!receiptPhoto) {
      toast.error('Please upload a receipt photo');
      return;
    }

    setLoading(true);
    
    try {
      // Create FormData for file uploads
      const formData = new FormData();
      formData.append('subscriptionType', subscriptionType);
      formData.append('receiptCode', receiptCode);
      
      if (notes) {
        formData.append('notes', notes);
      }
      
      // Add files to FormData
      if (receiptPhoto) {
        formData.append('receiptPhoto', receiptPhoto);
      }
      
      if (brandPhoto) {
        formData.append('brandPhoto', brandPhoto);
      }
      
      const response = await fetch('/api/subscription/apply', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Application submitted successfully');
        router.push('/dashboard');
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('An error occurred while submitting your application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Subscription Application</CardTitle>
        <CardDescription>
          Submit your details to apply for a subscription
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="subscriptionType">Subscription Type</Label>
              <Select 
                value={subscriptionType} 
                onValueChange={setSubscriptionType}
              >
                <SelectTrigger id="subscriptionType">
                  <SelectValue placeholder="Select subscription type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="receiptCode">Receipt Code</Label>
              <Input 
                id="receiptCode" 
                value={receiptCode} 
                onChange={(e) => setReceiptCode(e.target.value)} 
                placeholder="Enter receipt code"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                placeholder="Any additional information"
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SubscriptionImageUpload
                label="Receipt Photo"
                onImageChange={setReceiptPhoto}
                required={true}
              />
              
              <SubscriptionImageUpload
                label="Brand Photo"
                onImageChange={setBrandPhoto}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 