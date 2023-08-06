
import React, { useState } from "react";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer() {
  const [state, setState] = useState({
    playing: true
  })

  return (
    <div className="text-white font-extrabold h-screen justify-center items-center bg-black flex">
      <div className="text-6xl fixed z-10 ml-[-45rem] mt-[-10rem] w-[20rem]">
        Vertical Edge Swimwear
      </div>
      <div className="absolute top-0 left-0 h-full w-full">
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=lDWoInMdjJQ&autoplay=1'}
          playing={state.playing}
          muted={true}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                fs: 0,
                modestbranding: 1,
                rel: 0,
                cc_load_policy: 0,
                iv_load_policy: 3,
                title: null,
                enablejsapi: 1,
                showinfo: 0
              }
            }
          }}
        />
      </div>
    </div>
  )
}
