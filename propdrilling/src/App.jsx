import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Count count={count} setCount={setCount}></Count>
      
     </div>
    </>
  )
}

function Count({count,setCount}){
  return <div>
    <CountRendered count={count}/>
    <Buttons count={count} setCount={setCount}></Buttons>
  </div>
}

function CountRendered({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count,setCount}){
 return <div>
  <button onClick={()=>{
    setCount(count+1)
  }}>Increase</button>
  <button onClick={()=>{
    setCount(count -1)
  }}>Decrease</button>
 </div>
}

export default App
