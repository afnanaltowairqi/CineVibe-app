import React from 'react'

const SectionFour = () => {
  return (
    <>
        <div className='flex flex-col gap-10 items-center justify-center h-[95vh] bg-[#141414]'>
            <div className='flex flex-col w-[65rem]'>
                <h1 className='text-white text-[30px] font-medium w-[65rem]'>Frequently Asked Questions</h1>
                <div className='flex items-end justify-between'>
                    <p className='text-[#999999] text-[14px] w-[55rem]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                    <button className='flex justify-center items-center p-3 h-10 rounded-md cursor-pointer bg-[#E50000] hover:bg-[#fa1717] duration-[.3s]'>
                        <p className='text-white text-[14px]'> Ask a Question</p>      
                    </button>
                </div>               
            </div>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-2'>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <h1 className="collapse-title font-medium text-white">What is CineVibe?</h1>
                        <p className="collapse-content text-sm text-[#999999]">StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                    </div>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-medium text-white">How much does CineVibe cost?</div>
                        <div className="collapse-content text-sm text-[#999999]">....</div>
                    </div>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-medium text-white">What content is available on CineVibe?</div>
                        <div className="collapse-content text-sm text-[#999999]">....</div>
                    </div>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-medium text-white">How can I watch CineVibe?</div>
                        <div className="collapse-content text-sm text-[#999999]">.....</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-medium text-white">How do I sign up for CineVibe?</div>
                        <div className="collapse-content text-sm text-[#999999]">.....</div>
                    </div>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-medium text-white">What is the CineVibe free trial?</div>
                        <div className="collapse-content text-sm text-[#999999]">....</div>
                    </div>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-medium text-white">How do I contact CineVibe customer support?</div>
                        <div className="collapse-content text-sm text-[#999999]">....</div>
                    </div>
                    <div className="w-[30rem] collapse collapse-plus bg-[#141414] border-b-2 border-[#680b0bd7] rounded-none">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-medium text-white">What are the CineVibe payment methods?</div>
                        <div className="collapse-content text-sm text-[#999999]">...</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionFour