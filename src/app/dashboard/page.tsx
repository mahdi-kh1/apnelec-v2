"use client";

import { useState } from "react";
import { 
  Users,
  Sun,
  BatteryCharging,
  Wrench,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Activity,
  MessageSquare,
  Calendar,
  Clock,
  MoreHorizontal,
  RefreshCw,
  TrendingUp,
  Info,
  XCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const DashboardPage = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  // Container animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Item animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Customers</CardTitle>
              <CardDescription>Manage your customer information and addresses.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/customers" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                View Customers
              </Link>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Installations</CardTitle>
              <CardDescription>View and manage your solar installation projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/installations" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                View Installations
              </Link>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={item}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Solar Calculator</CardTitle>
              <CardDescription>Calculate solar energy production for new installations.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/solar-solutions/solar-energy-calculator" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Open Calculator
              </Link>
            </CardContent>
          </Card>
        </motion.div>
        
        {session?.user?.isAdmin && (
          <>
            <motion.div variants={item}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Installers</CardTitle>
                  <CardDescription>Manage installer accounts and subscriptions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/dashboard/installers" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    View Installers
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Subscription Applications</CardTitle>
                  <CardDescription>Review and approve subscription applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/dashboard/subscription-applications" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    View Applications
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
        
        {!session?.user?.isAdmin && (
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Apply for Installer Subscription</CardTitle>
                <CardDescription>Become an approved installer and access more features.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/dashboard/apply-subscription" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Apply Now
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DashboardPage;