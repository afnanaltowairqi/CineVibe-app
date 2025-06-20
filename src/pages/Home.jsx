import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </div>
  )
}

export default Home