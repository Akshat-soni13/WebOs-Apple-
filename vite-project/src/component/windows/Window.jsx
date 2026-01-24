import React from 'react'
import { Rnd } from "react-rnd"
import "./window.scss"
// 11.15 scroll se baki 
const Window = ({children}) => {
  return (
    <Rnd  
      default={
        {
          width:"60vh",
          height:"60vh",
          x:300,
          y:300
        }
      }
    >
      <div className="window">
            <div className="nav">
                <div className="dots">
                  <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                </div>
                <div className="title">
                  <p>Akshat soni -zsh</p>
                </div>
            </div>
            <div className="main-content">

              {children}
            </div>
      </div>

    </Rnd>


      )
}

export default Window