



import React from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer(){



  return (
 

<div className="text-white font-extrabold h-screen justify-center items-center bg-black flex" >

<div className="text-6xl fixed z-10 ml-[-45rem] mt-[-10rem] w-[20rem]">
Vertical Edge Swimwear

</div>  
  
 <ReactPlayer url={'https://www.youtube.com/watch?v=lDWoInMdjJQ'} className="ml-[30rem] mt-[0rem] w-[80rem]"/> 
        

      
    </div>
    

  )
}

