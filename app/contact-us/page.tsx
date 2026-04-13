import React from 'react'
import ContactBanner from './ContactBanner'
import ContactSection from './Form'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div>
      <Navbar/>
      <ContactBanner/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page
