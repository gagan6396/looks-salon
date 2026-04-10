import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from './HeroSlider'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ParallaxHero from './ParallaxSection'
import BrandMarquee from './Brandmarquee'
import GridGallery from './GalleryGrid'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <AboutSection/>
      <ServicesSection/>
      <ParallaxHero/>
      <BrandMarquee/>
      <GridGallery/>
    </div>
  )
}

export default page
