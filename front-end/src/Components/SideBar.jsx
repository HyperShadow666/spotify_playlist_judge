import React from 'react'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='hidden md:w-[5%] h-full p-2 flex-col gap-2 text-white  lg:flex bg-black'>
        <div className='bg-[#121212] rounded flex flex-col justify-between'>
            <img src={assets.home_icon} className='flex justify-center m-3 h-fit' alt="" />
        </div>
        <div className='bg-[#121212] rounded flex flex-col justify-between'>
            <img src={assets.home_icon} className='flex justify-center m-3 h-fit' alt="" />
        </div>
        <div className='bg-[#121212] h-screen rounded flex flex-col justify-around'>
        
        
        </div>
    </div>
  )
}

export default SideBar