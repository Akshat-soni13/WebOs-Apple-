import { useState } from 'react'
import "../src/app.scss"
import Nav from './component/Nav'
import Dock from './component/Dock'
import Window from './component/windows/Window'
import Github from './component/windows/Github'
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

  </main>

 </>
  )
}

export default App

