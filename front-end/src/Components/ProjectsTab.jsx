import React from 'react'
import { projectsData, experiencesData } from '../assets/assets'
import { useResponse } from "../context/DataContext";

import AlbumItem from './AlbumItem'



const ProjectsTab = ({type}) => {
    const { responseMessage,setResponseMessage } = useResponse();
    
    // Handle case when responseMessage is null or undefined
    const data = responseMessage?.playlists?.items || [];


    
    return (
        <>
            <div className='mb-4 rounded-lg m-5'>
                <h1 className='my-5 ml-3 font-bold text-2xl'>
                    
                    {type === "Playlists"  && data.length>0? 
                    "Your Top Playlists" : type==="Playlists" ? ""
                    : `Chadi's `+ type}
                </h1>
                <div className='flex overflow-auto m-1 bg'>
                    
                    {
                    type === "Projects" ?
                    projectsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))
                    : type === "Experiences" ?
                    experiencesData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))
                    : 
                    type === "Playlists" && data.length >0 ?
                    
                    data.map(({ collaborative, description, external_urls, href, id, images, name, owner, primary_color, public: isPublic, snapshot_id, tracks, type, uri }) => (
                        <AlbumItem key={id} name={name} desc={description} external_urls={external_urls} image={images?.[0]?.url || ""} />
                      ))
                    :""
                }
                    
                </div>
            </div>
            
        </>
    )
}

export default ProjectsTab