'use client';

import InstallationsList from '@/components/dashboard/InstallationsList';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function InstallationsPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  
  const isAdmin = session?.user?.isAdmin || false;
  
  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Installations</h2>
      </div>
      <InstallationsList isAdmin={isAdmin} />
    </div>
  );
} 