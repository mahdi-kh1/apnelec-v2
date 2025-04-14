"use client";

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  Search, 
  Bell, 
  X, 
  Home, 
  ChevronRight, 
  Settings, 
  Users, 
  FileText 
} from 'lucide-react';
import UserMenu from '@/components/UserMenu';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(3); // Example notification count
  const pathname = usePathname();

  // Get current page name from pathname
  const getPageName = () => {
    const path = pathname.split('/');
    if (path.length <= 2) return 'Dashboard';
    
    // Convert "path-name" to "Path Name" format
    const pageName = path[2].split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return pageName;
  };

  return (
    <header className="fixed top-0 right-0 left-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 h-16 z-40 shadow-sm">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-xl transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          {/* Breadcrumb navigation */}
          <div className="hidden md:flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-3 h-3" />
            <span className="font-medium text-gray-900 dark:text-white">{getPageName()}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search bar */}
          <div className={`relative ${searchOpen ? 'w-64' : 'w-10'} transition-all duration-300`}>
            {searchOpen ? (
              <div className="relative flex items-center">
                <input 
                  type="text"
                  placeholder="Search..." 
                  className="w-full h-10 pl-10 pr-8 rounded-xl bg-gray-100 dark:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  autoFocus
                />
                <Search className="absolute left-3 w-4 h-4 text-gray-500 dark:text-gray-400" />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3"
                >
                  <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            )}
          </div>
          
          {/* Notifications */}
          <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            {notifications > 0 && (
              <motion.div 
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center"
              >
                {notifications}
              </motion.div>
            )}
          </button>
          
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* User Menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;