import React from 'react'
import DisplayBot from './DisplayBot'
import { assets } from '../assets/assets'
import OverviewTab from './OverviewTab'
import ProjectsTab from './ProjectsTab'
import { useNavigate } from 'react-router-dom'
import SpotifyUrlInput from './SpotifyUrlInput'
import { ResponseProvider } from "../context/DataContext";
// const [isLoading, setIsLoading] = useState(false);
// const [responseMessage, setResponseMessage] = useState("");

const BotComponent = () => {
    const BACKGROUND_COLOR = "#45736A"
    // const nav = useNavigate()
    return (
        <>

            <div className='w-[100%] md:w-[80%]  h-full p-2 flex-col gap-2 text-white  lg:flex bg-black'>
                <div className='h-screen rounded flex flex-col  justify-start overflow-auto'>
                    <div className='min-h-80' style={{ background: `linear-gradient(${BACKGROUND_COLOR} 0.01%, #121212)` }}>

                        <DisplayBot />

                        <br />
                    </div>
                    <ResponseProvider>
                        <div>
                            <SpotifyUrlInput />

                        </div>
                        <hr className='m-5 ' />

                        <OverviewTab profile={false} />
                        <ProjectsTab type="Playlists" />
                    </ResponseProvider>

                </div>
            </div>
        </>
    )
}

export default BotComponent