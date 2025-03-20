import React from 'react'
import RadarChart from './RadarChart'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';

const RightBar = () => {
  const handleClick = () => {
    window.location.href = '/about'; // Navigate to the home page
  };

  



  return (
    <div className='md:w-[20%] h-full p-2 flex-col gap-2 text-white  lg:flex bg-black overflow-auto'>
      <div className= {location.pathname === '/about' ? 'bg-[#121212] h-[50%] rounded flex flex-col justify-around': 'bg-[#121212] h-[0%] rounded flex flex-col justify-around'}>

        

        {location.pathname === '/about' ? (
          <RadarChart />
        ) : (
        //    <div className='bg-[#121212] m-1'>

        // </div> 
          ``
        )}
      </div>


      <div className={location.pathname === '/about' ? "relative bg-[#121212] h-full" : 'bg-[#121212] h-[0%] rounded flex flex-col justify-around'}>
        <div className="relative bg-[#1f1f1f] rounded-lg m-1">
          <img className="w-full object-cover filter brightness-50 rounded" src={assets.profile_abt} alt="" />
          <b className="absolute top-2 left-2 text-gray-200 ">
            about the artist
          </b>
          <br />
          <div className='flex justify-between'>

            <b onClick={handleClick} className='m-2 hover:border-b-2 cursor-pointer'> Chadi MOUNTASSIR</b>
            
          </div>
          <p className='text-white mt-4 ml-2 mr-2'>I love My family, friends, Computers and Hatsune Miku</p>
          <br />
        </div>
      </div>

    </div>
  )
}

export default RightBar