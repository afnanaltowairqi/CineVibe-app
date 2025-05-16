import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SectionOne />
        <SectionTwo />
    </div>
  )
}

export default Home