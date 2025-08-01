import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import LogoSection from '../components/LogoSection'
import Services from '../components/Services'
import CaseStudy from '../components/CaseStudy'
import OurProduct from '../components/OurProduct'
import ContactSupport from '../components/ContactSupport'
import Hero1 from '../components/Hero1'

const Home = () => {
  return (
    <>
      {/* <Hero1/> */}
      <Hero/>
      <About/>
      <LogoSection/>
      <Services/>
      <CaseStudy/>
      <OurProduct/>
      <ContactSupport/>
    </>
  )
}

export default Home
