import React from 'react'
import Window from './Window'
import gitData from "../../assets/github.json"

const GitCrad=({data})=>
{
    return(
        <div className='Card'>
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        
            <div className="tags">

                {
                    data.tags.map(tag=><p className='tag'>{tag}</p>)
                }
            </div>

            <div className="urls">
                    <a href={data.repoLink}>Repository</a>
                    <a href={data.demoLink}>Demo Link </a>

            </div>


        </div>
    )
}

const Github = () => {
  return (
    <Window>
        
       {
         gitData.map((proj)=>{
            return(
                <GitCrad data={proj}/>
            )
        })
       }
    
    </Window>
  )
}

export default Github