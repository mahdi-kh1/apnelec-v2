"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();  // فقط status نیاز داریم
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1f1f1f]">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="lg:pl-72 pt-16 min-h-screen transition-all duration-300">
        <div className="container mx-auto max-w-7xl p-4 md:p-6">
          {children}
        </div>
      </main>

      <Toaster />
    </div>
  );
}
