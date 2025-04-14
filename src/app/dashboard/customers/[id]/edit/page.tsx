'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast';
import { ArrowLeft, Loader2, MapPin } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

interface Address {
  id: number;
  street: string;
  city: string;
  postcode: string;
  latitude?: number;
  longitude?: number;
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  addresses: Address[];
}

interface EditCustomerPageProps {
  params: Promise<{ id: string }>;
}

export default function EditCustomerPage({ params }: EditCustomerPageProps) {
  const { id } = use(params);
  const customerId = id;
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin');
    },
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    addresses: [] as Address[],
  });

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`/api/customers/${customerId}`);
        if (!response.ok) throw new Error('Failed to fetch customer');
        const data = await response.json();
        setCustomer(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email || '',
          mobile: data.mobile || '',
          addresses: data.addresses || [],
        });
      } catch (error) {
        console.error('Error fetching customer:', error);
        toast.error('Failed to load customer');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [customerId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (index: number, field: keyof Address, value: string) => {
    setFormData(prev => ({
      ...prev,
      addresses: prev.addresses.map((addr, i) => 
        i === index ? { ...addr, [field]: value } : addr
      ),
    }));
  };

  const handleAddAddress = () => {
    setFormData(prev => ({
      ...prev,
      addresses: [...prev.addresses, { id: 0, street: '', city: '', postcode: '' }],
    }));
  };

  const handleRemoveAddress = (index: number) => {
    setFormData(prev => ({
      ...prev,
      addresses: prev.addresses.filter((_, i) => i !== index),
    }));
  };

  const formatPostcode = (postcode: string) => {
    // Remove all spaces and convert to uppercase
    return postcode.replace(/\s+/g, '').toUpperCase();
  };

  const handleGetCoordinates = async (index: number) => {
    const address = formData.addresses[index];
    if (!address.postcode) {
      toast.error('Please enter a postcode');
      return;
    }

    const formattedPostcode = formatPostcode(address.postcode);
    
    try {
      const response = await fetch(`https://api.postcodes.io/postcodes/${formattedPostcode}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 404) {
          throw new Error('Postcode not found. Please check the postcode and try again.');
        }
        throw new Error(errorData.error || 'Failed to fetch coordinates');
      }

      const data = await response.json();
      
      if (!data.result || !data.result.latitude || !data.result.longitude) {
        throw new Error('No coordinates found for this postcode');
      }

      // Update form data with coordinates
      setFormData(prev => ({
        ...prev,
        addresses: prev.addresses.map((addr, i) => 
          i === index ? {
            ...addr,
            latitude: data.result.latitude,
            longitude: data.result.longitude
          } : addr
        ),
      }));

      // Update map for this address
      const mapContainer = document.getElementById(`map-${index}`);
      if (mapContainer) {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const lat = data.result.latitude;
        const lng = data.result.longitude;
        
        // Create the map iframe with proper error handling
        try {
          const iframeSrc = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=18&maptype=satellite`;
          mapContainer.innerHTML = `
            <iframe 
              src="${iframeSrc}" 
              width="100%" 
              height="300" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>`;
          
          toast.success('Location found successfully');
        } catch (mapError) {
          console.error('Error loading map:', mapError);
          toast.error('Error loading map. Coordinates were found but map display failed.');
        }
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to get coordinates');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // First update the customer basic info
      const customerResponse = await fetch(`/api/customers/${customerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
        }),
      });

      if (!customerResponse.ok) throw new Error('Failed to update customer');

      // Then update each address
      for (const address of formData.addresses) {
        if (address.id) {
          // Update existing address
          const addressResponse = await fetch(`/api/addresses/${address.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              street: address.street,
              city: address.city,
              postcode: address.postcode,
              latitude: address.latitude,
              longitude: address.longitude,
            }),
          });

          if (!addressResponse.ok) {
            console.error(`Failed to update address ${address.id}`);
          }
        } else {
          // Create new address
          const addressResponse = await fetch('/api/addresses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              referenceId: customerId,
              referenceType: 'customer',
              street: address.street,
              city: address.city,
              postcode: address.postcode,
              latitude: address.latitude,
              longitude: address.longitude,
            }),
          });

          if (!addressResponse.ok) {
            console.error('Failed to create new address');
          }
        }
      }

      toast.success('Customer updated successfully');
      router.push('/dashboard/customers');
    } catch (error) {
      console.error('Error updating customer:', error);
      toast.error('Failed to update customer');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard/customers" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Edit Customer</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
            <CardDescription>Edit the customer's details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Addresses</CardTitle>
            <CardDescription>Manage customer addresses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {formData.addresses.map((address, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Street Address</Label>
                      <Input
                        value={address.street}
                        onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>City</Label>
                      <Input
                        value={address.city}
                        onChange={(e) => handleAddressChange(index, 'city', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Postcode</Label>
                      <div className="flex gap-2">
                        <Input
                          value={address.postcode}
                          onChange={(e) => handleAddressChange(index, 'postcode', e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => handleGetCoordinates(index)}
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Location
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Coordinates</Label>
                      <div className="flex gap-2">
                        <Input
                          value={address.latitude || ''}
                          placeholder="Latitude"
                          readOnly
                        />
                        <Input
                          value={address.longitude || ''}
                          placeholder="Longitude"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div id={`map-${index}`} className="w-full h-[300px] bg-gray-100 rounded-lg"></div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveAddress(index)}
                    >
                      Remove Address
                    </Button>
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={handleAddAddress}
              >
                Add Address
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Link href="/dashboard/customers">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
} 