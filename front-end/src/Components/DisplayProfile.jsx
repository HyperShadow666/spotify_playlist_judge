import React from 'react'
import NavBar from './NavBar'
import { assets } from '../assets/assets'

const DisplayProfile = () => {
  const handleRedirectLinkedin = () => {
    window.open('https://www.linkedin.com/in/chadi-mountassir/', '_blank');
  };
  const handleRedirectSpotify = () => {
    window.open('https://open.spotify.com/user/pimouuu?si=ff12ea7082744a9d', '_blank');
  };
  const handleRedirectgithub = () => {
    window.open('https://github.com/HyperShadow666', '_blank');
  };
    
  return (
    <div className='mt-5 ml-5 flex gap-8 flex-col md:flex-row md:items-end' >
                  
                        <img className='w-48 rounded-full shadow-2xl' src={assets.profile} alt="" />
                        <div className='flex flex-col x'>
                            
                            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>Chadi MOUNTASSIR</h2>
                            <h4>Data Engineering Student</h4>
                            <p className='mt-1'>
                                
                                <b>Data Engineering </b>
                                <b>• Data Science </b>
                                <b>• BI analytics</b>
                               
                            </p>
                            <div className='flex'>

                            <img className='w-5 h-5 mt-2 cursor-pointer' onClick={handleRedirectLinkedin} src={assets.linkedin} alt="" />
                            <img className='w-5 m-2 cursor-pointer' onClick={handleRedirectgithub} src={assets.github} alt="" />
                            <img className='w-5 h-5 mt-2 cursor-pointer' onClick={handleRedirectSpotify} src={assets.spotify_logo} alt="" />
                            </div>
                        </div>
                    </div>
  )
}

export default DisplayProfile