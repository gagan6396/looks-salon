import React from 'react'
import Navbar from '../components/Navbar'
import ServicesBanner from './ServicesBanner'
import SalonServices from './SalonServices'
import BrandMarquee from '../home/Brandmarquee'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <ServicesBanner/>
      <SalonServices/>
      <BrandMarquee/>
      <Footer/>
    </div>
  )
}

export default page
