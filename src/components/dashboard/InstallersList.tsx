"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Search, Loader2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Installer {
  id: number;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  };
  isActive: boolean;
  brandPhotoPath: string | null;
  subscription: {
    id: number;
    type: string;
    endDate: Date | string | null;
    isActive: boolean;
  } | null;
  customersCount: number;
  installationsCount: number;
  createdDate: Date | string;
}

export default function InstallersList() {
  const { data: session } = useSession();
  const [installers, setInstallers] = useState<Installer[]>([]);
  const [filteredInstallers, setFilteredInstallers] = useState<Installer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  
  useEffect(() => {
    const fetchInstallers = async () => {
      try {
        const response = await fetch('/api/installers');
        
        if (!response.ok) {
          throw new Error('Failed to fetch installers');
        }
        
        const data = await response.json();
        setInstallers(data);
        setFilteredInstallers(data);
      } catch (err) {
        console.error('Error fetching installers:', err);
        toast.error('Failed to load installers');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInstallers();
  }, []);
  
  useEffect(() => {
    // Filter and search installers
    let result = [...installers];
    
    // Apply filter
    if (filterBy === 'active') {
      result = result.filter(installer => installer.isActive);
    } else if (filterBy === 'inactive') {
      result = result.filter(installer => !installer.isActive);
    } else if (filterBy === 'with-subscription') {
      result = result.filter(installer => installer.subscription && installer.subscription.isActive);
    } else if (filterBy === 'without-subscription') {
      result = result.filter(installer => !installer.subscription || !installer.subscription.isActive);
    }
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(installer => 
        installer.user.firstName.toLowerCase().includes(term) ||
        installer.user.lastName.toLowerCase().includes(term) ||
        installer.user.email.toLowerCase().includes(term)
      );
    }
    
    setFilteredInstallers(result);
  }, [installers, searchTerm, filterBy]);
  
  const handleToggleStatus = async (id: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/installers/${id}/toggle-status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isActive: !currentStatus })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update installer status');
      }
      
      // Update installer in the list
      setInstallers(prevInstallers => 
        prevInstallers.map(installer => 
          installer.id === id 
            ? { ...installer, isActive: !installer.isActive } 
            : installer
        )
      );
      
      toast.success(`Installer ${currentStatus ? 'deactivated' : 'activated'} successfully`);
    } catch (err) {
      console.error('Error updating installer status:', err);
      toast.error('Failed to update installer status');
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
      <CardHeader>
        <CardTitle>Installers Management</CardTitle>
        <CardDescription>Manage installers and their subscriptions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search installers..."
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
              <SelectItem value="all">All Installers</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="with-subscription">With Active Subscription</SelectItem>
              <SelectItem value="without-subscription">Without Active Subscription</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Installer</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Customers</TableHead>
                <TableHead>Installations</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInstallers.length > 0 ? (
                filteredInstallers.map((installer) => (
                  <TableRow key={installer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {installer.user.image && (
                          <Image 
                            src={installer.user.image || '/placeholder.png'} 
                            alt={`${installer.user.firstName} ${installer.user.lastName}`}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <div className="font-medium">{installer.user.firstName} {installer.user.lastName}</div>
                          <div className="text-sm text-muted-foreground">{installer.user.email}</div>
                          {installer.brandPhotoPath && (
                            <Badge variant="outline" className="mt-1">Has Brand Logo</Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {installer.subscription ? (
                        <div>
                          <div>{installer.subscription.type}</div>
                          <div className="text-sm text-muted-foreground">
                            Expires: {installer.subscription.endDate ? formatDate(installer.subscription.endDate) : 'N/A'}
                          </div>
                          <Badge variant={installer.subscription.isActive ? "default" : "destructive"} className="mt-1">
                            {installer.subscription.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                      ) : (
                        <Badge variant="outline">No subscription</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={installer.isActive ? "default" : "destructive"}>
                        {installer.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>{installer.customersCount}</TableCell>
                    <TableCell>{installer.installationsCount}</TableCell>
                    <TableCell>{formatDate(installer.createdDate)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/installers/${installer.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        <Button 
                          variant={installer.isActive ? "destructive" : "outline"}
                          size="sm"
                          onClick={() => handleToggleStatus(installer.id, installer.isActive)}
                        >
                          {installer.isActive ? 'Deactivate' : 'Activate'}
                        </Button>
                        <Link href={`/dashboard/installers/${installer.id}/edit-subscription`}>
                          <Button variant="default" size="sm">
                            Manage Subscription
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6">
                    No installers found
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