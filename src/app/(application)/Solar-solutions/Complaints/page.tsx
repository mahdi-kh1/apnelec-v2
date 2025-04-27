"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, AlertCircle, ArrowRight, FileText, Mail, Phone } from "lucide-react";

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

const ComplaintsPage: React.FC = () => {
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
          <div className="absolute bottom-[10%] left-[10%] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-700/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Complaints <span className="text-blue-600 dark:text-blue-400">Procedure</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              We value your feedback and are committed to resolving any concerns promptly and efficiently.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Policy Statement Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={fadeInLeft}
              className="md:w-2/3"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Policy Statement
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Whilst APN Elec is committed to providing excellent Customer Service, we are human, and sometimes mistakes are made. If you do have any problems with our work, please do let us know as we aim to resolve any concerns promptly and efficiently. We will also use your feedback to improve our existing procedures.
                </p>
                <p>
                  Our complaints procedure has been set up for people who feel dissatisfied with the service or the work completed. APN Elec have a simple approach for ease of handling complaints. This policy will be reviewed monthly to ensure that necessary improvements to our service are identified and more importantly acted upon.
                </p>
                <p>
                  We aim to make sure that complaints are dealt with promptly, efficiently, courteously and systematically. Customers are kept informed of the progress and resolution of their complaint.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              className="md:w-1/3"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  alt="Complaints"
                  src="/COMPLANTS.svg"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* How to Complain Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/20 to-white/90 dark:from-gray-800/90 dark:via-blue-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-6 mx-auto">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How Can Complaints Be Made?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { text: "By speaking with a member of our team", icon: <Phone className="h-5 w-5" /> },
              { text: "In writing", icon: <FileText className="h-5 w-5" /> },
              { text: "By Email: solar@apnelec.co.uk", icon: <Mail className="h-5 w-5" /> },
              { text: "By completing the complaints form", icon: <FileText className="h-5 w-5" /> }
            ].map((item, index) => (
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
                className="flex items-start bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 max-w-4xl mx-auto"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Check className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>On receiving your complaint,</strong> we will ensure your complaint is registered, acknowledged and responded to in accordance with our complaints handling process below. We will send you a consumer document checklist which will detail the information we require in order to investigate your concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Complaint Handling Process */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
              How We Handle Complaints
            </h2>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
                
                {/* Step 1 */}
                <motion.div
                  variants={fadeInLeft}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center">
                    1
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Initial Investigation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We may request further information to enable us to investigate the concerns which you raised. Please note should this information not be provided, we may be unable to fully investigate your concerns.
                    </p>
                  </div>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div
                  variants={fadeInRight}
                  className="relative pl-16 mt-12"
                >
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center">
                    2
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Complaint Acknowledgement and Response
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      When we receive your complaint it will be recorded on our system and allocated a reference number. You will receive acknowledgement of your complaint within 2 working days in writing or by email (as requested). At this time we may request further information from you to be able to investigate your concerns, once the relevant information has been provided, we will investigate and provide a written response within 14 days stating how we intend to address your concerns.
                    </p>
                  </div>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div
                  variants={fadeInLeft}
                  className="relative pl-16 mt-12"
                >
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center">
                    3
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Complaint Response Appeal
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      If you are not satisfied with the results of our investigation you have the right to appeal our decisions. Your appeal must by lodged within 14 days from our date on the complaint response letter. If it has not been possible to resolve your concerns at this stage, we may escalate your complaint to an Appeal Review. However, should no further information be provided, your complaint will not be escalated, and the decision will remain our final response to the matter.
                    </p>
                  </div>
                </motion.div>
                
                {/* Step 4 */}
                <motion.div
                  variants={fadeInRight}
                  className="relative pl-16 mt-12"
                >
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center">
                    4
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Appeal Review
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      On review of your Complaint Response Appeal, should new information be bought to light, the complaint will be reviewed. You should expect to receive a full response within 14 days, or a letter/email explaining any reason why further time is required to investigate your complaint and details of when you should expect a full response by.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* ADR Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/20 to-white/90 dark:from-gray-800/90 dark:via-blue-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
              Alternative Dispute Resolution (ADR)
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If at any time a dispute cannot be resolved amicably then both parties can refer the matter to an independent conciliation. We must agree to conciliation if that is your wish. The Conciliation Service used is that offered by the Renewable Energy Consumer Code (RECC). It aims to reach a non-legal solution to the dispute in a reasonable timescale.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                For more information on RECC Alternative dispute resolution please visit:
              </p>
              
              <a 
                href="https://www.recc.org.uk/consumers/how-to-complain" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline block mb-6"
              >
                https://www.recc.org.uk/consumers/how-to-complain
              </a>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Details for RECC:
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:disputeresolution@recc.org.uk" className="text-blue-600 dark:text-blue-400 hover:underline">
                      disputeresolution@recc.org.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Telephone:</p>
                    <a href="tel:02079810850" className="text-blue-600 dark:text-blue-400 hover:underline">
                      0207 981 0850
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Address:</p>
                    <address className="not-italic">
                      York House,<br />
                      23 Kingsway,<br />
                      London<br />
                      WC2B 6UJ
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If at any stage of the complaints procedure a settlement is offered, the associated acceptance form must be signed and returned to us without delay. Any offer that has not been accepted will be automatically withdrawn after 6 months.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  All customer complaints are treated in strictest confidence, fairly and comply with the Data Protection Act.
                </p>
              </div>
            </div>
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
                Questions About Our Services?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                If you have any questions or need assistance with our services, our team is ready to help.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-700 hover:bg-blue-50 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComplaintsPage;
