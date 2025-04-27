"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleCheck, Sun, Battery, ArrowRight, Info, Zap } from 'lucide-react';

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

const AboutSolarPage: React.FC = () => {
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
          <div className="absolute top-[10%] right-[15%] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl dark:bg-yellow-700/20"></div>
          <div className="absolute bottom-[10%] left-[10%] h-80 w-80 rounded-full bg-green-500/10 blur-3xl dark:bg-green-700/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              About <span className="text-yellow-600 dark:text-yellow-500">Solar Energy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Understanding solar energy technology and its benefits for your home and the environment.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* What is Solar Energy Section */}
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
              className="md:w-1/3"
            >
              <div className="relative">
                <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-xl bg-yellow-200 dark:bg-yellow-900/30"></div>
                <Image
                  alt="Amir from APN Elec"
                  src="/amir-apnelec.jpg"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-xl object-cover relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              className="md:w-2/3"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 mb-4">
                <Sun className="h-6 w-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What is Solar Energy?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  The world needs to transition to clean energy in order to avoid
                  global heating and climate change. Solar PV will contribute to the
                  UK&apos;s climate change objectives and help us reduce our dependence
                  on fossil fuels.
                </p>
                <p>
                  Solar energy technologies convert sunlight into energy. This is
                  converted to electricity in the case of solar PV.
                </p>
              </div>
              
              <div className="mt-10">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  How Does Solar PV Work?
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Solar PV is a method of generating electric power by using solar
                  cells to convert energy from the sun by photovoltaic effect. These
                  solar cells are assembled into solar panels and then installed on
                  rooftops (flat or pitched) or on the ground. When the sunlight
                  shines on the panels, it creates an electric field across the
                  layers. The stronger the sunshine the more electricity is
                  produced. The cells don&apos;t need direct sunlight to work and can
                  even work on cloudy days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Is Solar Right for Me Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-yellow-50/20 to-white/90 dark:from-gray-800/90 dark:via-yellow-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 mb-6 mx-auto">
              <Info className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Are Solar Panels Right for Me?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Space Requirements
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The key thing to consider is how much space you have. For instance to
                create 3.5kWp will typically take up around 20m² roof area.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">
                Roof Direction
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                An unshaded, South facing roof is ideal for solar PV. East - West
                facing roofs can also be considered, a system facing East or West will
                yield around 15-20% less energy than one facing directly South. North
                facing roofs are not recommended.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Shading Considerations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Any nearby buildings, trees or chimneys could shade your roof and have
                a negative impact on the performance of your system.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">
                Optimization Solutions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Some solar PV systems can minimise the impact of shading with the use
                of &apos;optimisers&apos;. If you don&apos;t have shading, the use of optimisers is
                not necessary or beneficial, other than the increased monitoring
                opportunities they offer – they won&apos;t generate more energy.
              </p>
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
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={fadeInLeft}
              className="md:w-1/3"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  alt="Installing solar panels"
                  src="/screwing-panels-from-front.jpg"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              className="md:w-2/3"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-4">
                <CircleCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What Are the Benefits of Solar PV?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Cut your electricity bills.",
                  "Reduce your carbon footprint.",
                  "Receive a small revenue for extra energy sold to the grid.",
                  "Increase the value of your home."
                ].map((benefit, index) => (
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
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center">
                        <CircleCheck className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Do I Need Permission to Install Solar PV?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Solar PV systems usually don&apos;t require planning permission in the
                  UK. They are considered &apos;permitted developments&apos;. There are some
                  exceptions such as if you live in a listed building, conservation
                  area or national park. It is advisable to check with your local
                  authority.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  If you install more than 3.5kW you must obtain prior permission with
                  your Distribution Network Operator (DNO). If installing less than
                  3.5kW you need to register with the DNO within 28 days of
                  commissioning. The DNO is the company responsible for bringing
                  electricity to your home. We will do all this for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Battery Storage and Energy Calculator Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50/90 via-yellow-50/20 to-white/90 dark:from-gray-800/90 dark:via-yellow-900/10 dark:to-gray-900/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              variants={fadeInLeft}
              className="md:w-2/3"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                <Battery className="h-6 w-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Battery Storage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                A battery storage unit helps you make the most of the electricity
                generated with any excess being stored for future use. Most homes
                use a fraction of the solar energy they generate and a battery
                stores energy generated when the sun is at its strongest for use in
                the evening and overnight.
              </p>
              
              <Link
                href="/solar-solutions/solar-energy-calculator"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Check how many kilowatts your home can produce
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              className="md:w-1/3"
            >
              <Link
                href="/solar-solutions/solar-energy-calculator"
                className="block relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.03]"
              >
                <Image
                  alt="UK Solar Map"
                  src="/Maps-UK.png"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">UK Solar Potential Map</h3>
                    <p className="text-white/80">See your area&apos;s potential</p>
                  </div>
                </div>
              </Link>
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
                Ready to Harness Solar Power?
              </h2>
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
                Contact APN Elec today for a free consultation and quote. Our experts will help determine the perfect solar solution for your home.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-yellow-600 hover:bg-yellow-50 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get a free quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSolarPage;
