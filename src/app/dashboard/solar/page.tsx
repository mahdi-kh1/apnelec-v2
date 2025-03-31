"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Battery, LineChart, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SolarDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Solar Solutions Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage your solar energy systems
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-yellow-500" />
                    Energy Production
                  </CardTitle>
                  <CardDescription>Today's solar generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">18.7 kWh</div>
                  <p className="text-sm text-muted-foreground mt-2">+12% from yesterday</p>
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
                    <Battery className="h-5 w-5 text-green-500" />
                    Storage Status
                  </CardTitle>
                  <CardDescription>Current battery charge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85%</div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
                    <div className="h-3 bg-green-500 rounded-full" style={{width: "85%"}}></div>
                  </div>
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
                    <LineChart className="h-5 w-5 text-blue-500" />
                    Savings
                  </CardTitle>
                  <CardDescription>Monthly cost savings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">£148.50</div>
                  <p className="text-sm text-muted-foreground mt-2">Based on current rates</p>
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
                <CardTitle>System Health</CardTitle>
                <CardDescription>Current status of your solar installation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Inverter Status</span>
                    </div>
                    <span className="text-sm font-medium text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Panel Efficiency</span>
                    </div>
                    <span className="text-sm font-medium text-green-500">Optimal (98%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <span>Battery Health</span>
                    </div>
                    <span className="text-sm font-medium text-amber-500">Good (92%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Grid Connection</span>
                    </div>
                    <span className="text-sm font-medium text-green-500">Connected</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Charts</CardTitle>
              <CardDescription>Detailed energy production analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Performance charts will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Schedule</CardTitle>
              <CardDescription>Upcoming maintenance tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg">
                  <Calendar className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                  <div>
                    <h4 className="font-medium">Panel Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for May 15, 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg">
                  <Calendar className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                  <div>
                    <h4 className="font-medium">System Inspection</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for June 23, 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg">
                  <Calendar className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                  <div>
                    <h4 className="font-medium">Battery Check</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for July 10, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 