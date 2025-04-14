"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Plus, Trash2, Loader2, Search } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { Customer } from '@/types/customer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CustomersList() {
  const { data: session } = useSession();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setCustomers(data);
        setFilteredCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        toast.error('Failed to load customers');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    // Filter and search customers
    let result = [...customers];
    
    // Apply filter
    if (filterBy === 'with-installations') {
      result = result.filter(customer => customer.installations && customer.installations.length > 0);
    } else if (filterBy === 'without-installations') {
      result = result.filter(customer => !customer.installations || customer.installations.length === 0);
    }
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(customer => 
        customer.firstName.toLowerCase().includes(term) ||
        customer.lastName.toLowerCase().includes(term) ||
        customer.email?.toLowerCase().includes(term) ||
        customer.mobile?.toLowerCase().includes(term) ||
        customer.addresses?.some(address => 
          address.postcode?.toLowerCase().includes(term) ||
          address.city?.toLowerCase().includes(term) ||
          address.street?.toLowerCase().includes(term)
        )
      );
    }
    
    setFilteredCustomers(result);
  }, [customers, searchTerm, filterBy]);

  const handleDeleteCustomer = async (id: number) => {
    if (!confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
      return;
    }

    setDeleteLoading(id);
    try {
      const response = await fetch(`/api/customers/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete customer');
      }
      
      setCustomers(prev => prev.filter(customer => customer.id !== id));
      toast.success('Customer deleted successfully');
    } catch (error) {
      console.error('Error deleting customer:', error);
      toast.error('Failed to delete customer');
    } finally {
      setDeleteLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Customers</CardTitle>
          <CardDescription>Manage your customer database</CardDescription>
        </div>
        <Link href="/dashboard/customers/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select
            value={filterBy}
            onValueChange={setFilterBy}
          >
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Customers</SelectItem>
              <SelectItem value="with-installations">With Installations</SelectItem>
              <SelectItem value="without-installations">Without Installations</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Installations</TableHead>
                {session?.user?.isAdmin && <TableHead>Installer</TableHead>}
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">
                      {customer.firstName} {customer.lastName}
                    </TableCell>
                    <TableCell>
                      <div>{customer.email}</div>
                      <div>{customer.mobile}</div>
                    </TableCell>
                    <TableCell>
                      {customer.addresses && customer.addresses.length > 0 ? (
                        <div>
                          <div>{customer.addresses[0].street}</div>
                          <div>{customer.addresses[0].city}, {customer.addresses[0].postcode}</div>
                        </div>
                      ) : (
                        <Badge variant="outline">No address</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge>
                        {customer.installations ? customer.installations.length : 0}
                      </Badge>
                    </TableCell>
                    {session?.user?.isAdmin && (
                      <TableCell>
                        {customer.installer ? (
                          <div>
                            <div>{customer.installer.user.firstName} {customer.installer.user.lastName}</div>
                            <div className="text-sm text-muted-foreground">{customer.installer.user.email}</div>
                          </div>
                        ) : (
                          <Badge variant="outline">No installer</Badge>
                        )}
                      </TableCell>
                    )}
                    <TableCell>{customer.createdDate ? formatDate(customer.createdDate.toString()) : '-'}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/customers/${customer.id}`}>
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/dashboard/customers/${customer.id}/edit`}>
                          <Button variant="outline" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        {session?.user?.isAdmin && (
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => customer.id !== undefined && handleDeleteCustomer(customer.id)}
                            disabled={deleteLoading === customer.id}
                          >
                            {deleteLoading === customer.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={session?.user?.isAdmin ? 7 : 6} className="text-center py-6">
                    No customers found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
} 