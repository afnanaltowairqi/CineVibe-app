import React from 'react'
import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-transparent text-gray-500 p-4'>
        <div className="container mx-auto flex justify-between items-center">
          {/* <img src={Logo} alt="Logo" className='w-26 h-26 border-2'/> */}
          <div></div>
          <ul className="flex space-x-2 p-4 bg-[#0c0c0c] border-3 rounded-xl border-[#202020]">
            <li><a href="#home" className='text-[#ffffff9a] hover:text-white hover:bg-[#202020] rounded-sm cursor-pointer p-2 duration-[.4s]'>Home</a></li>
            <li><a href="#about" className='text-[#ffffff9a] hover:text-white hover:bg-[#202020] rounded-sm cursor-pointer p-2 duration-[.4s]'>Movies & Shows</a></li>
            <li><a href="#about" className='text-[#ffffff9a] hover:text-white hover:bg-[#202020] rounded-sm cursor-pointer p-2 duration-[.4s]'>Support</a></li>
            <li><a href="#about" className='text-[#ffffff9a] hover:text-white hover:bg-[#202020] rounded-sm cursor-pointer p-2 duration-[.4s]'>Subscriptions</a></li>
          </ul>
          <div></div>
      </div>
    </div>
  )
}

export default Navbar