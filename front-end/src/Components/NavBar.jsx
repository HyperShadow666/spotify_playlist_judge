import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const handleClick = () => {
    window.location.href = '/'; // Navigate to the home page
  };

  // const navigate = useNavigate()

  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow-md  flex justify-center bg-black ">
        <div className='bg-[#212121] rounded-full min-h-14 min-w-14 h-10 p-2 mt-2 hover:bg-[#ffffff26] cursor-pointer' >
          <img onClick={handleClick} className=' h-full w-full' src={assets.home_icon} alt="" />
      </div>
    </nav>
    </>
  )
}

export default NavBar