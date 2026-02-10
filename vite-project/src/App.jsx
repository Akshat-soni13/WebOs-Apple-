import { useState } from 'react'
import "../src/app.scss"
import Nav from './component/Nav'
import Dock from './component/Dock'
import Window from './component/windows/Window'
import Github from './component/windows/Github'
import Note from './component/windows/note'
import Resume from './component/windows/Resume'
import Spotify from './component/windows/Spotify';
import CLi from './component/windows/CLi'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
function App() {
  const [WindowState, setWindowState] = useState(
      {
      github: false,
      note: false,
      resume:false,
      spotify:false,
      cli:false

    }
  )

  return (
     
 <>
  <main>
    <Nav></Nav>
        <Dock WindowState={WindowState} setWindowState={setWindowState}/>

     {WindowState.github && <Github windowName="github" WindowState={WindowState} setWindowState={setWindowState}/> }
     {WindowState.note && <Note windowName="note" WindowState={WindowState} setWindowState={setWindowState}/> }
     {WindowState.resume && <Resume windowName="resume" WindowState={WindowState} setWindowState={setWindowState}/> }
     {WindowState.cli && <CLi windowName="cli" WindowState={WindowState} setWindowState={setWindowState}/> }
     {WindowState.spotify && <Spotify windowName="spotify" WindowState={WindowState} setWindowState={setWindowState}/> }
      
  </main>

 </>
  )
}

export default App

