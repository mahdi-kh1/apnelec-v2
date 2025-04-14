"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";

export default function ApplySubscriptionPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  const [formData, setFormData] = useState({
    companyName: "",
    licenseNumber: "",
    experience: "",
    specialization: "",
    reason: "",
    plan: "monthly"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error" | "warning">(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [databaseStatus, setDatabaseStatus] = useState<"connected" | "disconnected" | "unknown">("unknown");

  useEffect(() => {
    // Check database status
    const checkDatabaseStatus = async () => {
      try {
        const response = await fetch('/api/subscription/status');
        if (response.ok) {
          const data = await response.json();
          setDatabaseStatus(data.databaseStatus || "unknown");
        } else {
          setDatabaseStatus("disconnected");
        }
      } catch (error) {
        console.error("Error checking database status:", error);
        setDatabaseStatus("disconnected");
      }
    };

    checkDatabaseStatus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/subscription/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        if (databaseStatus === "disconnected") {
          setSubmitStatus("warning");
          setErrorMessage("Your application has been received, but the database is currently unavailable. Please try again later when the system is fully operational.");
        } else {
          setSubmitStatus("success");
        }
        
        // Reset form
        setFormData({
          companyName: "",
          licenseNumber: "",
          experience: "",
          specialization: "",
          reason: "",
          plan: "monthly"
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || data.message || "Failed to submit application");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Apply for Installer Subscription</h1>

      {databaseStatus === "disconnected" && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Database Connection Issue</AlertTitle>
          <AlertDescription>
            The database is currently unavailable. You can still submit your application, but it will be stored temporarily until the database connection is restored.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Application</CardTitle>
              <CardDescription>
                Fill out the form below to apply for an installer subscription
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your application has been received and is being reviewed by our team.
                    We'll notify you once it's approved.
                  </p>
                  <Button onClick={() => setSubmitStatus(null)}>Submit Another Application</Button>
                </motion.div>
              ) : submitStatus === "warning" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                    <AlertTriangle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Application Received</h3>
                  <p className="text-muted-foreground mb-6">
                    {errorMessage}
                  </p>
                  <Button onClick={() => setSubmitStatus(null)}>Submit Another Application</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === "error" && (
                    <Alert variant="destructive">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input
                      id="licenseNumber"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select
                      name="experience"
                      value={formData.experience}
                      onValueChange={(value) => handleSelectChange("experience", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Select
                      name="specialization"
                      value={formData.specialization}
                      onValueChange={(value) => handleSelectChange("specialization", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solar">Solar Installation</SelectItem>
                        <SelectItem value="ev">EV Charging</SelectItem>
                        <SelectItem value="battery">Battery Storage</SelectItem>
                        <SelectItem value="electrical">General Electrical</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reason">Why do you want to join?</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plan">Subscription Plan</Label>
                    <Select
                      name="plan"
                      value={formData.plan}
                      onValueChange={(value) => handleSelectChange("plan", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subscription plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly ($49/month)</SelectItem>
                        <SelectItem value="annual">Annual ($499/year - Save $89)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>
                What happens after you apply
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-sm">
                  <span className="font-medium">Application Review</span>
                  <p className="text-muted-foreground ml-5 mt-1">
                    Our team reviews your application within 1-2 business days
                  </p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Verification</span>
                  <p className="text-muted-foreground ml-5 mt-1">
                    We may contact you to verify your credentials and experience
                  </p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Approval</span>
                  <p className="text-muted-foreground ml-5 mt-1">
                    Once approved, you'll receive access to installer features
                  </p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Onboarding</span>
                  <p className="text-muted-foreground ml-5 mt-1">
                    We'll guide you through the platform's installer features
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 