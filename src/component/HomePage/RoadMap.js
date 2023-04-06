import React from 'react'
import fistSec from './Homeimg/FirstSec.jpg'
import secSec from './Homeimg/SecondSec.jpg'
function RoadMap() {
    const FirstSec = {
        backgroundImage:`url(${fistSec})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"804px",
        width:"50%",
        opacity:"1",
        zIndex:"1",

    }
    const SecondSec = {
        backgroundImage:`url(${secSec})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"770px",
        width:"50%",
        opacity:"1",
        zIndex:"1",

    }
  return (<>
    <div className='roadMap' style={FirstSec}></div>
    <div className='roadMap' style={SecondSec}></div>

  </>
  
  )
}

export default RoadMap