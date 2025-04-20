import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default async function InstallerPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.isAdmin) {
    redirect('/dashboard');
  }

  const { id } = await params;
  const installerId = parseInt(id);
  if (isNaN(installerId)) {
    redirect('/dashboard/installers');
  }

  const installer = await prisma.installer.findUnique({
    where: { id: installerId },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
          mobile: true,
          image: true,
          createdAt: true
        }
      },
      subscription: {
        select: {
          id: true,
          startDate: true,
          endDate: true,
          plan: true,
          type: true,
          isActive: true
        }
      },
      customers: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          createdDate: true
        },
        take: 5,
        orderBy: {
          createdDate: 'desc'
        }
      },
      installations: {
        select: {
          id: true,
          postcode: true,
          status: true,
          createdDate: true
        },
        take: 5,
        orderBy: {
          createdDate: 'desc'
        }
      }
    }
  });

  if (!installer) {
    redirect('/dashboard/installers');
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard/installers" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Installer Details</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Basic information about the installer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              {installer.user.image && (
                <Image
                  src={installer.user.image}
                  alt={`${installer.user.firstName} ${installer.user.lastName}`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">
                  {installer.user.firstName} {installer.user.lastName}
                </h2>
                <p className="text-muted-foreground">{installer.user.email}</p>
                {installer.user.mobile && (
                  <p className="text-muted-foreground">{installer.user.mobile}</p>
                )}
                <div className="mt-2">
                  <Badge variant={installer.isActive ? "default" : "destructive"}>
                    {installer.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                  {installer.brandPhotoPath && (
                    <Badge variant="outline" className="ml-2">Has Brand Logo</Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
            <CardDescription>Current subscription information</CardDescription>
          </CardHeader>
          <CardContent>
            {installer.subscription ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Plan</p>
                    <p className="font-medium">{installer.subscription.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium">{installer.subscription.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Start Date</p>
                    <p className="font-medium">{formatDate(installer.subscription.startDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">End Date</p>
                    <p className="font-medium">{formatDate(installer.subscription.endDate)}</p>
                  </div>
                </div>
                <Badge variant={installer.subscription.isActive ? "default" : "destructive"}>
                  {installer.subscription.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">No active subscription</p>
                <Link href={`/dashboard/installers/${installer.id}/edit-subscription`}>
                  <Button>Add Subscription</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Customers</CardTitle>
              <CardDescription>Last 5 customers added</CardDescription>
            </CardHeader>
            <CardContent>
              {installer.customers.length > 0 ? (
                <div className="space-y-4">
                  {installer.customers.map((customer: any) => (
                    <div key={customer.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          {customer.firstName} {customer.lastName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {customer.email}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(customer.createdDate)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-6">
                  No customers yet
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Installations</CardTitle>
              <CardDescription>Last 5 installations</CardDescription>
            </CardHeader>
            <CardContent>
              {installer.installations.length > 0 ? (
                <div className="space-y-4">
                  {installer.installations.map((installation: any) => (
                    <div key={installation.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          {installation.postcode}
                        </p>
                        <Badge variant="outline" className="mt-1">
                          {installation.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(installation.createdDate)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-6">
                  No installations yet
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 