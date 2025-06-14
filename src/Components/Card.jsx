import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Card = () => {
  return (
    <div  className='w-full py-[10rem] bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
        <div className='w-full text-black shadow-xl flex flex-col rounded-lg my-4 p-4 hover:scale-105 duration-200 bg-gray-50'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
            <p className='text-black mx-auto text-2xl font-bold my-6 text-center'>Single User</p>
            <p className='text-4xl font-bold text-center'>$149</p>
            <div>
                <p className='py-2 border-b mx-8 mt-5'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 mt-5'>1 Granted User</p>
                <p className='py-2 border-b mx-8 mt-5'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'> Start Trail</button>
        </div>


        <div className='w-full text-black shadow-xl flex flex-col rounded-lg my-4 p-4 hover:scale-105 duration-200 bg-gray-50'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="" />
            <p className='text-black mx-auto text-2xl font-bold my-6 text-center'>Double User</p>
            <p className='text-4xl font-bold text-center'>$149</p>
            <div>
                <p className='py-2 border-b mx-8 mt-5'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 mt-5'>1 Granted User</p>
                <p className='py-2 border-b mx-8 mt-5'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'> Start Trail</button>
        </div>


        <div className='w-full text-black shadow-xl flex flex-col rounded-lg my-4 p-4 hover:scale-105 duration-200 touch-auto bg-gray-50'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
            <p className='text-black mx-auto text-2xl font-bold my-6 text-center'>Triple User</p>
            <p className='text-4xl font-bold text-center'>$149</p>
            <div>
                <p className='py-2 border-b mx-8 mt-5'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 mt-5'>1 Granted User</p>
                <p className='py-2 border-b mx-8 mt-5'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'> Start Trail</button>
        </div>
      </div>
    </div>
  )
}

export default Card
