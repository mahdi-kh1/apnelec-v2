"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, AlertTriangle, Info, CloudCog } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Subscription } from "@/types/subscription";

export interface SubscriptionStatusData {
  subscription: Subscription | null;
  hasActiveApplication: boolean;
  isInstaller: boolean;
  applicationStatus: string | null;
  databaseStatus: "connected" | "disconnected" | "unknown";
}

export default function SubscriptionStatus() {
  const { data: session } = useSession();
  const [statusData, setStatusData] = useState<SubscriptionStatusData>({
    subscription: null,
    hasActiveApplication: false,
    isInstaller: false,
    applicationStatus: null,
    databaseStatus: "unknown",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await fetch("/api/subscription/status");
        if (response.ok) {
          const data = await response.json();
          setStatusData({
            subscription: data.subscription,
            hasActiveApplication: data.hasActiveApplication || false,
            isInstaller: data.isInstaller || false,
            applicationStatus: data.applicationStatus || null,
            databaseStatus: data.databaseStatus || "unknown",
          });
        } else {
          setError("Failed to fetch subscription status");
          setStatusData((prev) => ({
            ...prev,
            databaseStatus: "disconnected",
          }));
        }
      } catch (error) {
        console.error("Error fetching subscription:", error);
        setError("Network error while fetching subscription");
        setStatusData((prev) => ({ ...prev, databaseStatus: "disconnected" }));
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchSubscriptionStatus();
    }
  }, [session]);

  if (loading) {
    return (
      <div className="mt-auto p-4 border-t border-border/40">
        <div className="animate-pulse flex flex-col space-y-2">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-8 bg-muted rounded w-full mt-2"></div>
        </div>
      </div>
    );
  }

  if (statusData.databaseStatus === "disconnected") {
    return null;
  }

  // If user is an installer with active subscription
  if (statusData.subscription) {
    // Calculate percentage of subscription remaining
    const startDate = new Date(statusData.subscription.startDate);
    const expiryDate = new Date(statusData.subscription.expiryDate);
    const daysRemaining = statusData.subscription.daysRemaining || 0;
    
    // Use totalDays from API if available, otherwise calculate it
    const totalDays = statusData.subscription.totalDays || 
      Math.ceil((expiryDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    const percentRemaining = Math.round((daysRemaining / totalDays) * 100);

    return (
      <div className="mt-auto p-4 border-t border-border/40">
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium">Subscription Status</h4>
            <span className="text-xs font-medium text-green-500">Active</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <Clock className="h-3 w-3 mr-1" />
            <span>{daysRemaining} days remaining</span>
          </div>
        </div>

        <Progress value={percentRemaining} className="h-1.5 mb-2" />

        <Link href="/dashboard/subscription">
          <Button variant="outline" size="sm" className="w-full text-xs">
            Manage Subscription
          </Button>
        </Link>
      </div>
    );
  }

  // If user has an active application
  if (statusData.hasActiveApplication) {
    return (
      <div className="mt-auto p-4 border-t border-border/40">
        <div className="mb-2">
          <h4 className="text-sm font-medium">Application Status</h4>
          <div className="flex items-center mt-1">
            <div className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></div>
            <span className="text-xs text-yellow-600 font-medium">
              In Progress
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Your application is being reviewed. We'll notify you once it's
            processed.
          </p>
        </div>

        <Link href="/dashboard/subscription">
          <Button variant="outline" size="sm" className="w-full text-xs">
            View Application
          </Button>
        </Link>
      </div>
    );
  }

  // Default state - no subscription or application
  return (
    <div className="mt-auto p-4 border-t border-border/40">
      <div className="mb-2">
        <h4 className="text-sm font-medium">Become an Installer</h4>
        <p className="text-xs text-muted-foreground">Access premium features</p>
      </div>
      <Link href="/dashboard/subscription">
        <Button size="sm" className="w-full">
          Join Us
        </Button>
      </Link>
    </div>
  );
}
