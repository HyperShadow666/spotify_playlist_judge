import React from 'react'
import DisplayProfile from './DisplayProfile'
import { assets } from '../assets/assets'
import OverviewTab from './OverviewTab'
import ProjectsTab from './ProjectsTab'
import { useNavigate } from 'react-router-dom'
import { ResponseProvider } from "../context/DataContext";
const Display = () => {

    const BACKGROUND_COLOR = "#45736A"

    const handleClick = () => {
        window.location.href = '/'; // Navigate to the home page
      };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1WFQJT-uNSdnY0Hr3zPcIepScFQGTlkVC/view?usp=sharing';  // Replace with your file path
        link.download = 'Chadi MOUNTASSIR.pdf';  // You can set the name of the file here
        link.click();
    };
    const handleEmailClick = () => {
        window.location.href = "mailto:chadimountassir@gmail.com";
      };

    // const nav = useNavigate()
    return (
        <>

            <div className='w-[100%] md:w-[80%]  h-full p-2 flex-col gap-2 text-white  lg:flex bg-[#121212]'>
                <div className='h-screen rounded flex flex-col  justify-start overflow-auto'>
                    <div className='min-h-80' style={{ background: `linear-gradient(${BACKGROUND_COLOR} 0.01%, #121212) ` }}>
                    <div className='bg-[#121212] rounded-full h-10 w-10  p-2 m-5 hover:bg-[#ffffff26] cursor-pointer' >
                              <img onClick={handleClick} className=' h-full w-full' src={assets.home_icon} alt="" />
                          </div>

                        <DisplayProfile />

                        <br />
                    </div>
                    <div className=' mt-10 ml-5 mr-5 h-20 w-20  bg flex' >
                        <img onClick={handleDownload} src={assets.download} className='w-15 cursor-pointer mr-4' alt="" />
                        <img onClick={handleEmailClick} src={assets.email} className='h-15 backdrop:w-15 cursor-pointer' alt="" />
                    </div>
                    <hr className='m-5' />
                    <ResponseProvider>

                        <OverviewTab profile={true} />
                        {/* <ProjectsTab type="Projects" />
                    <ProjectsTab type="Experiences" /> */}
                    </ResponseProvider>
                </div>
            </div>
        </>
    )
}

export default Display