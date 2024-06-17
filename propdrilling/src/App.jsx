import { useContext, useState } from 'react'

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
// import { CountContext } from './context'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div><RecoilRoot>
      <Count></Count></RecoilRoot>
      {/* <CountContext.Provider value={count}> */}
      {/* <Count setCount={setCount}></Count> */}
      {/* </CountContext.Provider> */}
     </div>
    </>
  )
}

function Count({setCount}){
  console.log("rerender");
  return <div>
    <CountRendered />
    {/* <Buttons  setCount={setCount}></Buttons> */}
    <Buttons></Buttons>
  </div>
}

function CountRendered(){
  // const count=useContext(CountContext)
  const count=useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

// function Buttons({setCount}){
  function Buttons(){
    console.log("button re render")
  // const count=useContext(CountContext)
  // const [count,setCount] =useRecoilState(countAtom);
  const setCount =useSetRecoilState(countAtom);
 return <div>
  <button onClick={()=>{
    setCount(count=>count+1)
  }}>Increase</button>
  <button onClick={()=>{
    setCount(count=>count -1)
  }}>Decrease</button>
 </div>
}

export default App
