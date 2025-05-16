import React from 'react'
import Action from '../assets/Action.png'
import Adventure from '../assets/Adventure.png'
import Comedy from '../assets/Comedy.png'
import Drama from '../assets/Drama.png'
import Horror from '../assets/Horror.png'

const SectionTwo = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center h-[95vh] bg-[#141414]'>
        <div>
            <h1 className='text-white text-[30px] font-medium w-[65rem]'>Explore our wide variety of categories</h1>
            <p className='text-[#ffffff70] text-[14px] w-[65rem]'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
        </div>
        <div className='flex gap-4'>
            <div className='bg-[#1b1b1b] h-55 w-49 flex flex-col justify-center items-center rounded-lg border-[#2b2b2b] border-1'>
                <img src={Action} alt="Action" className='w-40 h-40'/>
                <div className='flex items-center gap-24'>
                    <p className='text-white text-[14px]'>Action</p>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"/><path fill="#fff" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"/></svg>
                </div>
            </div>
            <div className='bg-[#1b1b1b] h-55 w-49 flex flex-col justify-center items-center rounded-lg border-[#2b2b2b] border-1'>
                <img src={Adventure} alt="Adventure" className='w-40 h-40'/>
                <div className='flex items-center gap-24'>
                    <p className='text-white text-[14px]'>Adventure</p>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"/><path fill="#fff" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"/></svg>
                </div>
            </div>
            <div className='bg-[#1b1b1b] h-55 w-49 flex flex-col justify-center items-center rounded-lg border-[#2b2b2b] border-1'>
                <img src={Comedy} alt="Comedy" className='w-40 h-40'/>
                <div className='flex items-center gap-24'>
                    <p className='text-white text-[14px]'>Comedy</p>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"/><path fill="#fff" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"/></svg>
                </div>
            </div>
            <div className='bg-[#1b1b1b] h-55 w-49 flex flex-col justify-center items-center rounded-lg border-[#2b2b2b] border-1'>
                <img src={Drama} alt="Drama" className='w-40 h-40'/>
                <div className='flex items-center gap-24'>
                    <p className='text-white text-[14px]'>Drama</p>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"/><path fill="#fff" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"/></svg>
                </div>
            </div>
            <div className='bg-[#1b1b1b] h-55 w-49 flex flex-col justify-center items-center rounded-lg border-[#2b2b2b] border-1'>
                <img src={Horror} alt="Horror" className='w-40 h-40'/>
                <div className='flex items-center gap-24'>
                    <p className='text-white text-[14px]'>Horror</p>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"/><path fill="#fff" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo