import React from 'react'
import ContactBanner from './ContactBanner'
import ContactSection from './Form'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FAQ from '../about-us/FAQ'
import BrandMarquee from '../home/Brandmarquee'

function page() {
  return (
    <div>
      <Navbar/>
      <ContactBanner/>
      <ContactSection/>
      <FAQ/>
      <BrandMarquee/>
      <Footer/>
    </div>
  )
}

export default page
