"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import {
  HomeIcon,
  SunIcon,
  BatteryChargingIcon,
  WrenchIcon,
  PhoneIcon,
  BookOpenIcon,
  X,
  Users,
  FileText,
  UserCircle,
  LogOut,
  Menu,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  CreditCard
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SubscriptionStatus from "@/components/dashboard/layout/SubscriptionStatus";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Sidebar = ({ isOpen, onClose, className }: SidebarProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isInstaller, setIsInstaller] = useState(false);

  // Use useEffect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if user is an installer
  useEffect(() => {
    const checkInstallerStatus = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch('/api/user/installer-status');
          const data = await response.json();
          setIsInstaller(data.isInstaller);
        } catch (error) {
          console.error('Error checking installer status:', error);
        }
      }
    };

    if (mounted && session) {
      checkInstallerStatus();
    }
  }, [mounted, session]);

  const menuItems = [
    { id: 1, name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { id: 2, name: "Solar Solutions", href: "/dashboard/solar", icon: SunIcon },
    {
      id: 3,
      name: "EV Solutions",
      href: "/dashboard/ev",
      icon: BatteryChargingIcon,
    },
    { id: 4, name: "Services", href: "/dashboard/services", icon: WrenchIcon },
    { id: 5, name: "Support", href: "/dashboard/support", icon: PhoneIcon },
    {
      id: 6,
      name: "Documentation",
      href: "/dashboard/docs",
      icon: BookOpenIcon,
    },
    { id: 9, name: "Profile", href: "/dashboard/profile", icon: UserCircle },
  ];

  const installerMenuItems = [
    { id: 10, name: "Customers", href: "/dashboard/customers", icon: Users },
    { id: 11, name: "Installations", href: "/dashboard/installations", icon: FileText },
  ];

  const adminMenuItems = [
    { id: 12, name: "Users", href: "/dashboard/users", icon: Users },
    { id: 13, name: "Blogs", href: "/dashboard/blogs", icon: FileText },
    { id: 14, name: "Installers", href: "/dashboard/installers", icon: Users },
    { id: 15, name: "Subscriptions", href: "/dashboard/subscription-applications", icon: CreditCard },
  ];

  const allMenuItems = (() => {
    let items = [...menuItems];
    
    if (isInstaller) {
      items = [...items, ...installerMenuItems];
    }
    
    if (session?.user?.isAdmin) {
      items = [...items, ...adminMenuItems];
    }
    
    return items;
  })();

  if (!mounted) return null;

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const isActive = (href: string) => {
    if (!pathname) return false;
    
    // Special case for dashboard to prevent it from being active on all dashboard/* routes
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    // For other routes, consider them active if the pathname matches or starts with the href
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        {/* Close button - only on mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 lg:hidden"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="h-full overflow-y-auto py-4 px-3 pb-12 flex flex-col">
          {/* Logo */}
          <div className="flex justify-center mb-6 mt-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="APN Elec Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold ml-2">APNElec</span>
            </Link>
          </div>
          
          <div className="space-y-1 px-2">
            {allMenuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 border-l-4 border-blue-600"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <item.icon className={cn(
                  "mr-3 h-5 w-5",
                  isActive(item.href) 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-500 dark:text-gray-400"
                )} />
                {item.name}
                {isActive(item.href) && (
                  <ChevronRight className="ml-auto h-4 w-4 text-blue-600 dark:text-blue-400" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Sign Out Button */}
          <div className="mt-auto px-2">
            <SubscriptionStatus />
            
            <Button 
              variant="outline" 
              className="w-full mt-4 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
