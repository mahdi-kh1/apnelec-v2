'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { formatDate } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Application = {
  id: number;
  userId: string;
  user: {
    name: string;
    email: string;
    username: string;
  };
  subscriptionType: string;
  receiptCode: string;
  receiptPhotoPath: string;
  brandPhotoPath: string | null;
  notes: string | null;
  status: 'pending' | 'approved' | 'rejected';
  createdDate: string;
};

export default function SubscriptionApplicationsPage() {
  const router = useRouter();
  const session = useSession();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [processingId, setProcessingId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState(session?.status || 'unauthenticated');
  const [error, setError] = useState<string | null>(null);

  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/subscription/applications');
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      
      const data = await response.json();
      setApplications(data.applications || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only fetch if the user is authenticated and is an admin
    if (status === "authenticated" && session.data?.user?.isAdmin) {
      fetchApplications();
    } else if (status === "authenticated" && !session.data?.user?.isAdmin) {
      // Redirect non-admin users
      redirect('/dashboard');
    }
  }, [status, session, fetchApplications]);

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setReviewNotes('');
    setDialogOpen(true);
  };

  const handleProcessApplication = async (id: number, status: 'approved' | 'rejected') => {
    setProcessingId(id);
    try {
      const response = await fetch(`/api/admin/subscription-applications/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,
          reviewNotes,
        }),
      });

      if (response.ok) {
        toast.success(`Application ${status === 'approved' ? 'approved' : 'rejected'} successfully`);
        setDialogOpen(false);
        fetchApplications();
      } else {
        const data = await response.json();
        toast.error(data.message || `Failed to ${status} application`);
      }
    } catch (error) {
      console.error(`Error ${status} application:`, error);
      toast.error(`An error occurred while ${status === 'approved' ? 'approving' : 'rejecting'} the application`);
    } finally {
      setProcessingId(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-100 text-green-800">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Subscription Applications</CardTitle>
          <CardDescription>Manage subscription applications from users</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="space-y-4">
              {loading ? (
                <div className="text-center py-8">Loading applications...</div>
              ) : applications.length === 0 ? (
                <div className="text-center py-8">No {activeTab} applications found</div>
              ) : (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <Card key={app.id} className="overflow-hidden">
                      <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{app.user.name || app.user.username || app.user.email}</h3>
                            {getStatusBadge(app.status)}
                          </div>
                          <p className="text-sm text-gray-500">
                            Applied for <span className="font-medium">{app.subscriptionType}</span> subscription on {formatDate(app.createdDate)}
                          </p>
                          <p className="text-sm">Receipt Code: {app.receiptCode}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            onClick={() => handleViewDetails(app)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedApplication && (
            <>
              <DialogHeader>
                <DialogTitle>Application Details</DialogTitle>
                <DialogDescription>
                  Review the subscription application from {selectedApplication.user.name || selectedApplication.user.username || selectedApplication.user.email}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">User Information</h3>
                    <p className="text-sm">Name: {selectedApplication.user.name || 'N/A'}</p>
                    <p className="text-sm">Email: {selectedApplication.user.email || 'N/A'}</p>
                    <p className="text-sm">Username: {selectedApplication.user.username || 'N/A'}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">Application Details</h3>
                    <p className="text-sm">Subscription Type: {selectedApplication.subscriptionType}</p>
                    <p className="text-sm">Receipt Code: {selectedApplication.receiptCode}</p>
                    <p className="text-sm">Status: {selectedApplication.status}</p>
                    <p className="text-sm">Applied On: {formatDate(selectedApplication.createdDate)}</p>
                  </div>
                  
                  {selectedApplication.notes && (
                    <div>
                      <h3 className="font-medium mb-1">Notes from Applicant</h3>
                      <p className="text-sm whitespace-pre-wrap">{selectedApplication.notes}</p>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Receipt Photo</h3>
                    <div className="relative h-48 w-full border rounded-md overflow-hidden">
                      <Image 
                        src={selectedApplication.receiptPhotoPath} 
                        alt="Receipt" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {selectedApplication.brandPhotoPath && (
                    <div>
                      <h3 className="font-medium mb-1">Brand Photo</h3>
                      <div className="relative h-48 w-full border rounded-md overflow-hidden">
                        <Image 
                          src={selectedApplication.brandPhotoPath} 
                          alt="Brand" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {selectedApplication.status === 'pending' && (
                <>
                  <div className="space-y-2 py-2">
                    <h3 className="font-medium">Review Notes</h3>
                    <Textarea
                      placeholder="Add notes about this application (optional)"
                      value={reviewNotes}
                      onChange={(e) => setReviewNotes(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <Button
                      variant="outline"
                      onClick={() => handleProcessApplication(selectedApplication.id, 'rejected')}
                      disabled={processingId !== null}
                      className="w-full sm:w-auto"
                    >
                      {processingId === selectedApplication.id ? 'Processing...' : 'Reject Application'}
                    </Button>
                    <Button
                      onClick={() => handleProcessApplication(selectedApplication.id, 'approved')}
                      disabled={processingId !== null}
                      className="w-full sm:w-auto"
                    >
                      {processingId === selectedApplication.id ? 'Processing...' : 'Approve Application'}
                    </Button>
                  </DialogFooter>
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
} 