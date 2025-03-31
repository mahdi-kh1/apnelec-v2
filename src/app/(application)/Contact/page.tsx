"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Send
} from "lucide-react";

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission - in a real app, you would send data to server
    setTimeout(() => {
      // Simulate successful submission
      setFormStatus("success");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };
  
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
          <div className="absolute top-[10%] right-[15%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-700/20"></div>
          <div className="absolute bottom-[10%] left-[10%] h-80 w-80 rounded-full bg-green-500/10 blur-3xl dark:bg-green-700/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            variants={fadeInUp} 
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Our team is ready to answer your questions and help you with your electrical,
              solar and EV charging needs. We offer free, no-obligation consultations.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Contact Details Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16">
            {/* Contact Form */}
            <motion.div 
              variants={fadeInLeft}
              className="md:w-7/12 lg:w-8/12"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-10 h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a message
                </h2>
                
                {formStatus === "success" ? (
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 flex items-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-green-800 dark:text-green-300">Message sent successfully!</h3>
                      <p className="text-green-700 dark:text-green-400">Thank you for contacting us. We&apos;ll get back to you as soon as possible.</p>
                    </div>
                  </div>
                ) : formStatus === "error" ? (
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 flex items-center">
                    <AlertCircle className="h-8 w-8 text-red-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-red-800 dark:text-red-300">Something went wrong</h3>
                      <p className="text-red-700 dark:text-red-400">There was an error sending your message. Please try again later.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="07123 456789"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Solar Installation">Solar Installation</option>
                          <option value="EV Charging">EV Charging</option>
                          <option value="Electrical Services">Electrical Services</option>
                          <option value="Quote Request">Quote Request</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                        placeholder="Please provide details about your inquiry or project..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={`w-full md:w-auto px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
                          formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : "transform hover:-translate-y-1"
                        }`}
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              variants={fadeInRight}
              className="md:w-5/12 lg:w-4/12"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-xl shadow-xl p-6 md:p-10 h-full text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="p-3 bg-white/10 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-lg">
                        <a href="tel:07720834012" className="hover:underline">07720 834012</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="p-3 bg-white/10 rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-lg">
                        <a href="mailto:solar@apnelec.co.uk" className="hover:underline">solar@apnelec.co.uk</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="p-3 bg-white/10 rounded-full">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-lg">
                        Brighton & Hove, East Sussex<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="p-3 bg-white/10 rounded-full">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p>
                        Monday-Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/20">
                  <div className="flex justify-between">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184A4.92 4.92 0 0016.5 2.5a4.923 4.923 0 00-4.923 4.923c0 .39.044.765.126 1.124A13.986 13.986 0 011.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Map Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/20 to-white/90 dark:from-gray-800/90 dark:via-blue-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Service Area
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We provide services throughout Brighton & Hove and the surrounding areas in East Sussex.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81532.60570702991!2d-0.19764079628908794!3d50.83284072217396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509f6294167%3A0x9cc6af7a727d0ef9!2sBrighton%2C%20UK!5e0!3m2!1sen!2sus!4v1644943241211!5m2!1sen!2sus" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
