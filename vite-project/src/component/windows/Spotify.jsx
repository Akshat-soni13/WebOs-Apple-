import React from 'react'
import Window from './Window'
import "./Spoti.scss"
const Spotify = ({windowName,setWindowState}) => {
  return (
   <Window width='25vw' windowName={windowName} setWindowState={setWindowState}>

        <div className='spotify-window'>
           <iframe
  data-testid="embed-iframe"
  style={{ borderRadius: "12px", height:"100%" }}
  src="https://open.spotify.com/embed/playlist/37i9dQZF1E4oJSdHZrVjxD?utm_source=generator"
  frameBorder="0"
  allowFullScreen
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>

        </div>

   </Window>
  )
}

export default Spotify