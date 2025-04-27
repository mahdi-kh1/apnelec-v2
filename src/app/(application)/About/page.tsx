"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, BadgeCheck, Star, ChevronLeft, ChevronRight } from "lucide-react";

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
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

const testimonials = [
  {
    img: "/portrait_01.jpg",
    alt: "Mr Hawthorne",
    title: "Installed additional socket outlets",
    text: "“Clean and tidy – good quality of workmanship.”",
    footer: "Mr Ehsan Zar, Hove, East Sussex",
    date: "Date: 29 July 2017",
  },
  {
    img: "/portrait_02.jpg",
    alt: "Mr Hawthorne",
    title: "Replace Consumer Unit (Fuse box)",
    text: "“Every went well – very courteous, Good quality of work – reasonable price - Reliable.”",
    footer: "Ms Jo Smith, Hove",
    date: "Date: 1 September 2017",
  },
  {
    img: "/portrait_03.jpg",
    alt: "Mr Hawthorne",
    title: "Installed hood on cooker.",
    text: "“Very happy and respectful trader. Would recommend”",
    footer: "Ms Julie Rodgers, Hove East Sussex",
    date: "Date: 4 September 2017",
  },
  // Add more testimonials as needed
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] right-[15%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-700/20"></div>
          <div className="absolute bottom-[10%] left-[10%] h-80 w-80 rounded-full bg-green-500/10 blur-3xl dark:bg-green-700/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp} 
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              About <span className="text-blue-600 dark:text-blue-400">APN Elec</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              APN Elec are certified by NAPIT to provide both Electrical and Solar
              PV installation. We also come with Part P certification for Building
              Regulations. APN Elec is qualified to the latest 18th Edition
              Regulations for Electrical work and EV Charging.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-medium">APN Elec is proud to be a member of Trustmark</span>
            </div>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10"
          >
            Trustmark is a consumer protection body which was established in 2005 by a joint commission 
            of the Government and industry bodies. Its goal is to regulate all industries in and around the home, 
            and to ensure their Registered Businesses maintain required standards of technical competence, 
            customer service and trading practices.
          </motion.p>
        </div>
      </motion.section>
      
      {/* Company Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/20 to-white/90 dark:from-gray-800/90 dark:via-blue-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div 
              variants={fadeInLeft}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-xl bg-blue-200 dark:bg-blue-900/30"></div>
                <Image
                  alt="APN Elec"
                  src="/about-apnelec.jpg"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl object-cover w-full relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInRight}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About APN Elec
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="ml-3">
                    We are MCS approved, MCS is an industry-led quality assurance
                    scheme, which demonstrates the quality and reliability of
                    approved products and installation companies.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="ml-3">
                    We are members of RECC. RECC stands for Renewable Energy
                    Consumer Code. RECC were established to ensure that consumers
                    wishing to install a small-scale heat or power generation unit
                    for their homes have the necessary confidence and service
                    standards so that they can make an informed choice.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="ml-3">
                    We are also insured by IWA Deposit and Guarantee Protection,
                    every system is insured for a minimum of two years after
                    commissioning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* About Amir Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <motion.div 
              variants={fadeInRight}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-xl bg-green-200 dark:bg-green-900/30"></div>
                <Image
                  alt="Amir Nasabzadeh"
                  src="/about-apnelec-amir.jpg"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl object-cover w-full relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInLeft}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Amir
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I worked for many years as an electronics Engineer. My job was
                designing electronic circuit boards. After all those years in my
                chosen career I realised that I would prefer a more sociable
                job. Around 12 years ago I re-trained to be an Electrician. And
                after that my keen interest in renewable energy sources led me
                to further qualifications in 2019 as a Solar Panel, and EV
                charging point installer. I am very interested in green issues
                and I like working with renewables and zero emission vehicles.
                Moving away from fossil fuels is imperative for our planet.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">What Our Clients Say</span>
              <div className="absolute -z-10 bottom-2 left-0 w-full h-3 bg-yellow-400/30"></div>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers about their experience with APN Elec.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto relative"
          >
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-xl">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -z-10 top-2 left-2 w-full h-full rounded-full bg-yellow-400/30"></div>
                  <Image
                    src={testimonials[currentIndex].img}
                    alt={testimonials[currentIndex].alt}
                    width={100}
                    height={100}
                    className="rounded-full object-cover z-10 relative"
                  />
                </div>
                <div className="flex items-center justify-center mt-4 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mt-4 text-white">
                  {testimonials[currentIndex].title}
                </h3>
                <p className="mt-4 text-xl italic text-blue-100">
                  {testimonials[currentIndex].text}
                </p>
                <div className="mt-6 border-t border-blue-700/50 pt-4 text-blue-200">
                  <p className="font-bold">
                    {testimonials[currentIndex].footer}
                  </p>
                  <p className="text-sm mt-1 text-blue-300">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          idx === currentIndex ? "bg-yellow-400" : "bg-blue-700 hover:bg-blue-600"
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Certifications Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Certifications
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We are proud to maintain the highest standards of quality and service in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "NAPIT Certified", icon: <Award className="h-8 w-8" /> },
              { name: "MCS Approved", icon: <Shield className="h-8 w-8" /> },
              { name: "RECC Member", icon: <BadgeCheck className="h-8 w-8" /> },
              { name: "TrustMark Registered", icon: <Shield className="h-8 w-8" /> }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5
                    }
                  }
                }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                  {cert.name}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Link 
              href="/Licences" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View all our credentials and certifications
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/20 to-white/90 dark:from-gray-800/90 dark:via-blue-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Contact APN Elec today for all your electrical, solar, and EV charging needs. We provide free consultations and quotes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact us today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
