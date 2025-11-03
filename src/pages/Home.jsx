import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import LogoSection from '../components/LogoSection'
import Services from '../components/Services'
import OurProduct from '../components/OurProduct'
import Whyus from '../components/Whyus'

const Home = () => {
  return (
    <>
      {/* <Hero1/> */}
      <Hero/>
      <About/>
      <LogoSection/>
      <Services/>
      <OurProduct/>
      <Whyus/>
    </>
  )
}

export default Home
