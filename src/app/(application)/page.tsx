"use client"
import HeroSlider from './components/HeroSlider'
import Licences from './components/Licences'
import ServicesSection from './components/ServicesSection'
import SolarInstaller from './components/SolarInstaller'
import TestimonialsSection from './components/TestimonialsSection'
import FeaturedBlogs from '@/app/(application)/components/home/FeaturedBlogs'
import { ArrowRight, CheckCircle, Sun, Battery, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogsRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const whyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const blogsInView = useInView(blogsRef, { once: true, margin: "-100px" });

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -150]);
  const rotation = useTransform(scrollY, [0, 1000], [0, 3]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.9, 0.8]);

  // Smooth spring animation for parallax
  const smoothY1 = useSpring(y1, { stiffness: 70, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 50, damping: 25 });
  const smoothRotation = useSpring(rotation, { stiffness: 40, damping: 20 });

  return (
    <div className='relative overflow-hidden'>
      {/* Blurred texture backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Light mode textures - Enhanced with more elements and higher opacity */}
        <div className="absolute inset-0 opacity-30 dark:opacity-0 mix-blend-soft-light transition-opacity duration-1000">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-blue-200 to-purple-200 blur-[100px]"></div>
          <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-green-200 to-yellow-200 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-gradient-to-r from-pink-200 to-blue-200 blur-[100px]"></div>
          
          {/* Additional light mode elements */}
          <div className="absolute top-[15%] left-[40%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-blue-300 to-cyan-200 blur-[80px]"></div>
          <div className="absolute top-[60%] right-[30%] w-[35%] h-[35%] rounded-full bg-gradient-to-r from-green-300 to-teal-200 blur-[90px]"></div>
          <div className="absolute bottom-[40%] left-[5%] w-[25%] h-[25%] rounded-full bg-gradient-to-r from-indigo-200 to-blue-300 blur-[70px]"></div>
                  </div>
        
        {/* Dark mode textures */}
        <div className="absolute inset-0 opacity-0 dark:opacity-20 mix-blend-soft-light transition-opacity duration-1000">
          <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-[120px]"></div>
          <div className="absolute top-[25%] right-[-15%] w-[45%] h-[45%] rounded-full bg-gradient-to-r from-green-500 to-teal-600 blur-[150px]"></div>
          <div className="absolute bottom-[-20%] left-[10%] w-[70%] h-[50%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 blur-[130px]"></div>
        </div>
          </div>
          
      <HeroSlider />

      <motion.section
        ref={whyChooseRef}
        initial="hidden"
        animate={whyChooseInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-blue-50/30 to-gray-100/90 dark:from-gray-800/90 dark:via-blue-900/20 dark:to-gray-800/90 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Why Choose APN Elec?
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional service and quality workmanship
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              {
                title: "Local Expertise",
                description: "Based in Brighton & Hove, we understand the local area and provide personalized service to every client."
              },
              {
                title: "Quality Guaranteed",
                description: "We use only premium equipment and materials, backed by comprehensive warranties and guarantees."
              },
              {
                title: "Certified Professionals",
                description: "Our team holds all relevant certifications and accreditations for solar, electrical, and EV charging work."
              },
              {
                title: "End-to-End Service",
                description: "From initial consultation to final handover, we manage every aspect of your project with care."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-500"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-300 font-bold text-xl md:text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-white/90 via-indigo-50/30 to-gray-50/90 dark:from-gray-900/90 dark:via-indigo-900/20 dark:to-gray-800/90 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Our Key Services
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive electrical and renewable energy solutions for homes and businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                icon: <Sun className="h-8 w-8 md:h-12 md:w-12 text-yellow-500" />,
                title: "Solar PV Installation",
                description: "Professional installation of high-quality solar panels to generate clean, renewable electricity for your property.",
                link: "/Solar-solutions",
                color: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20"
              },
              {
                icon: <Battery className="h-8 w-8 md:h-12 md:w-12 text-green-500" />,
                title: "Battery Storage",
                description: "Store excess solar energy for use when you need it, maximizing your energy independence and savings.",
                link: "/Solar-solutions#battery",
                color: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
              },
              {
                icon: <Zap className="h-8 w-8 md:h-12 md:w-12 text-blue-500" />,
                title: "EV Charging Points",
                description: "OZEV-approved installation of electric vehicle charging points for homes and workplaces.",
                link: "/EV-solutions",
                color: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative p-6 md:p-10 h-full flex flex-col">
                  <div className="bg-white dark:bg-gray-800 p-3 md:p-5 rounded-2xl w-fit mb-5 md:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-6 md:mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-base md:text-lg text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-green-50/20 to-white/90 dark:from-gray-800/90 dark:via-green-900/10 dark:to-gray-900/90 backdrop-blur-sm overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={fadeInUp}
              className="md:w-1/2 relative z-10 px-2"
            >
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8 leading-tight"
              >
                Your Trusted Partner for Electrical & Solar Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed"
              >
                APN Elec is a local, independent business specializing in solar PV installation,
                battery storage, and comprehensive electrical services.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.6
                    }
                  }
                }}
                className="space-y-4 md:space-y-6"
              >
                {[
                  "MCS Accredited Solar Installers",
                  "OZEV Authorized for EV Charging Points",
                  "NAPIT Registered Electricians",
                  "Fully Insured with £5M Public Liability"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          duration: 0.6,
                          ease: "easeOut"
                        }
                      }
                    }}
                    className="flex items-center transform hover:translate-x-3 transition-transform duration-500"
                  >
                    <div className="relative flex-shrink-0 w-6 h-6 md:w-7 md:h-7 mr-3 md:mr-4">
                      <div className="absolute inset-0 bg-green-500 dark:bg-green-400 rounded-full opacity-20"></div>
                      <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-green-600 dark:text-green-400 relative z-10" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="mt-8 md:mt-12"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base md:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 relative mt-8 md:mt-0 w-full max-w-[500px] mx-auto"
            >
              <div className="relative pt-[20px] md:pt-[120px]">
                <motion.div
                  style={{ 
                    y: smoothY1,
                    rotate: smoothRotation,
                    scale: scale
                  }}
                  className="relative h-[280px] sm:h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700"
                >
                  <Image
                    src="/about/about-apnelec-amir.jpg"
                    alt="Solar Panel Installation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                
                <motion.div
                  style={{ y: smoothY2 }}
                  className="absolute bottom-[10px] right-[10px] md:right-auto md:left-[-20px] max-w-[260px] md:max-w-[400px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl bg-opacity-90 dark:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 md:p-4 rounded-full flex-shrink-0">
                      <Sun className="h-5 w-5 md:h-10 md:w-10 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3 md:ml-6">
                      <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">Reduce your carbon footprint</p>
                      <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Save up to 70% on energy bills</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          </div>
          
        {/* Additional section-specific background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[20%] left-[10%] w-[25%] h-[25%] rounded-full bg-blue-200/30 dark:bg-blue-800/10 blur-[80px]"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[30%] h-[30%] rounded-full bg-green-200/30 dark:bg-green-800/10 blur-[100px]"></div>
        </div>
      </motion.section>

      <motion.section
        ref={blogsRef}
        initial="hidden"
        animate={blogsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-blue-50/80 via-white/80 to-gray-50/80 dark:from-blue-900/30 dark:via-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover insights, tutorials, and updates about solar energy and electrical services
            </p>
          </motion.div>
          
          <FeaturedBlogs />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        {/* Fancy gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-800"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-300/10 blur-[60px] mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-[10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-300/10 blur-[70px] mix-blend-overlay"></div>
          <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] rounded-full bg-indigo-300/20 dark:bg-indigo-200/10 blur-[50px] mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight"
          >
            Ready to Transform Your Energy Future?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-2xl text-blue-50 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Contact us today for a free consultation and quote on your solar, electrical, or EV charging project.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            <Link 
              href="/contact" 
              className="px-6 py-3 md:px-10 md:py-5 bg-white text-indigo-600 hover:bg-blue-50 rounded-lg text-base md:text-xl font-bold transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 md:px-10 md:py-5 border-2 border-white text-white hover:bg-white/10 rounded-lg text-base md:text-xl font-bold transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      <Licences />
    </div>
  )
}