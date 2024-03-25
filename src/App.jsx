import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind</h1>
//       <Card username = "niharika" btnText = "clickMe"/>
//       <Card username= "Bhuvana" btnText = "visit me"/>
//     </>
//   )
// }

// export default App

function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shoadow-lg" style = {{backgroundColor:"red"}}>Red</button>
    </div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shoadow-lg" style = {{backgroundColor:"green"}}>Green</button>
    </div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shoadow-lg" style = {{backgroundColor:"blue"}}>Blue</button>
    </div>
    </div>
    

    </div>
  )
}

export default App

