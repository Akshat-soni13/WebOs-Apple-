import { useState } from 'react'
import "../src/app.scss"
import Nav from './component/Nav'
import Dock from './component/Dock'
import Window from './component/windows/Window'
import Github from './component/windows/Github'
import Note from './component/windows/note'
import Resume from './component/windows/Resume'
function App() {

  return (
 <>
  <main>
    <Nav></Nav>
        <Dock/>
      {/* <Window>
        <p>Heeleo AKshat soni </p>
      </Window> */}
      <Github/>
      <Note/>
      <Resume/>
  </main>

 </>
  )
}

export default App

