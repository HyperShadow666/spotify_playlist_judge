import React from 'react'
import NavBar from './NavBar'
import { assets } from '../assets/assets'


const DisplayBot = () => {
    
    
  return (
    <div className='mt-10 ml-5 flex gap-8 flex-col md:flex-row md:items-end' >
                        <img className='w-48 rounded shadow-2xl' src={assets.your_library} alt="" />
                        <div className='flex flex-col x'>
                            
                            <h4>This is</h4>
                            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>Your Library</h2>
                            <b className='text-gray-500'>Analysing And Roasing your main Playlists</b>
                        </div>
                    </div>
  )
}

export default DisplayBot