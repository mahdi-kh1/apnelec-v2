"use client";

import { useSession } from "next-auth/react";
import { redirect, useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SubscriptionApplication {
  id: number;
  userId: string;
  subscriptionType: string;
  receiptCode: string;
  receiptPhotoPath: string;
  brandPhotoPath?: string;
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdDate: string;
  updatedDate: string;
  reviewedByUserId?: string;
  reviewNotes?: string;
  applicant?: {
    name?: string;
    email?: string;
  };
}

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function ApplicationDetailPage() {
  const { data: session, status: sessionStatus } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    }
  });

  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id) : null;

  const [application, setApplication] = useState<SubscriptionApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplication = useCallback(async () => {
    if (!id) return;
    
    try {
      setLoading(true);
      const response = await fetch(`/api/subscription/applications/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch application');
      }
      
      const data = await response.json();
      setApplication(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error("Error fetching application:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    // Only fetch if the user is authenticated and is an admin
    if (sessionStatus === "authenticated" && session?.user?.isAdmin && id) {
      fetchApplication();
    } else if (sessionStatus === "authenticated" && !session?.user?.isAdmin) {
      // Redirect non-admin users
      redirect('/dashboard');
    }
  }, [sessionStatus, session, id, fetchApplication]);

  async function handleApprove(): Promise<void> {
    if (!application) return;
    
    try {
      const response = await fetch(`/api/subscription/applications/${application.id}/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reviewNotes: "Application approved"
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to approve application');
      }
      
      toast.success('Application approved successfully');
      fetchApplication();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      toast.error(errorMessage);
      console.error('Error approving application:', err);
    }
  }

  async function handleReject(): Promise<void> {
    if (!application) return;
    
    try {
      const response = await fetch(`/api/subscription/applications/${application.id}/reject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reviewNotes: "Application rejected"
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to reject application');
      }
      
      toast.success('Application rejected successfully');
      fetchApplication();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      toast.error(errorMessage);
      console.error('Error rejecting application:', err);
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Application Details</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
          <button 
            onClick={() => fetchApplication()}
            className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Application Details</h1>
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
          <p>Application not found</p>
          <Link href="/dashboard/subscription-applications">
            <button className="mt-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 rounded">
              Back to Applications
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Application Details</h1>
        <Link href="/dashboard/subscription-applications">
          <Button variant="outline">Back to Applications</Button>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Applicant Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p>{application.applicant?.name || 'Not provided'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p>{application.applicant?.email || 'Not provided'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Subscription Type</h3>
                  <p className="capitalize">{application.subscriptionType}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Receipt Code</h3>
                  <p>{application.receiptCode}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <p className="capitalize">{application.status}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Application Date</h3>
                  <p>{new Date(application.createdDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            {application.notes && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Notes</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="whitespace-pre-wrap">{application.notes}</p>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Receipt Photo</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src={application.receiptPhotoPath || PLACEHOLDER_IMAGE}
                    alt="Receipt"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = PLACEHOLDER_IMAGE;
                    }}
                  />
                </div>
              </div>
            </div>
            
            {application.brandPhotoPath && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Brand Photo</h3>
                <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image 
                      src={application.brandPhotoPath || PLACEHOLDER_IMAGE}
                      alt="Brand"
                      fill
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = PLACEHOLDER_IMAGE;
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {application.reviewNotes && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Review Notes</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>{application.reviewNotes}</p>
                </div>
              </div>
            )}
            
            {application.status === 'pending' && (
              <div className="flex justify-end space-x-4 mt-6">
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  Reject Application
                </Button>
                <Button
                  onClick={handleApprove}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Approve Application
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 