import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from './HeroSlider'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ParallaxHero from './ParallaxSection'
import BrandMarquee from './Brandmarquee'
import GridGallery from './GalleryGrid'
import OurStory from './Ourstory'
import Footer from '../components/Footer'
import Testimonials from './Testimonial'

function page() {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <AboutSection/>
      <OurStory/>
      <ServicesSection/>
      <ParallaxHero/>
      <BrandMarquee/>
      <Testimonials/>
      <GridGallery/>
      <Footer/>
    </div>
  )
}

export default page
