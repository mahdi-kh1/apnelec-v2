"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Installation {
  id: number;
  postcode: string;
  zone: string;
  totalPVOutput: number;
  annualACOutput: number;
  createdDate: string;
  roofDetails: any;
  shadeFactors: any;
  orientations: any;
  roofSlopes: any;
  roofTypes: any;
  results: any;
  pdfPath: string;
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
  };
  address: {
    id: number;
    city: string;
    postcode: string;
    street: string;
    telephone: string;
    buildingUse: string;
    propertyType: string;
  };
}

export default function InstallationPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });
  
  const [installation, setInstallation] = useState<Installation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInstallation();
  }, [installationId]);
  
  if (status === 'loading' || loading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  if (!installation) {
    return <div>Installation not found</div>;
  }
  
  const isAdmin = session?.user?.isAdmin || false;
  
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Installation Details</h2>
        <div>
          <Link href="/dashboard/installations" className="btn btn-secondary me-2">
            Back to Installations
          </Link>
          <Link href={`/dashboard/installations/${installationId}/edit`} className="btn btn-warning me-2">
            Edit
          </Link>
          {installation.pdfPath && (
            <a href={installation.pdfPath} target="_blank" className="btn btn-primary">
              View PDF
            </a>
          )}
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <h4>Customer Information</h4>
            </div>
            <div className="card-body">
              <p><strong>Name:</strong> {installation.customer.firstName} {installation.customer.lastName}</p>
              <p><strong>Mobile:</strong> {installation.customer.mobile || 'N/A'}</p>
              <p><strong>Email:</strong> {installation.customer.email || 'N/A'}</p>
              <Link href={`/dashboard/customers/${installation.customer.id}`} className="btn btn-sm btn-info">
                View Customer
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <h4>Address Information</h4>
            </div>
            <div className="card-body">
              <p><strong>Street:</strong> {installation.address.street || 'N/A'}</p>
              <p><strong>City:</strong> {installation.address.city || 'N/A'}</p>
              <p><strong>Postcode:</strong> {installation.address.postcode}</p>
              <p><strong>Telephone:</strong> {installation.address.telephone || 'N/A'}</p>
              <p><strong>Building Use:</strong> {installation.address.buildingUse || 'N/A'}</p>
              <p><strong>Property Type:</strong> {installation.address.propertyType || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-header">
          <h4>Installation Details</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>ID:</strong> {installation.id}</p>
              <p><strong>Zone:</strong> {installation.zone || 'N/A'}</p>
              <p><strong>Total PV Output:</strong> {installation.totalPVOutput} kWp</p>
              <p><strong>Annual AC Output:</strong> {installation.annualACOutput} kWh</p>
              <p><strong>Created Date:</strong> {new Date(installation.createdDate).toLocaleDateString()}</p>
            </div>
            <div className="col-md-6">
              {installation.roofDetails && (
                <div>
                  <h5>Roof Details</h5>
                  <pre>{JSON.stringify(installation.roofDetails, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
          
          {installation.results && (
            <div className="mt-4">
              <h5>Results</h5>
              <pre>{JSON.stringify(installation.results, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 