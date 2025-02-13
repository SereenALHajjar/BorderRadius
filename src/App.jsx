import { useState } from 'react'
import BorderRadius from './BorderRadius'
import './App.css'

function App() {
  const [width , setWidth] = useState(350) ;
  const [height , setHeight] = useState(400) ;

  return (
    <>
      <h1>Border Radius Preview</h1>
      <BorderRadius width={width} height={height} />
      <div>
        <label> width:
          <input type='number' placeholder='350' value={width} onChange={(e)=>{setWidth(e.target.value)}}></input>
        </label>
        <label> height:
          <input type='number' placeholder='400' value={height} onChange={(e)=>{setHeight(e.target.value)}}></input>
        </label>
      </div>
    </>
  )
}

export default App
