"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { 
  HomeIcon, 
  SunIcon, 
  BatteryChargingIcon, 
  WrenchIcon, 
  UserIcon, 
  PhoneIcon, 
  BookOpenIcon,
  X 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;

  const menuItems = [
    { id: 1, name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { id: 2, name: "Solar Solutions", href: "/dashboard/solar", icon: SunIcon },
    { id: 3, name: "EV Solutions", href: "/dashboard/ev", icon: BatteryChargingIcon },
    { id: 4, name: "Services", href: "/dashboard/services", icon: WrenchIcon },
    ...(isAdmin ? [
      { id: 5, name: "Users", href: "/dashboard/users", icon: UserIcon },
    ] : []),
    { id: 6, name: "Support", href: "/dashboard/support", icon: PhoneIcon },
    { id: 7, name: "Documentation", href: "/dashboard/docs", icon: BookOpenIcon },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg lg:hidden"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;