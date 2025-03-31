"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check } from 'lucide-react';

const licenses = [
  {
    title: "OZEV Authorized",
    description: "Authorized by the Office for Zero Emission Vehicles.",
    link: "https://www.gov.uk/electric-vehicle-chargepoint-installers",
    imgSrc: "/Licences/OZEV-logo.jpg",
  },
  {
    title: "MCS Accredited",
    description: "MCS-certified installer.",
    link: "#", // Replace with the MCS page link
    imgSrc: "/Licences/mcs-certified.jpg",
  },
  {
    title: "RECC Member",
    description: "Member of the Renewable Energy Consumer Code.",
    link: "https://www.recc.org.uk/scheme/members/00071225-apn-elec",
    imgSrc: "/Licences/recc-certified.jpg",
  },
  {
    title: "NAPIT Member",
    description: "NAPIT-certified for electrical compliance.",
    link: "https://www.napit.org.uk/member/28447/apn-elec.aspx",
    imgSrc: "/Licences/napit.jpg",
  },
  {
    title: "TSI Approved",
    description: "Approved by Trading Standards Institute.",
    link: "#", // Replace with the TSI page link
    imgSrc: "/Licences/tsi-approved.jpg",
  },
  {
    title: "IWA Approved",
    description: "Deposit and Guarantee Insurance from IWA.",
    link: "#", // Replace with the IWA page link
    imgSrc: "/Licences/IWA_APPROVED.png",
  },
  {
    title: "TrustMark Member",
    description: "TrustMark-certified quality assurance.",
    link: "https://www.trustmark.org.uk/firms/APN-Elec-1537739",
    imgSrc: "/Licences/TrustMark.jpg",
  },
  {
    title: "myenergi ZAPPI",
    description: "Member of myenergi for sustainable solutions.",
    link: "#", // Replace with ZAPPI membership page link
    imgSrc: "/Licences/zappi-myenergi-logo.jpg",
  },
];

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

const LicenseSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Credentials & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            APN Elec is backed by industry-leading certifications and memberships, ensuring the highest standards of quality, safety, and service excellence.
          </p>
        </motion.div>

        {/* License Boxes */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          {licenses.map((license, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2"
            >
              <a 
                href={license.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center h-full"
              >
                <div className="relative w-full h-24 mb-6 flex items-center justify-center">
                  <Image
                    width={160}
                    height={80}
                    src={license.imgSrc} 
                    alt={`${license.title} Logo`} 
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {license.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {license.description}
                </p>
                <div className="hidden md:block text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                  Learn more →
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* TrustMark Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-full">
                <Shield className="h-16 w-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                TrustMark Registered Business
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We are a TrustMark Registered business, committed to maintaining the highest standards of quality and customer service. Our work complies with the TrustMark Code of Conduct, ensuring fair trading, good work practices, and excellent customer service.
              </p>
              <div className="space-y-3">
                {[
                  {
                    text: "Learn more about how TrustMark protects homeowners",
                    link: "https://www.trustmark.org.uk/articles/protecting-homeowners-improving-quality-of-home-improvements"
                  },
                  {
                    text: "Learn more about the TrustMark Code of Conduct",
                    link: "https://cms.trustmark.org.uk/media/ekpdo2xw/code-of-conduct.pdf"
                  },
                  {
                    text: "View our Registration details on TrustMark",
                    link: "https://www.trustmark.org.uk/homeowner/find-a-tradesperson?search=true&tmln=1537739"
                  }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LicenseSection;
