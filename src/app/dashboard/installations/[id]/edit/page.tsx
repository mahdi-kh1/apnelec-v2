"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Installation {
  id: number;
  postcode: string;
  zone: string;
  totalPVOutput: number;
  annualACOutput: number;
  roofDetails: any;
  shadeFactors: any;
  orientations: any;
  roofSlopes: any;
  roofTypes: any;
  results: any;
  customer: {
    id: number;
    firstName: string;
    lastName: string;
  };
  address: {
    id: number;
    city: string;
    postcode: string;
    street: string;
  };
}

export default function EditInstallationPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });
  
  const [installation, setInstallation] = useState<Installation | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    postcode: '',
    zone: '',
    totalPVOutput: 0,
    annualACOutput: 0,
    roofDetails: {},
    shadeFactors: {},
    orientations: {},
    roofSlopes: {},
    roofTypes: {},
    results: {},
  });
  const [installationId, setInstallationId] = useState<string | null>(null);
  
  // Extract ID from params on mount
  useEffect(() => {
    async function getParams() {
      const { id } = await params;
      setInstallationId(id);
    }
    getParams();
  }, [params]);
  
  useEffect(() => {
    if (!installationId) return;
    
    const fetchInstallation = async () => {
      try {
        const response = await fetch(`/api/installations/${installationId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch installation');
        }
        
        const data = await response.json();
        setInstallation(data);
        setFormData({
          postcode: data.postcode,
          zone: data.zone || '',
          totalPVOutput: data.totalPVOutput,
          annualACOutput: data.annualACOutput,
          roofDetails: data.roofDetails || {},
          shadeFactors: data.shadeFactors || {},
          orientations: data.orientations || {},
          roofSlopes: data.roofSlopes || {},
          roofTypes: data.roofTypes || {},
          results: data.results || {},
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInstallation();
  }, [installationId]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'totalPVOutput' || name === 'annualACOutput') {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/installations/${installationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update installation');
      }
      
      router.push(`/dashboard/installations/${installationId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setSaving(false);
    }
  };
  
  if (status === 'loading' || loading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  if (!installation) {
    return <div>Installation not found</div>;
  }
  
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Edit Installation</h2>
        <Link href={`/dashboard/installations/${installationId}`} className="btn btn-secondary">
          Cancel
        </Link>
      </div>
      
      <div className="card mb-4">
        <div className="card-header">
          <h4>Installation Details</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="postcode" className="form-label">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="zone" className="form-label">Zone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zone"
                    name="zone"
                    value={formData.zone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="totalPVOutput" className="form-label">Total PV Output (kWp)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalPVOutput"
                    name="totalPVOutput"
                    value={formData.totalPVOutput}
                    onChange={handleChange}
                    step="0.01"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="annualACOutput" className="form-label">Annual AC Output (kWh)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="annualACOutput"
                    name="annualACOutput"
                    value={formData.annualACOutput}
                    onChange={handleChange}
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <h5>Customer Information</h5>
              <p><strong>Name:</strong> {installation.customer.firstName} {installation.customer.lastName}</p>
              <p><strong>Address:</strong> {installation.address.street}, {installation.address.city}, {installation.address.postcode}</p>
            </div>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link href={`/dashboard/installations/${installationId}`} className="btn btn-secondary me-md-2">
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 