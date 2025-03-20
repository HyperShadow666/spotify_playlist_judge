import React from 'react'
import { useResponse } from "../context/DataContext";

const OverviewTab = ({profile}) => {
  
  const { responseMessage, useResponseMessage } = useResponse();
  return (
    
    <div className='m-5 text-bal whitespace-pre-line'>
        
          {
            profile ?
            <p className='font-semibold text-gray-300 '>
            `Dynamic data engineering and science student at ENSAH. Motivated to apply technical and analytical skills to solve complex
          challenges. My strong academic background in data science, combined with a passion for data exploration and manipulation, fuels
          my determination to excel in this field.`
          </p> 
            :
            <p className='font-semibold text-gray-300 whitespace-pre-line' 
       dangerouslySetInnerHTML={{
         __html: 
            responseMessage.text || `No data available. Please submit your Spotify URL to generate insights.`
          }
        }
        />

      }
          
        
        
    </div>
  )
}

export default OverviewTab