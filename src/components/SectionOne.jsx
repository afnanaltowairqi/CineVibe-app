import React from 'react'

const SectionOne = () => {
  return (
    <div className='flex flex-col gap-4 items-center bg-[#141414]'>
        <h1 className='text-white text-[46px] font-medium'>The Best Streaming Experience</h1>
        <p className='text-[#ffffff70] text-center text-[14px] w-[51rem]'>CineVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With CineVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <button className='flex justify-center items-center gap-1 p-3 h-11 rounded-md cursor-pointer bg-[#E50000] hover:bg-[#fa1717] duration-[.3s]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#fff" d="m16.75 8.412l24.417 12.705a3.25 3.25 0 0 1 0 5.766L16.75 39.588A3.25 3.25 0 0 1 12 36.705v-25.41a3.25 3.25 0 0 1 4.549-2.98z"/></svg>
            <p className='text-white text-[14px]'> Start Watching Now</p>      
        </button>
    </div>
  )
}

export default SectionOne