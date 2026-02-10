import React from 'react'
import "./dock.scss"
import Window from './windows/Window';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Dock = ({WindowState,setWindowState}) => {
  return (

        <footer className='dock'>
            <div className="icon github" 
            onClick={()=>{setWindowState(state=>({...state,github:true}))}}         
            ><i class="ri-github-fill"></i></div>
            <div className="icon note"
            onClick={()=>{setWindowState(state=>({...state,note:true}))}}         
            ><i class="ri-sticky-note-fill"></i></div>
            <div className="icon pdf"
            onClick={()=>{setWindowState(state=>({...state,resume:true}))}}         
            ><i class="ri-file-pdf-2-fill"></i></div>
            <div className="icon calendar"
            onClick={()=>window.open("https://calendar.google.com")}
            ><i class="ri-calendar-event-line"></i></div>
            <div className="icon spotify"
            onClick={()=>{setWindowState(state=>({...state,spotify:true}))}}         
            ><i class="ri-spotify-line"></i></div>
            <div className="icon mail"
            ><i class="ri-mail-line"
            ></i></div>
            <div className="icon link"
            onClick={()=>{window.open("https://www.linkedin.com/in/akshat-soni-223465304/")}}
             ><i class="ri-link"></i></div>
            <div className="icon cli"
            onClick={()=>{setWindowState(state=>({...state,cli:true}))}}         
            ><i class="ri-terminal-fill"></i></div>

        </footer>



)
}

export default Dock