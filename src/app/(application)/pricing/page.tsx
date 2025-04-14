"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, X, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function PricingPage() {
  const { data: session } = useSession();
  const [annual, setAnnual] = useState(false);
  
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
    show: { opacity: 1, y: 0 }
  };

  const plans = [
    {
      name: "Basic",
      description: "Essential tools for small installers",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Verified installer badge",
        "Basic customer management",
        "Standard solar calculation tools",
        "Email support",
        "Up to 10 projects per month"
      ],
      notIncluded: [
        "Advanced design tools",
        "Priority listing in directory",
        "API access",
        "White-label reports"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      description: "Complete toolkit for growing businesses",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Everything in Basic",
        "Advanced solar calculation tools",
        "Priority listing in directory",
        "Up to 50 projects per month",
        "Phone & email support",
        "Customer portal access",
        "Team collaboration (up to 3 users)"
      ],
      notIncluded: [
        "White-label reports",
        "API access"
      ],
      cta: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Advanced features for established installers",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Everything in Professional",
        "Unlimited projects",
        "White-label reports",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Team collaboration (unlimited users)",
        "Advanced analytics dashboard"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing for Installers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include core features to help you grow your installation business.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!annual ? 'font-semibold text-blue-600' : 'text-gray-500'}`}>Monthly</span>
            <Switch 
              checked={annual} 
              onCheckedChange={setAnnual} 
              id="billing-toggle"
            />
            <span className={`ml-3 ${annual ? 'font-semibold text-blue-600' : 'text-gray-500'}`}>
              Annual <span className="text-sm text-green-600 font-medium">(Save 17%)</span>
            </span>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>We offer two billing options: <span className="font-medium">Monthly</span> or <span className="font-medium">Yearly</span> plans</p>
          </div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.name} 
              variants={item}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {annual ? '/year' : '/month'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Billed {annual ? 'yearly' : 'monthly'}
                  </p>
                  {annual && (
                    <p className="text-green-600 text-sm mt-1">
                      ${plan.monthlyPrice * 12 - plan.annualPrice} savings annually
                    </p>
                  )}
                </div>
                
                <div className="mt-8">
                  <Link href={session ? "/dashboard/subscription" : "/api/auth/signin"}>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-800 hover:bg-gray-900'
                      }`}
                    >
                      {plan.cta} ({annual ? 'Yearly' : 'Monthly'})
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="px-6 pb-8">
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.notIncluded.length > 0 && (
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="font-medium mb-4 text-gray-500">Not included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h3 className="font-bold text-lg mb-2">Available Billing Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md border border-gray-200">
              <h4 className="font-semibold text-blue-600">Monthly Plan</h4>
              <p className="text-gray-600 mt-1">Flexible month-to-month billing with no long-term commitment.</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Cancel anytime</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">All features included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Monthly billing cycle</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-md border border-blue-200 ring-1 ring-blue-100">
              <h4 className="font-semibold text-blue-600">Yearly Plan</h4>
              <p className="text-gray-600 mt-1">Save 17% with our annual billing option.</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Best value (2 months free)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">All features included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Annual billing cycle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need a custom solution?</h2>
              <p className="text-gray-600 max-w-2xl">
                We offer tailored packages for large installation companies with specific requirements.
                Our team will work with you to create a custom plan that fits your business needs.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Can I switch between monthly and yearly plans?</h3>
              <p className="text-gray-600">
                Yes, you can switch between monthly and yearly billing at any time. When switching to yearly, you'll get the discount immediately. When switching to monthly, the change will take effect at the end of your current billing cycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Is there a free trial?</h3>
              <p className="text-gray-600">
                We offer a 14-day free trial for all new accounts. You can explore all features of the Professional plan during your trial with no credit card required.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. For monthly plans, you won't be charged for the next billing cycle. For annual plans, we offer prorated refunds for the unused portion.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your installation business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of successful installers who are using our platform to streamline their operations and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={session ? "/dashboard/subscription" : "/api/auth/signin"}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 