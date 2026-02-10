import React from 'react'
import resume from "../../../public/akiresume.pdf"
import Window from './Window'
import "./Resumestyle.scss"

const Resume = ({windowName,setWindowState}) => {
  return (

        <Window width='40vw' windowName={windowName} setWindowState={setWindowState} >
                <div  className='resume-window'>
                    <iframe src={resume} frameborder="0"></iframe>
                </div>
        </Window>

  )
}

export default Resume