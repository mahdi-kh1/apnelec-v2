"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, ClipboardCheck, Clock, CalendarClock, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Services Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your electrical services and appointments
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="appointments" className="space-y-6">
        <TabsList className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm">
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="services">Service Types</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="appointments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-blue-500" />
                    Upcoming
                  </CardTitle>
                  <CardDescription>Scheduled appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5</div>
                  <p className="text-sm text-muted-foreground mt-2">Next: Tomorrow at 10:00 AM</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardCheck className="h-5 w-5 text-green-500" />
                    Completed
                  </CardTitle>
                  <CardDescription>Services completed this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground mt-2">+3 compared to last month</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-500" />
                    Average Time
                  </CardTitle>
                  <CardDescription>Per service call</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2.5 hrs</div>
                  <p className="text-sm text-muted-foreground mt-2">Efficient service delivery</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled service appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Wrench className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Electrical Inspection</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">May 15, 2023 - 10:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">123 High Street</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                        <Wrench className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Panel Installation</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">May 17, 2023 - 09:30 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">45 Oak Avenue</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                        <Wrench className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Emergency Repair</h4>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">May 18, 2023 - 14:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">78 Pine Road</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Services</CardTitle>
              <CardDescription>Explore our range of electrical services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-muted rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Residential Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-green-500" />
                      <span>Electrical Inspections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-green-500" />
                      <span>Rewiring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-green-500" />
                      <span>Lighting Installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-green-500" />
                      <span>Emergency Repairs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 border border-muted rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Commercial Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-blue-500" />
                      <span>Commercial Inspections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-blue-500" />
                      <span>Industrial Wiring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-blue-500" />
                      <span>Energy Efficiency Audits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-blue-500" />
                      <span>Maintenance Contracts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service History</CardTitle>
              <CardDescription>Records of your past services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Date</th>
                      <th className="text-left py-3 px-2">Service</th>
                      <th className="text-left py-3 px-2">Location</th>
                      <th className="text-left py-3 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2">Apr 30, 2023</td>
                      <td className="py-3 px-2">Electrical Inspection</td>
                      <td className="py-3 px-2">123 High Street</td>
                      <td className="py-3 px-2"><span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Completed</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">Apr 28, 2023</td>
                      <td className="py-3 px-2">Lighting Installation</td>
                      <td className="py-3 px-2">45 Oak Avenue</td>
                      <td className="py-3 px-2"><span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Completed</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">Apr 22, 2023</td>
                      <td className="py-3 px-2">Emergency Repair</td>
                      <td className="py-3 px-2">78 Pine Road</td>
                      <td className="py-3 px-2"><span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Completed</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2">Apr 15, 2023</td>
                      <td className="py-3 px-2">Panel Replacement</td>
                      <td className="py-3 px-2">12 Elm Street</td>
                      <td className="py-3 px-2"><span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 