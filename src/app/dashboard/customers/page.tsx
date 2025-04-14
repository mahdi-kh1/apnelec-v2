import { Metadata } from 'next';
import CustomersList from '@/components/dashboard/CustomersList';

export const metadata: Metadata = {
  title: 'Customers | APNelec Dashboard',
  description: 'Manage your customers',
};

export default function CustomersPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <CustomersList />
    </div>
  );
} 