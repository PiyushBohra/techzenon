import React from 'react'
import './home.css'
import Hero from '../../components/Hero/hero'
import Partners from '../../components/Partners/partners'
import About from '../../components/About/about'
import Services from '../../components/Services/servicecards'
import Testimonials from '../../components/Testimonials/testimonials'
import Industries from '../../components/Industries/IndustriesWeServe'
import Techcapabilities from '../../components/Techcapabilites/TechCapabilities'
import ClientReviews from '../../components/Clientreviews/ClientReviews'
import Portfolio from '../../components/Portfolio/Portfolio'
import Clientsection from '../../components/Clientsection/ClientSection'
import Contactcard from '../../components/Contactcard/contactcard'


const home = () => {
  return (
    <>
    <Hero/>
    <Partners/>
    <About/>
    <Services/>
    <Testimonials/>
    <Industries/>
    <Techcapabilities/>
    <ClientReviews/>
    <Portfolio/>
    <Clientsection/>
    <Contactcard/>
    
    </>
  )
}

export default home