import home_icon from './home.png'
import spotify_logo from './spotify_logo.png'
import song1 from  './song1.mp3'
import download from './download.png'
import email from './email.png'
import profile from './profile.jpg'
import project_img_1 from './project1.jpg'
import project_img_2 from './project2.jpg'
import experience_img_1 from './experience1.jpg'
import profile_abt from './profile_abt.jpg'
import your_library from './your Library.png'
import linkedin from "./linkedin.png"
import github from "./github.png"

export const assets = {
    home_icon,
    spotify_logo,
    download,
    email,
    profile,
    project_img_1,
    project_img_2,
    experience_img_1,
    profile_abt,
    your_library,
    github,
    linkedin
}

export const projectsData = [
    {   
        id:0,
        name: "AI models",
        image: project_img_1,
        desc:"Collection of moddels implemented",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "ETLs and Viz",
        image: project_img_2,
        desc:"collection of ETL pipe-lines and vizualisations",
        bgColor:"#22543d"
    },
    
]

export const experiencesData = [
    {
        id:0,
        name: "CastorPay",
        image: experience_img_1,
        file:song1,
        desc:"Data Science Intern",
        duration:"2 months"
    }
    
    
]