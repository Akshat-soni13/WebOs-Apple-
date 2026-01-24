import React from 'react'
import resume from "../../../public/akiresume.pdf"
import Window from './Window'
import "./Resumestyle.scss"

const Resume = () => {
  return (

        <Window>
                <div  className='resume-window'>
                    <iframe src={resume} frameborder="0"></iframe>
                </div>
        </Window>

  )
}

export default Resume