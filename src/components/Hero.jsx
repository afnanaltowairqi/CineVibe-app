import React from 'react'
import HeroImg from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='bg-[#000000] bg-cover bg-center flex items-center justify-center'>
        <img src={HeroImg} alt="HeroImg" />
    </div>
  )
}

export default Hero