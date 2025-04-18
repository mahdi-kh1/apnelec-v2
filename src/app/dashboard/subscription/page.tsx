'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, Clock, CreditCard, Shield, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Subscription } from '@/types/subscription';

export default function SubscriptionPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasActiveApplication, setHasActiveApplication] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await fetch('/api/subscription/status');
        if (response.ok) {
          const data = await response.json();
          setSubscription(data.subscription);
        }
      } catch (error) {
        console.error("Error fetching subscription:", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if the user has an active subscription application
    const checkApplicationStatus = async () => {
      if (session?.user?.id) {
        try {
          setIsLoading(true);
          const response = await fetch('/api/subscription/applications/status');
          if (response.ok) {
            const data = await response.json();
            setHasActiveApplication(data.hasActiveApplication);
            
            // Redirect if user already has an active application
            if (data.hasActiveApplication) {
              redirect('/dashboard');
            }
          }
        } catch (error) {
          console.error("Error checking application status:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (session?.user) {
      fetchSubscription();
      checkApplicationStatus();
    }
  }, [session]);

  // if (status === "loading" || loading) {
  //   return (
  //     <div className="container mx-auto p-4">
  //       <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6 animate-pulse"></div>
        
  //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  //         <div className="lg:col-span-2">
  //           <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
  //             <div className="p-6 pb-3 border-b border-gray-100 dark:border-gray-700">
  //               <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-2 animate-pulse"></div>
  //               <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-60 animate-pulse"></div>
  //             </div>
  //             <div className="p-6 animate-pulse">
  //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  //                 {[1, 2, 3, 4].map(i => (
  //                   <div key={i} className="flex items-start space-x-3">
  //                     <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded mt-0.5"></div>
  //                     <div className="space-y-2">
  //                       <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
  //                       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
                
  //               <div className="border-t pt-6 mt-6">
  //                 <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3"></div>
  //                 <div className="space-y-2">
  //                   {[1, 2, 3, 4].map(i => (
  //                     <div key={i} className="flex items-center space-x-2">
  //                       <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
  //                       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="p-6 pt-2 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-3 justify-between">
  //               <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full sm:w-40"></div>
  //               <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full sm:w-40"></div>
  //             </div>
  //           </div>
  //         </div>
          
  //         <div>
  //           <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
  //             <div className="p-6 pb-3 border-b border-gray-100 dark:border-gray-700">
  //               <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-2 animate-pulse"></div>
  //               <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
  //             </div>
  //             <div className="p-6 animate-pulse">
  //               <div className="space-y-4">
  //                 {[1, 2, 3].map(i => (
  //                   <div key={i} className="flex items-start space-x-3">
  //                     <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded mt-0.5"></div>
  //                     <div className="space-y-2 flex-1">
  //                       <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
  //                       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>
  //             <div className="p-6 pt-2 border-t border-gray-100 dark:border-gray-700">
  //               <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Subscription Management</h1>

        {/* <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6 animate-pulse"></div> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <div className="p-6 pb-3 border-b border-gray-100 dark:border-gray-700">
                <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-60 animate-pulse"></div>
              </div>
              <div className="p-6 animate-pulse">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded mt-0.5"></div>
                      <div className="space-y-2">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6 mt-6">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-2 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-3 justify-between">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full sm:w-40"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full sm:w-40"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <div className="p-6 pb-3 border-b border-gray-100 dark:border-gray-700">
                <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
              </div>
              <div className="p-6 animate-pulse">
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded mt-0.5"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Subscription Management</h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item} className="lg:col-span-2">
          {subscription ? (
            <Card>
              <CardHeader>
                <CardTitle>Active Subscription</CardTitle>
                <CardDescription>
                  Your subscription is currently active
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Start Date</p>
                      <p className="text-sm text-muted-foreground">{new Date(subscription.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Expiry Date</p>
                      <p className="text-sm text-muted-foreground">{new Date(subscription.expiryDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Plan</p>
                      <p className="text-sm text-muted-foreground">{subscription.plan}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Days Remaining</p>
                      <p className="text-sm text-muted-foreground">{subscription.daysRemaining} days</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-3">Subscription Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Unlimited customer management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Advanced solar calculation tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Priority customer support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Featured in installer directory</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between">
                <Link href="/dashboard/subscription/extend">
                  <Button>Extend Subscription</Button>
                </Link>
                <Button variant="outline">Manage Billing</Button>
              </CardFooter>
            </Card>
          ) : hasActiveApplication ? (
            <Card>
              <CardHeader>
                <CardTitle>Application In Progress</CardTitle>
                <CardDescription>
                  Your installer application is being reviewed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-4">
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="font-medium text-yellow-600">Under Review</span>
                  </div>
                  <p className="mb-4">
                    Thank you for applying to become an approved installer. Our team is currently reviewing your application.
                    You'll receive a notification once the review is complete.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-700">
                      The review process typically takes 1-2 business days. If you have any questions, please contact our support team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No Active Subscription</CardTitle>
                <CardDescription>
                  You don't have an active installer subscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-4 text-center">
                  <p className="mb-4">
                    Become an approved installer to access premium features and grow your business.
                  </p>
                  <Link href="/dashboard/apply-subscription">
                    <Button size="lg" className="mt-2">
                      Apply for Subscription
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Subscription Benefits</CardTitle>
              <CardDescription>
                Why become an approved installer?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Verified Status</p>
                    <p className="text-sm text-muted-foreground">Display a verified badge to build customer trust</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Featured Listings</p>
                    <p className="text-sm text-muted-foreground">Get priority placement in our installer directory</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Advanced Tools</p>
                    <p className="text-sm text-muted-foreground">Access premium solar calculation and design tools</p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/pricing" className="w-full">
                <Button variant="outline" className="w-full">View Pricing Plans</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
} 