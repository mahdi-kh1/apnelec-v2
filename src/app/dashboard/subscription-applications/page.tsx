"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { Search, Filter, CheckCircle, XCircle, Eye, X } from "lucide-react";
import { motion } from "framer-motion";

// Define an interface for the application type based on the Prisma schema
interface SubscriptionApplication {
  id: number;
  userId: string;
  subscriptionType: string;
  receiptCode: string;
  receiptPhotoPath: string;
  brandPhotoPath?: string;
  notes?: string;
  status: "pending" | "approved" | "rejected";
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
      redirect("/api/auth/signin");
    },
  });

  const [applications, setApplications] = useState<SubscriptionApplication[]>(
    []
  );
  const [filteredApplications, setFilteredApplications] = useState<
    SubscriptionApplication[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Define fetchApplications with useCallback to avoid dependency issues
  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/subscription/applications");

      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }

      const data = await response.json();

      // Check the structure of the response and extract applications correctly
      const applications = data.applications || data || [];
      console.log("Fetched applications:", applications); // For debugging

      setApplications(applications);
      setFilteredApplications(applications);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching applications:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter applications when search query or filters change
  useEffect(() => {
    if (!applications.length) return;

    const filtered = applications.filter((app) => {
      // Search by applicant name, email, or receipt code
      const searchMatch =
        !searchQuery ||
        app.applicant?.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        app.applicant?.email
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        app.receiptCode.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by status
      const statusMatch = statusFilter === "all" || app.status === statusFilter;

      // Filter by subscription type
      const typeMatch =
        typeFilter === "all" || app.subscriptionType === typeFilter;

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
      redirect("/dashboard");
    }
  }, [status, session, fetchApplications]);

  // Handle application approval
  async function handleApprove(id: number): Promise<void> {
    try {
      const response = await fetch(
        `/api/admin/subscription-applications/${id}/approve`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviewNotes: "Application approved by admin",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to approve application");
      }

      toast.success("Application approved successfully");
      // Refresh the list
      fetchApplications();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(errorMessage);
      console.error("Error approving application:", err);
    }
  }

  // Handle application rejection
  async function handleReject(id: number): Promise<void> {
    try {
      const response = await fetch(
        `/api/admin/subscription-applications/${id}/reject`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviewNotes: "Application rejected by admin",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to reject application");
      }

      toast.success("Application rejected successfully");
      // Refresh the list
      fetchApplications();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(errorMessage);
      console.error("Error rejecting application:", err);
    }
  }

  // Function to render status badge with appropriate colors
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 border-yellow-200"
          >
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-1.5 animate-pulse"></span>
              Pending
            </span>
          </Badge>
        );
      case "approved":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 border-green-200"
          >
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              Approved
            </span>
          </Badge>
        );
      case "rejected":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 border-red-200"
          >
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

  console.log("Current applications state:", applications);
  console.log("Current filtered applications:", filteredApplications);

  // Also add a debug section in the UI when there are no applications
  if (applications.length === 0 && !loading && !error) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded mb-6">
        <h3 className="font-medium">No applications found</h3>
        <p className="mt-1">Debug info:</p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li>API endpoint: /api/subscription/applications</li>
          <li>Status: {status}</li>
          <li>Is admin: {session?.user?.isAdmin ? "Yes" : "No"}</li>
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Subscription Applications
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and review subscription applications
          </p>
        </div>
      </motion.div>
      {/* Filters and search */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={
              showFilters ? "bg-primary/10 border-primary/50 text-primary" : ""
            }
          >
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>
      </motion.div>
      {/* Filter section */}
      {showFilters && (
        <>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subscription Type
                    </label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {subscriptionTypes
                          .filter((type) => type !== "all")
                          .map((type) => (
                            <SelectItem key={type} value={type}>
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </SelectItem>
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
                    <X className="w-3 h-3 mr-2" />
                    Reset Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {(statusFilter !== "all" || typeFilter !== "all" || searchQuery) && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-sm text-gray-500">Active filters:</span>

              {searchQuery && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Search: {searchQuery}
                </Badge>
              )}

              {statusFilter !== "all" && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Status:{" "}
                  {statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                </Badge>
              )}

              {typeFilter !== "all" && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Type:{" "}
                  {typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)}
                </Badge>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setStatusFilter("all");
                  setTypeFilter("all");
                  setSearchQuery("");
                }}
                className="h-7 px-2 text-xs"
              >
                Clear all
              </Button>
            </div>
          )}
        </>
      )}

      {loading ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between animate-pulse">
            <div>
              <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
            </div>
            <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-36"></div>
          </CardHeader>
          <CardContent>
            {/* Search and Filter Skeleton */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full md:w-[200px]"></div>
            </div>

            {/* Table Skeleton */}
            <div className="rounded-md border">
              <div className="bg-gray-50 dark:bg-gray-800 border-b">
                <div className="flex py-3 px-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-5 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="animate-pulse">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div key={row} className="border-b flex py-4 px-4">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-2 my-1"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-28 ml-auto my-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-medium">{filteredApplications.length}</span>{" "}
              of <span className="font-medium">{applications.length}</span>{" "}
              applications
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Applicant
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Receipt Code
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">
                            {application.applicant?.name?.charAt(0) || "U"}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {application.applicant?.name || "Unknown User"}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {application.applicant?.email || "No email"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-100">
                        {application.receiptCode}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-100 capitalize">
                        {application.subscriptionType}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderStatusBadge(application.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(application.createdDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        {application.status === "pending" && (
                          <>
                            <Button
                              onClick={() => handleApprove(application.id)}
                              variant="ghost"
                              size="sm"
                              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              onClick={() => handleReject(application.id)}
                              variant="ghost"
                              size="sm"
                              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Link
                          href={`/dashboard/subscription-applications/${application.id}`}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30"
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
                    <td
                      colSpan={6}
                      className="px-6 py-10 text-center text-gray-500 dark:text-gray-400"
                    >
                      {searchQuery ||
                      statusFilter !== "all" ||
                      typeFilter !== "all"
                        ? "No applications match your filters"
                        : "No applications found"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
