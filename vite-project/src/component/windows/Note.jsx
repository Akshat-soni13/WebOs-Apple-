import React, { useEffect, useState } from 'react'
import Markdown from "react-markdown"
import Window from './Window'
import "./notes.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const Note = () => {

    const [markDown, setmarkDown] = useState(null)

    useEffect(()=>{
        fetch("./note.txt")
        .then(res=>res.text())
        .then(text=>setmarkDown(text))
    },[])

    return (
        <Window>
    <div className='note-window'>
                    {

                          
                            markDown? <SyntaxHighlighter style={atelierDuneDark} language="typescript" >{markDown}</SyntaxHighlighter>: <p>Loading..</p>
                        
                    }

    </div>
        </Window>
                
  )
}

export default Note