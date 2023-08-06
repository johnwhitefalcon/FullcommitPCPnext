


import React from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer(){

  const [video, setVideo] = useState(false)
  const [window, hasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      hasWindow(true);
    }
  }, []);

  return (
 

<div className="text-white font-extrabold h-screen justify-center items-center bg-black flex" >
  
  
 {hasWindow && <ReactPlayer url={'https://www.youtube.com/watch?v=lDWoInMdjJQ'} />} 
        

      
    </div>
    

  )
}

