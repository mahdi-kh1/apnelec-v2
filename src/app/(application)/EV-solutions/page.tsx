"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ZapIcon, BatteryChargingIcon, ShieldCheck } from "lucide-react";

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

const EvSolutionsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              EV Charging Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              If you are considering purchasing an Electrical car or van, APN Elec 
              are registered and certified by Myenergi Zappi 2 home charge point,
              PodPiont and Rolec EV to install both home and workplace charging
              points. APN Elec are not VAT registered, therefore VAT will not be
              added to your bill.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Features Section */}
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
              <div className="mb-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                  <ZapIcon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  APN Elec likes Zappi Charging points
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                They are a multi-award winning charging point and can be used for
                any electric car. Zappi charging points are:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Designed and manufactured in the UK.",
                  "OZEV grant approved.",
                  "Fast installation, depending on your property this can be just half a day.",
                  "In-built LCD screen displaying energy monitoring.",
                  "Savings can be maximised because they have Economy Tariff sensing as well as a programmable timer.",
                  "Solar PV and Battery compatible.",
                  "Can be paired with the Myenergi app, so you can set timers and boost functions",
                  "3-year warranty"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInLeft}
                    custom={index}
                    className="flex items-start"
                  >
                    <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              className="md:w-1/2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
                <Image
                  alt="Zappi charging point"
                  src="/Lisa-Rolec-Off-Road01032021.jpg"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* OZEV Grant Section */}
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
              <div className="mb-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  OZEV Grant Eligibility
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                You may be eligible for the £350 grant from the Office of Zero
                Emission Vehicles (OZEV). For more update please check the{" "}
                <a 
                  href="https://www.find-government-grants.service.gov.uk/grants/electric-vehicle-chargepoint-and-infrastructure-grants-for-landlords-1#eligibility"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  OZEV website
                </a>.
              </p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                See the eligibility checklist below:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "You have dedicated off-road parking",
                  "Your plug-in vehicle was purchased after 1 October 2016.",
                  "You have not already claimed the grant for your vehicle.",
                  "By the claiming the grant you are not exceeding the limit of two OZEV funded charging points per household."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInRight}
                    custom={index}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInLeft}
              className="md:w-1/2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
                <Image
                  alt="EV charging station"
                  src="/sas-zappi2-off-road01032021.jpg"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Gallery Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/20 to-white/90 dark:from-gray-800/90 dark:via-blue-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our EV Charging Installations
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              View some of our recent charging point installations for homes and businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <motion.div 
              variants={fadeInUp} 
              className="col-span-12 md:col-span-6 lg:col-span-8 row-span-2"
            >
              <div 
                className="relative h-[400px] md:h-full rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                onClick={() => openModal({ src: "/Stephen-rolec01032021.jpg", alt: "Stephen rolec" })}
              >
                <Image
                  alt="Stephen rolec"
                  src="/Stephen-rolec01032021.jpg"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">Stephen Rolec Installation</h3>
                    <p className="text-white/80">Click to enlarge</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="col-span-6 lg:col-span-4 row-span-1"
            >
              <div 
                className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                onClick={() => openModal({ src: "/Rolec-Smart01032021.jpg", alt: "Rolec Smart" })}
              >
                <Image
                  alt="Rolec Smart"
                  src="/Rolec-Smart01032021.jpg"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold">Rolec Smart</h3>
                    <p className="text-white/80 text-sm">Click to enlarge</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              className="col-span-6 lg:col-span-4 row-span-1"
            >
              <div 
                className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                onClick={() => openModal({ src: "/Sas-Zappi01032021.jpg", alt: "Sas Zappi" })}
              >
                <Image
                  alt="Sas Zappi"
                  src="/Sas-Zappi01032021.jpg"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold">Sas Zappi</h3>
                    <p className="text-white/80 text-sm">Click to enlarge</p>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Switch to Electric?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                APN Elec are approved installers for leading EV charging solutions. Contact us today for a personalized quote.
              </p>
              <Link 
                href="/Contact" 
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-700 hover:bg-blue-50 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact us today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-200"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full h-auto bg-transparent rounded-lg overflow-hidden cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EvSolutionsPage;
