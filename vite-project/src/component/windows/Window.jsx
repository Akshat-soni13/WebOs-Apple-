import React from 'react'
import { Rnd } from "react-rnd"
import "./window.scss"
// 11.15 scroll se baki 
const Window = ({children,width="60vh",height="60vh",windowName, windowState , setWindowState}) => {
  return (
    <Rnd  
      default={
        {
          width:width,
          height:height,
          x:300,
          y:300
        }
      }
    >
      <div className="window">
            <div className="nav">
                <div className="dots">
                  <div className="dot red"
                  onClick={()=> setWindowState(state=> ({...state, [windowName] : false }) )}
                  ></div>
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