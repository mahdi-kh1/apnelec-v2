"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Battery, PanelTop, CircleCheck } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut"
  }
};

export default function SolarSolutionsPage() {
  const benefits = [
    {
      icon: <Sun className="h-10 w-10" />,
      title: "Renewable Energy",
      description: "Harness the power of the sun to generate clean, renewable electricity for your home or business."
    },
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Energy Storage",
      description: "Add battery storage to your solar installation to store excess energy for use at night or during outages."
    },
    {
      icon: <PanelTop className="h-10 w-10" />,
      title: "Expert Installation",
      description: "Our MCS-accredited installers ensure your solar panels are installed to the highest standards."
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-20 md:py-32 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] right-[15%] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl dark:bg-yellow-700/20"></div>
          <div className="absolute bottom-[10%] left-[10%] h-80 w-80 rounded-full bg-green-500/10 blur-3xl dark:bg-green-700/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Solar Solutions for a <span className="text-yellow-600 dark:text-yellow-500">Sustainable</span> Future
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                Harness the power of the sun with our expert solar installation services. 
                Reduce your carbon footprint and energy bills with custom solar solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link 
                  href="/Solar-solutions/about-Solar"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/Contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2"
              animate={floatingAnimation}
            >
              <div className="relative">
                <Image
                  src="/screwing-panels-from-front.jpg"
                  alt="Solar panel installation"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <p className="text-sm font-bold">Reduce energy bills by up to 70%</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-2">
                    <CircleCheck className="h-5 w-5 text-green-500" />
                    <p className="text-sm font-bold">MCS Accredited Installation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-yellow-50/20 to-white/90 dark:from-gray-800/90 dark:via-yellow-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Solar Solutions?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We provide end-to-end solar power solutions with professional installation 
              and ongoing support to maximize your energy efficiency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Services Overview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <Image
                src="/Maps-UK.png"
                alt="UK Solar Map"
                width={600}
                height={400}
                className="rounded-xl shadow-xl object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Solar Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CircleCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Residential Solar Installations
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Custom solar solutions for homes, designed to maximize energy production and efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CircleCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Commercial Solar Solutions
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Reduce operational costs for your business with our commercial solar installations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CircleCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Battery Storage Systems
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Maximize your solar investment with battery storage solutions that allow you to use solar power day and night.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/Solar-solutions/Solar-energy-calculator"
                  className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium"
                >
                  Check how many kilowatts your home can produce
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-600 dark:to-orange-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Switch to Solar?
              </h2>
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have reduced their energy bills and carbon footprint with our solar solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/Contact" 
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-yellow-600 hover:bg-yellow-50 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get a free quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/Solar-solutions/about-Solar" 
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
