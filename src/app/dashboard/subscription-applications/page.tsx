"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, CheckCircle, XCircle, Eye } from "lucide-react";

// Define an interface for the application type based on the Prisma schema
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

// List of subscription types for filtering
const subscriptionTypes = ["all", "basic", "premium", "enterprise"];

export default function SubscriptionApplicationsPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    }
  });

  const [applications, setApplications] = useState<SubscriptionApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<SubscriptionApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const menuRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  // Define fetchApplications with useCallback to avoid dependency issues
  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/subscription/applications');
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      
      const data = await response.json();
      
      // Check the structure of the response and extract applications correctly
      const applications = data.applications || data || [];
      console.log('Fetched applications:', applications); // For debugging
      
      setApplications(applications);
      setFilteredApplications(applications);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter applications when search query or filters change
  useEffect(() => {
    if (!applications.length) return;

    const filtered = applications.filter(app => {
      // Search by applicant name, email, or receipt code
      const searchMatch = 
        !searchQuery || 
        (app.applicant?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
         app.applicant?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
         app.receiptCode.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Filter by status
      const statusMatch = statusFilter === "all" || app.status === statusFilter;
      
      // Filter by subscription type
      const typeMatch = typeFilter === "all" || app.subscriptionType === typeFilter;
      
      return searchMatch && statusMatch && typeMatch;
    });
    
    setFilteredApplications(filtered);
  }, [applications, searchQuery, statusFilter, typeFilter]);

  // Fetch applications when session is authenticated and user is admin
  useEffect(() => {
    if (status === "authenticated" && session?.user?.isAdmin) {
      fetchApplications();
    } else if (status === "authenticated" && !session?.user?.isAdmin) {
      // Redirect non-admin users
      redirect('/dashboard');
    }
  }, [status, session, fetchApplications]);

  // Handle application approval
  async function handleApprove(id: number): Promise<void> {
    try {
      const response = await fetch(`/api/admin/subscription-applications/${id}/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reviewNotes: "Application approved by admin"
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to approve application');
      }
      
      toast.success('Application approved successfully');
      // Refresh the list
      fetchApplications();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      toast.error(errorMessage);
      console.error('Error approving application:', err);
    }
  }

  // Handle application rejection
  async function handleReject(id: number): Promise<void> {
    try {
      const response = await fetch(`/api/admin/subscription-applications/${id}/reject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reviewNotes: "Application rejected by admin"
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to reject application');
      }
      
      toast.success('Application rejected successfully');
      // Refresh the list
      fetchApplications();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      toast.error(errorMessage);
      console.error('Error rejecting application:', err);
    }
  }

  // Function to render status badge with appropriate colors
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-1.5 animate-pulse"></span>
              Pending
            </span>
          </Badge>
        );
      case 'approved':
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              Approved
            </span>
          </Badge>
        );
      case 'rejected':
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
            <span className="flex items-center">
              <XCircle className="w-3 h-3 mr-1" />
              Rejected
            </span>
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Subscription Applications</h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Subscription Applications</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
          <button 
            onClick={() => fetchApplications()}
            className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  console.log('Current applications state:', applications);
  console.log('Current filtered applications:', filteredApplications);

  // Also add a debug section in the UI when there are no applications
  if (applications.length === 0 && !loading && !error) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded mb-6">
        <h3 className="font-medium">No applications found</h3>
        <p className="mt-1">Debug info:</p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li>API endpoint: /api/subscription/applications</li>
          <li>Status: {status}</li>
          <li>Is admin: {session?.user?.isAdmin ? 'Yes' : 'No'}</li>
          <li>Applications array length: {applications.length}</li>
        </ul>
        <button 
          onClick={() => fetchApplications()}
          className="mt-3 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 rounded text-sm"
        >
          Retry Fetch
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Subscription Applications</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search applications..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-blue-50" : ""}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {showFilters && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Type</label>
                <Select
                  value={typeFilter}
                  onValueChange={setTypeFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {subscriptionTypes.filter(type => type !== "all").map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setStatusFilter("all");
                  setTypeFilter("all");
                  setSearchQuery("");
                }}
                className="mr-2"
              >
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="bg-white shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredApplications.length}</span> of <span className="font-medium">{applications.length}</span> applications
          </p>
          
          <div className="flex space-x-2">
            {statusFilter !== "all" && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                Status: {statusFilter}
              </Badge>
            )}
            {typeFilter !== "all" && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                Type: {typeFilter}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receipt Code
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((application) => (
                <tr 
                  key={application.id} 
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium">
                          {application.applicant?.name?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {application.applicant?.name || 'Unknown User'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {application.applicant?.email || 'No email'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{application.receiptCode}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 capitalize">{application.subscriptionType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {renderStatusBadge(application.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(application.createdDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      {application.status === 'pending' && (
                        <>
                          <Button
                            onClick={() => handleApprove(application.id)}
                            variant="ghost"
                            size="sm"
                            className="text-green-600 hover:text-green-800 hover:bg-green-50"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleReject(application.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-800 hover:bg-red-50"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                      <Link href={`/dashboard/subscription-applications/${application.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredApplications.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    {searchQuery || statusFilter !== "all" || typeFilter !== "all" 
                      ? 'No applications match your filters' 
                      : 'No applications found'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 