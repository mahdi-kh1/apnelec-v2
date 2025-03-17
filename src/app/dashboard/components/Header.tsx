"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import UserMenu from '@/components/UserMenu';
import ThemeToggle from '@/components/ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 z-40">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg lg:hidden"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          <Image
            className="w-24"
            src="/apnelec-ev-logo.png"
            alt="apnelec"
            width={80}
            height={80}
          />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;