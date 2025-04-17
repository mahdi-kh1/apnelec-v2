import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import EditSubscriptionForm from '@/components/installers/EditSubscriptionForm';

export default async function EditSubscriptionPage({
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
          email: true
        }
      },
      subscription: true
    }
  });

  if (!installer) {
    redirect('/dashboard/installers');
  }

  // Transform dates to strings
  const formattedInstaller = {
    ...installer,
    subscription: installer.subscription ? {
      ...installer.subscription,
      startDate: installer.subscription.startDate.toISOString(),
      endDate: installer.subscription.endDate.toISOString()
    } : null
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Edit Subscription</h1>
      <EditSubscriptionForm installer={formattedInstaller} />
    </div>
  );
} 