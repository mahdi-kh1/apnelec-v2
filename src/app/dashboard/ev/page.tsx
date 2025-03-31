"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BatteryCharging, Zap, Car, Calendar, CheckCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EVDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">EV Solutions Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage your electric vehicle charging infrastructure
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="chargers">Chargers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
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
                    <Zap className="h-5 w-5 text-blue-500" />
                    Active Chargers
                  </CardTitle>
                  <CardDescription>Currently operational</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3/4</div>
                  <p className="text-sm text-muted-foreground mt-2">75% availability</p>
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
                    <BatteryCharging className="h-5 w-5 text-green-500" />
                    Energy Delivered
                  </CardTitle>
                  <CardDescription>Today's charging stats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">67.2 kWh</div>
                  <p className="text-sm text-muted-foreground mt-2">+8% from yesterday</p>
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
                    <Car className="h-5 w-5 text-purple-500" />
                    Total Sessions
                  </CardTitle>
                  <CardDescription>Charging sessions today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground mt-2">Average 42 mins per session</p>
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
                <CardTitle>Charger Locations</CardTitle>
                <CardDescription>Status of your EV charging infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="font-medium">Office Car Park</h4>
                        <p className="text-sm text-muted-foreground">7kW Dual Charger</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Available</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="font-medium">Home Installation</h4>
                        <p className="text-sm text-muted-foreground">11kW Wall Charger</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-400 px-2 py-1 rounded-full">In Use</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="font-medium">Retail Location</h4>
                        <p className="text-sm text-muted-foreground">22kW Fast Charger</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Available</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <h4 className="font-medium">Customer Site</h4>
                        <p className="text-sm text-muted-foreground">50kW DC Charger</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400 px-2 py-1 rounded-full">Offline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="chargers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Charger Management</CardTitle>
              <CardDescription>Configure and monitor your charging points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Charger management interface will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>Detailed charging usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground">Usage analytics will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 