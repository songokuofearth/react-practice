import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      {/* <div className="w-full h-screen"
      style={{backgroundColor : color}}
      > */}
      <div className="font-3xl">
        <h1>hi there</h1>
      </div>
    </>
  )
}

export default App
