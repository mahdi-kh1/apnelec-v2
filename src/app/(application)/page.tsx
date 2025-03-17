"use client"
import HeroSlider from './components/HeroSlider'
import Licences from './components/Licences'
import ServicesSection from './components/ServicesSection'
import SolarInstaller from './components/SolarInstaller'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <div className='relative -mt-24'>
      <HeroSlider />
      <SolarInstaller />
      <ServicesSection />
      <TestimonialsSection />
      <Licences />
    </div>
  )
}