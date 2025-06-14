import React from 'react'

const NewsLetter = () => {
  return (
    <div>
      <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 sm:flex sm:justify-between p-5 md:flex-col'>
            <div className=''>
                <h1 className='md:text-4xl sm:text-3xl text-2xl'>Want tips and trick to optimize your flow?</h1>
                <p className='lg:col-span-2'>Sign Up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4 sm:my-[-29px]'>
                <div className='flex flex-col  items-center justify-between w-full gap-4 sm:items-end'>
                    <div className='flex items-center justify-center flex-col gap-7'>
                        <input type="text"
                    placeholder='Enter Email' className='p-2 rounded bg-gray-100 text-black '/>
                    
                    <button className='text-black bg-[#00df9a] px-5 rounded-lg py-2'>
                        Notify Me
                    </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
