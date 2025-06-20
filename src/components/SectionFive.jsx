import React from 'react'

const SectionFive = () => {
  return (
    <>
    <div className='flex flex-col gap-10 items-center justify-center h-[85vh] bg-[#141414]'>
        <div className='flex flex-col w-[65rem]'>
            <h1 className='text-white text-[30px] font-medium w-[65rem]'>Choose the plan that's right for you</h1>
            <div className='flex items-end justify-between'>
                <p className='text-[#999999] text-[13px] w-[55rem]'>Join CineVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                <button className='flex justify-center items-center p-3 h-10 rounded-md cursor-pointer bg-[#E50000] hover:bg-[#fa1717] duration-[.3s]'>
                    <p className='text-white text-[14px]'> Ask a Question</p>      
                </button>
            </div>               
        </div>
    </div>
    </>
  )
}

export default SectionFive