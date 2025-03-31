"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Download, ChevronRight, Sun, BatteryCharging } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DocumentationPage() {
  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground">
            User guides, manuals, and technical specifications
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="solar" className="space-y-6">
        <TabsList className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm">
          <TabsTrigger value="solar">Solar Systems</TabsTrigger>
          <TabsTrigger value="ev">EV Charging</TabsTrigger>
          <TabsTrigger value="electrical">Electrical</TabsTrigger>
        </TabsList>
        
        <TabsContent value="solar" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                  Solar System Documentation
                </CardTitle>
                <CardDescription>User manuals and guides for your solar installation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-500 mr-4" />
                    <div>
                      <h3 className="font-medium">Solar Panel User Manual</h3>
                      <p className="text-sm text-muted-foreground">PDF • 4.2 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-500 mr-4" />
                    <div>
                      <h3 className="font-medium">Inverter Technical Specifications</h3>
                      <p className="text-sm text-muted-foreground">PDF • 2.8 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-500 mr-4" />
                    <div>
                      <h3 className="font-medium">Battery Storage Guide</h3>
                      <p className="text-sm text-muted-foreground">PDF • 3.5 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-500 mr-4" />
                    <div>
                      <h3 className="font-medium">Maintenance Schedule</h3>
                      <p className="text-sm text-muted-foreground">PDF • 1.2 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Visual guides for your solar system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                    <div className="aspect-video bg-muted/30 rounded-md mb-3 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <h3 className="font-medium">Getting Started with Your Solar System</h3>
                    <p className="text-sm text-muted-foreground mt-1">Duration: 12:34 mins</p>
                  </div>
                  
                  <div className="p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                    <div className="aspect-video bg-muted/30 rounded-md mb-3 flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <h3 className="font-medium">Monitoring Your Solar Production</h3>
                    <p className="text-sm text-muted-foreground mt-1">Duration: 8:15 mins</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="ev" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BatteryCharging className="h-5 w-5 mr-2 text-green-500" />
                EV Charging Documentation
              </CardTitle>
              <CardDescription>User manuals and guides for your EV chargers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-medium">Home Charger User Guide</h3>
                    <p className="text-sm text-muted-foreground">PDF • 3.7 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-medium">Charging Station Technical Manual</h3>
                    <p className="text-sm text-muted-foreground">PDF • 5.1 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-medium">Troubleshooting Guide</h3>
                    <p className="text-sm text-muted-foreground">PDF • 2.3 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="electrical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Electrical Documentation</CardTitle>
              <CardDescription>Specifications and guides for your electrical installations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-medium">Electrical Installation Certificate</h3>
                    <p className="text-sm text-muted-foreground">PDF • 1.8 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-medium">Safety Guidelines</h3>
                    <p className="text-sm text-muted-foreground">PDF • 2.5 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-muted rounded-lg hover:bg-muted/10 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-medium">Warranty Information</h3>
                    <p className="text-sm text-muted-foreground">PDF • 1.1 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 