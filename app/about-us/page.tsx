"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import SalonBanner from './Banner'
import AboutAcademy from './AboutSection'
import MissionVision from './MissionVision'
import Footer from '../components/Footer'
import Facilities from './Facilities'
import FAQ from './FAQ'
import BrandMarquee from '../home/Brandmarquee'
import ParallaxHero from './AboutParallax'

function page() {
  return (
    <div>
      <Navbar/>
      <SalonBanner/>
      <AboutAcademy/>
      <MissionVision/>
      <Facilities/>
      <FAQ/>
      <ParallaxHero/>
      <BrandMarquee/>
      <Footer/>
    </div>
  )
}

export default page
