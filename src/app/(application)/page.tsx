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

export default function Home() {
  return (
    <div className='relative -mt-24'>
      <HeroSlider />
      
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your Trusted Partner for Electrical & Solar Solutions
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                APN Elec is a local, independent business specializing in solar PV installation, 
                battery storage, and comprehensive electrical services for both residential and 
                commercial properties.
              </p>
              <div className="space-y-4">
                {[
                  "MCS Accredited Solar Installers",
                  "OZEV Authorized for EV Charging Points",
                  "NAPIT Registered Electricians",
                  "Fully Insured with £5M Public Liability"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-gray-800 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  href="/Contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/solar-installation.jpg" 
                  alt="Solar Panel Installation" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <Sun className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Reduce your carbon footprint</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">Save up to 70% on energy bills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Key Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive electrical and renewable energy solutions for homes and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="h-10 w-10 text-yellow-500" />,
                title: "Solar PV Installation",
                description: "Professional installation of high-quality solar panels to generate clean, renewable electricity for your property.",
                link: "/Solar-solutions",
                color: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20"
              },
              {
                icon: <Battery className="h-10 w-10 text-green-500" />,
                title: "Battery Storage",
                description: "Store excess solar energy for use when you need it, maximizing your energy independence and savings.",
                link: "/Solar-solutions#battery",
                color: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
              },
              {
                icon: <Zap className="h-10 w-10 text-blue-500" />,
                title: "EV Charging Points",
                description: "OZEV-approved installation of electric vehicle charging points for homes and workplaces.",
                link: "/EV-solutions",
                color: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-full w-fit mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white rounded-md transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose APN Elec?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional service and quality workmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-300 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <TestimonialsSection />
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover insights, tutorials, and updates about solar energy and electrical services
            </p>
          </div>
          
          <FeaturedBlogs />
          
          <div className="text-center mt-12">
            <Link 
              href="/Blog" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              View all posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your solar, electrical, or EV charging project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/Contact" 
              className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-md font-bold transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/About" 
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-md font-bold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <Licences />
    </div>
  )
}