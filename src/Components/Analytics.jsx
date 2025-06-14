import React from 'react'
import image from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 text-black'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className='w-[500px] mx-auto my-4' src={image} alt="" />
        <div className='flex flex-col md:items-start sm:items-start items-center justify-center'>
            <p className='text-[#00df9a] font-bold '>DATA ANALTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas, voluptate culpa eos voluptatum aut ducimus placeat, nesciunt architecto sit, amet officiis vitae praesentium.
            </p>
            <button className="bg-[#111] w-[200px] rounded-md py-3 text-[#00df9a] mt-5">
            Get Started
        </button>
        </div>
       </div>
    </div>
  )
}

export default Analytics
