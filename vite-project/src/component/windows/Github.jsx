import React from 'react'
import Window from './Window'
import gitData from "../../assets/github.json"
import "./Github.scss"

const GitCrad=({data})=>
{
    return(
          <div className='Card'>
            <img src={data.image} alt="" height={"100%"} width={"100%"}/>
            <h1>{data.title}</h1>
            <p className='descri'>{data.description}</p>
        
            <div className="tags">

                {
                    data.tags.map(tag=><p className='tag'>{tag}</p>)
                }
            </div>

            <div className="urls">
                    <a href={data.repoLink}>Repository</a>
                {data.demoLink && <a href={data.demoLink}>Demo Link </a> }
            </div>
        </div>
    )
}

const Github = ({windowName , windowState,setWindowState}) => {
  return (
    <Window windowName={windowName}  windowState={windowState} setWindowState={setWindowState} >
      <div className='Card_Container'>
        
       {
         gitData.map((proj)=>{
            return(
                <GitCrad data={proj}/>
            )
        })
       }
      </div>

    
    </Window>
  )
}

export default Github