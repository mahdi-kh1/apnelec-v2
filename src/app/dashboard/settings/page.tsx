"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, ShieldAlert, Eye, User, Lock, Moon, Sun, Globe } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [mobileNotifications, setMobileNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and application settings
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Account Information
              </CardTitle>
              <CardDescription>
                Manage your account details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Name</label>
                  <div className="text-lg">John Doe</div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email</label>
                  <div className="text-lg">john.doe@example.com</div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Mobile Phone</label>
                  <div className="text-lg">+44 1234 567890</div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Account Type</label>
                  <div className="text-lg">Customer</div>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Language</label>
                    <p className="text-xs text-muted-foreground">Select your preferred language for the dashboard</p>
                  </div>
                  <select className="p-2 border rounded-md bg-background text-sm">
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Time Zone</label>
                    <p className="text-xs text-muted-foreground">Your current time zone setting</p>
                  </div>
                  <select className="p-2 border rounded-md bg-background text-sm">
                    <option>GMT (UTC+0)</option>
                    <option>BST (UTC+1)</option>
                    <option>EST (UTC-5)</option>
                    <option>PST (UTC-8)</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full sm:w-auto">Update Account Information</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Manage how you receive notifications and updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Email Notifications</label>
                    <p className="text-xs text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Mobile Notifications</label>
                    <p className="text-xs text-muted-foreground">Receive push notifications on your mobile</p>
                  </div>
                  <Switch 
                    checked={mobileNotifications}
                    onCheckedChange={setMobileNotifications}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Marketing Emails</label>
                    <p className="text-xs text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                  <Switch 
                    checked={marketingEmails}
                    onCheckedChange={setMarketingEmails}
                  />
                </div>
              </div>
              
              <div className="pt-4 space-y-4">
                <h3 className="text-sm font-medium">Notification Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="service-updates" defaultChecked className="rounded" />
                    <label htmlFor="service-updates" className="text-sm">Service Updates</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="appointment-reminders" defaultChecked className="rounded" />
                    <label htmlFor="appointment-reminders" className="text-sm">Appointment Reminders</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="system-alerts" defaultChecked className="rounded" />
                    <label htmlFor="system-alerts" className="text-sm">System Alerts</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="billing-info" defaultChecked className="rounded" />
                    <label htmlFor="billing-info" className="text-sm">Billing Information</label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full sm:w-auto">Save Notification Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Two-Factor Authentication</label>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch 
                    checked={twoFactorAuth}
                    onCheckedChange={setTwoFactorAuth}
                  />
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Lock className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <h3 className="text-sm font-medium mb-4">Recent Login Activity</h3>
                <div className="space-y-4">
                  <div className="bg-muted/20 p-3 rounded-md">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium">London, United Kingdom</p>
                        <p className="text-xs text-muted-foreground">Chrome on Windows</p>
                      </div>
                      <p className="text-xs">Today, 10:42 AM</p>
                    </div>
                  </div>
                  <div className="bg-muted/20 p-3 rounded-md">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium">London, United Kingdom</p>
                        <p className="text-xs text-muted-foreground">Safari on iPhone</p>
                      </div>
                      <p className="text-xs">Yesterday, 4:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize how the dashboard looks for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Dark Mode</label>
                    <p className="text-xs text-muted-foreground">Use dark theme for the dashboard</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-amber-500" />
                    <Switch 
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                    <Moon className="h-4 w-4 text-slate-700" />
                  </div>
                </div>
                
                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-medium">Color Theme</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-10 w-10 rounded-full bg-blue-600 cursor-pointer ring-2 ring-offset-2 ring-blue-600"></div>
                    <div className="h-10 w-10 rounded-full bg-green-600 cursor-pointer"></div>
                    <div className="h-10 w-10 rounded-full bg-purple-600 cursor-pointer"></div>
                    <div className="h-10 w-10 rounded-full bg-amber-600 cursor-pointer"></div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-medium">Text Size</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 border rounded-md text-xs">A</button>
                    <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="w-1/2 h-1 bg-primary rounded-full"></div>
                    </div>
                    <button className="px-3 py-1 border rounded-md text-base">A</button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full sm:w-auto">Save Appearance Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 