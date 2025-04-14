import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import InstallersList from '@/components/dashboard/InstallersList';

export const metadata: Metadata = {
  title: 'Installers | APNelec Dashboard',
  description: 'Manage installers',
};

export default async function InstallersPage() {
  const session = await getServerSession(authOptions);
  
  // Check if user is admin
  if (!session?.user?.isAdmin) {
    redirect('/dashboard');
  }
  
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Installers Management</h1>
      <InstallersList />
    </div>
  );
} 