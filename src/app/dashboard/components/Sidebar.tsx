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
  Settings,
  Menu,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Use useEffect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { id: 1, name: "Dashboard", href: "/dashboard", icon: HomeIcon },
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
  ];

  const adminMenuItems = [
    { id: 7, name: "Users", href: "/dashboard/users", icon: Users },
    { id: 8, name: "Blogs", href: "/dashboard/blogs", icon: FileText },
  ];

  const profileMenuItems = [
    { id: 9, name: "Profile", href: "/dashboard/profile", icon: UserCircle },
    { id: 10, name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const allMenuItems = isAdmin ? [...menuItems, ...adminMenuItems] : menuItems;

  if (!mounted) return null;

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-800/50 transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Logo & Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-800/50">
          <Link href="/" className="flex items-center">
            <Image
              src="/apnelec-ev-logo.png"
              alt="APN Elec"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        {/* User Profile Section */}
        {session?.user && (
          <div className="p-5 border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="flex items-center space-x-4">
              <div className="relative">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={48}
                    height={48}
                    className="rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 shadow-md"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-md border-2 border-white dark:border-gray-800">
                    <UserCircle className="h-7 w-7 text-primary" />
                  </div>
                )}
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {session.user.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {session.user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-1.5">
            {allMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 overflow-hidden ${
                    isActive
                      ? "text-white font-medium shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-bg"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                  </span>
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-indicator"
                      className="absolute right-3 ml-auto"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4 text-white/80" />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* User Profile Links */}
          <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
            <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Account
            </p>
            <div className="space-y-1.5">
              {profileMenuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 overflow-hidden ${
                      isActive
                        ? "text-white font-medium shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active-bg-account"
                        className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70 -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
                      <item.icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                    </span>
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active-indicator-account"
                        className="absolute right-3 ml-auto"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4 text-white/80" />
                      </motion.div>
                    )}
                  </Link>
                );
              })}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
