"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MessageSquare, FileText, HelpCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function SupportDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Support Center</h1>
          <p className="text-muted-foreground">
            Get help with your services and installations
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="contact" className="space-y-6">
        <TabsList className="bg-muted/40 dark:bg-muted/20 backdrop-blur-sm">
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-500" />
                    Phone Support
                  </CardTitle>
                  <CardDescription>Call our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+44 1234 567890</p>
                  <p className="text-sm text-muted-foreground mt-2">Available Mon-Fri, 9am-6pm</p>
                  <Button variant="outline" className="w-full mt-4">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-500" />
                    Email Support
                  </CardTitle>
                  <CardDescription>Send us an email</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">support@apnelec.com</p>
                  <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
                  <Button variant="outline" className="w-full mt-4">
                    <Mail className="mr-2 h-4 w-4" /> Email Us
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-500" />
                    Live Chat
                  </CardTitle>
                  <CardDescription>Chat with our experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Online Chat Support</p>
                  <p className="text-sm text-muted-foreground mt-2">Available during business hours</p>
                  <Button variant="outline" className="w-full mt-4">
                    <MessageSquare className="mr-2 h-4 w-4" /> Start Chat
                  </Button>
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
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send us a message and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Subject of your inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="faqs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Answers to common questions about our services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  How long does a typical solar installation take?
                </h3>
                <p className="text-muted-foreground ml-7">
                  A typical residential solar installation takes 1-3 days, depending on the system size and complexity. 
                  Commercial installations may take longer.
                </p>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <h3 className="text-lg font-medium flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  What maintenance do solar panels require?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Solar panels require minimal maintenance. We recommend cleaning them 2-4 times per year 
                  and having a professional inspection annually.
                </p>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <h3 className="text-lg font-medium flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  How much does an EV charger installation cost?
                </h3>
                <p className="text-muted-foreground ml-7">
                  EV charger installation costs vary based on your specific requirements, but typically range from £500-£1,500. 
                  We provide detailed quotes after assessing your property.
                </p>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <h3 className="text-lg font-medium flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  Do you offer warranties on your installations?
                </h3>
                <p className="text-muted-foreground ml-7">
                  Yes, we offer comprehensive warranties on all our installations. Solar systems come with a 25-year 
                  performance warranty, and all electrical work is guaranteed for at least 5 years.
                </p>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <h3 className="text-lg font-medium flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-500" />
                  What should I do in case of an electrical emergency?
                </h3>
                <p className="text-muted-foreground ml-7">
                  For electrical emergencies, first ensure your safety by turning off the main power if possible. 
                  Then call our emergency line at +44 1234 567891 for immediate assistance.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Track your ongoing support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Solar Panel Output Low</h4>
                      <p className="text-sm text-muted-foreground">Ticket #12345 - Opened on May 10, 2023</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-400 px-2 py-1 rounded-full">In Progress</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">EV Charger Installation Quote</h4>
                      <p className="text-sm text-muted-foreground">Ticket #12344 - Opened on May 8, 2023</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Completed</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <HelpCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Battery Storage Questions</h4>
                      <p className="text-sm text-muted-foreground">Ticket #12340 - Opened on May 3, 2023</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 px-2 py-1 rounded-full">Completed</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">
                  Open New Support Ticket
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 