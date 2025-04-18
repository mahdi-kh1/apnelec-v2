"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Plus, FileText, Loader2, Search, Link as LinkIcon, Download } from 'lucide-react';
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
import { Label } from '@/components/ui/label';

interface Installation {
  id: number;
  postcode: string;
  zone: string;
  totalPVOutput: number;
  annualACOutput: number;
  createdDate: string;
  customer: {
    id: number;
    firstName: string;
    lastName: string;
  };
  address: {
    city: string;
    postcode: string;
    street: string;
  };
  pdfPath: string | null;
  status: string;
  results: any;
}

interface InstallationsListProps {
  isAdmin?: boolean;
}

export default function InstallationsList({ isAdmin }: InstallationsListProps) {
  const { data: session } = useSession();
  const [installations, setInstallations] = useState<Installation[]>([]);
  const [filteredInstallations, setFilteredInstallations] = useState<Installation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  
  useEffect(() => {
    const fetchInstallations = async () => {
      try {
        const response = await fetch('/api/installations');
        
        if (!response.ok) {
          throw new Error('Failed to fetch installations');
        }
        
        const data = await response.json();
        setInstallations(data);
        setFilteredInstallations(data);
      } catch (err) {
        console.error('Error fetching installations:', err);
        toast.error('Failed to load installations');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInstallations();
  }, []);
  
  useEffect(() => {
    let filtered = [...installations];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(installation => 
        installation.customer.firstName.toLowerCase().includes(term) ||
        installation.customer.lastName.toLowerCase().includes(term) ||
        installation.address.postcode.toLowerCase().includes(term) ||
        installation.address.city.toLowerCase().includes(term)
      );
    }
    
    // Apply additional filters
    if (filterBy === 'high-output') {
      filtered = filtered.filter(installation => installation.totalPVOutput >= 5);
    } else if (filterBy === 'low-output') {
      filtered = filtered.filter(installation => installation.totalPVOutput < 5);
    }
    
    setFilteredInstallations(filtered);
  }, [searchTerm, filterBy, installations]);
  
  const generateSignatureLink = async (installationId: number) => {
    try {
      const response = await fetch(`/api/installations/${installationId}/signature-link`, {
        method: 'POST'
      });
      
      if (!response.ok) throw new Error('Failed to generate signature link');
      
      const { url } = await response.json();
      
      // Copy link to clipboard
      await navigator.clipboard.writeText(window.location.origin + url);
      toast.success('Signature link copied to clipboard');
    } catch (error) {
      console.error('Error generating signature link:', error);
      toast.error('Failed to generate signature link');
    }
  };
  
  const downloadPdf = async (installation: Installation) => {
    try {
      const { jsPDF } = await import('jspdf');
      const autoTable = (await import('jspdf-autotable')).default;
      
      const doc = new jsPDF();
      
      // Title
      doc.setFontSize(18);
      doc.text('Solar PV System Performance Estimate', 105, 15, { align: 'center' });
      
      // Customer information
      doc.setFontSize(14);
      doc.text('Customer Information', 14, 25);
      
      // Try to get customer email and mobile from API
      let customerDetails = null;
      try {
        const customerResponse = await fetch(`/api/customers/${installation.customer.id}`);
        if (customerResponse.ok) {
          customerDetails = await customerResponse.json();
        }
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
      
      // Customer details table
      autoTable(doc, {
        startY: 30,
        head: [],
        body: [
          ['Name:', `${installation.customer.firstName} ${installation.customer.lastName}`],
          ['Email:', customerDetails?.email || 'N/A'],
          ['Mobile:', customerDetails?.mobile || 'N/A'],
          ['Address:', `${installation.address.street || ''}, ${installation.address.city || ''}, ${installation.address.postcode || ''}`]
        ],
        theme: 'plain',
        styles: { fontSize: 10, cellPadding: 1 },
        columnStyles: {
          0: { fontStyle: 'bold', cellWidth: 30 },
          1: { cellWidth: 'auto' }
        }
      });
      
      // Get the Y position after the customer details table
      const customerTableEndY = (doc as any).lastAutoTable.finalY + 10;
      
      // Parse results data
      let results = null;
      if (installation.results) {
        try {
          results = typeof installation.results === 'string' 
            ? JSON.parse(installation.results) 
            : installation.results;
        } catch (e) {
          console.error('Error parsing results JSON:', e);
        }
      }
      
      // A. Installation Data
      doc.setFontSize(14);
      doc.text('A. Installation Data', 14, customerTableEndY);
      
      autoTable(doc, {
        startY: customerTableEndY + 5,
        head: [['Parameter', 'Value']],
        body: [
          ['Installed capacity of PV system', `${installation.totalPVOutput} kWp`],
          ['Orientation of the PV system', `${results?.orientation || '0'}°`],
          ['Inclination of system', `${results?.inclination || '0'}°`],
          ['Postcode', installation.postcode],
          ['Region', results?.region || (installation.zone ? `${installation.zone} Region` : 'N/A')]
        ],
        theme: 'grid',
      });
      
      // Get the Y position after the installation data table
      const installationTableEndY = (doc as any).lastAutoTable.finalY + 10;
      
      // B. Performance Calculations
      doc.setFontSize(14);
      doc.text('B. Performance Calculations', 14, installationTableEndY);
      
      autoTable(doc, {
        startY: installationTableEndY + 5,
        head: [['Parameter', 'Value']],
        body: [
          ['kWh/kWp (Kk) from table', `${results?.kwhPerKwp || '950'} kWh/kWp`],
          ['Shade Factor (SF)', `${results?.shadeFactor || '0'}%`],
          ['Estimated annual output', `${installation.annualACOutput} kWh`]
        ],
        theme: 'grid',
      });
      
      // Get the Y position after the performance calculations table
      const performanceTableEndY = (doc as any).lastAutoTable.finalY + 10;
      
      // C. Estimated PV Self-Consumption - PV Only
      doc.setFontSize(14);
      doc.text('C. Estimated PV Self-Consumption - PV Only', 14, performanceTableEndY);
      
      autoTable(doc, {
        startY: performanceTableEndY + 5,
        head: [['Parameter', 'Value']],
        body: [
          ['Assumed occupancy archetype', results?.occupancyArchetype || 'Unknown'],
          ['Assumed annual electricity consumption', `${results?.annualElectricityConsumption || 'N/A'} kWh`],
          ['Expected solar PV self-consumption (PV Only)', `${results?.expectedSelfConsumption || 'N/A'} kWh`],
          ['Grid electricity independence / Self-sufficiency', `${results?.gridIndependence || 'N/A'}%`]
        ],
        theme: 'grid',
      });
      
      // Get the Y position after the self-consumption table
      const selfConsumptionTableEndY = (doc as any).lastAutoTable.finalY + 10;
      
      // D. Estimated PV Self-Consumption - With EESS
      doc.setFontSize(14);
      doc.text('D. Estimated PV Self-Consumption - With EESS', 14, selfConsumptionTableEndY);
      
      autoTable(doc, {
        startY: selfConsumptionTableEndY + 5,
        head: [['Parameter', 'Value']],
        body: [
          ['Assumed usable capacity of electrical energy storage device', `${results?.batteryCapacity || 'N/A'} kWh`],
          ['Expected solar PV self-consumption (With EESS)', `${results?.expectedSelfConsumptionWithBattery || results?.expectedSelfConsumption || 'N/A'} kWh`],
          ['Grid electricity independence / Self-sufficiency (with EESS)', `${results?.gridIndependenceWithBattery || results?.gridIndependence || 'N/A'}%`]
        ],
        theme: 'grid',
      });
      
      // Disclaimer and date
      const disclaimer = 'This is a preliminary estimate and actual performance may vary.';
      doc.setFontSize(10);
      doc.text(disclaimer, 14, 270);
      doc.text(`Generated on ${new Date().toLocaleDateString()}`, 14, 277);
      
      // Save the PDF
      doc.save(`installation-${installation.id}.pdf`);
      toast.success('PDF downloaded successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF');
    }
  };
  
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'DETAILS_COMPLETED':
        return 'bg-blue-100 text-blue-800';
      case 'SIGNATURE_NEEDED':
        return 'bg-yellow-100 text-yellow-800';
      case 'CONTRACT_SIGNED':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between animate-pulse">
          <div>
            <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
          </div>
          <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-36"></div>
        </CardHeader>
        <CardContent>
          {/* Search and Filter Skeleton */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full md:w-[200px]"></div>
          </div>

          {/* Table Skeleton */}
          <div className="rounded-md border">
            <div className="bg-gray-50 dark:bg-gray-800 border-b">
              <div className="flex py-3 px-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-5 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2"></div>
                ))}
              </div>
            </div>
            <div className="animate-pulse">
              {[1, 2, 3, 4, 5].map((row) => (
                <div key={row} className="border-b flex py-4 px-4">
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-2 my-1"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded flex-1 mx-2 my-1"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-28 ml-auto my-1"></div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{isAdmin ? 'All Installation Projects' : 'Your Installation Projects'}</CardTitle>
          <CardDescription>Manage your solar installation projects</CardDescription>
        </div>
        <Link href="/dashboard/installations/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Installation
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search installations..."
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
              <SelectItem value="all">All Installations</SelectItem>
              <SelectItem value="high-output">High Output (≥ 5kWp)</SelectItem>
              <SelectItem value="low-output">Low Output (&lt; 5kWp)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Zone</TableHead>
                <TableHead>PV Output</TableHead>
                <TableHead>Annual Output</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInstallations.length > 0 ? (
                filteredInstallations.map((installation) => (
                  <TableRow key={installation.id}>
                    <TableCell className="font-medium">{installation.id}</TableCell>
                    <TableCell>
                      <Link href={`/dashboard/customers/${installation.customer.id}`} className="hover:underline">
                        {installation.customer.firstName} {installation.customer.lastName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div>{installation.address.city}</div>
                      <div className="text-sm text-muted-foreground">{installation.address.postcode}</div>
                    </TableCell>
                    <TableCell>
                      {installation.zone ? (
                        <Badge variant="outline">{installation.zone}</Badge>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge>{installation.totalPVOutput} kWp</Badge>
                    </TableCell>
                    <TableCell>{installation.annualACOutput} kWh</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${getStatusBadgeColor(installation.status)}`}>
                        {installation.status.replace('_', ' ')}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/installations/${installation.id}`}>
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => downloadPdf(installation)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        {installation.pdfPath && (
                          <a href={installation.pdfPath} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                        <Link href={`/dashboard/installations/${installation.id}/edit`}>
                          <Button variant="outline" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        {(installation.status === 'DETAILS_COMPLETED' || installation.status === 'SIGNATURE_NEEDED') && (
                          <button
                            onClick={() => generateSignatureLink(installation.id)}
                            className="p-2 hover:bg-gray-100 rounded"
                            title={installation.status === 'SIGNATURE_NEEDED' ? 'Copy signature link' : 'Generate signature link'}
                          >
                            <LinkIcon className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">
                    No installations found
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