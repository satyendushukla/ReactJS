import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
//Use of hook "use state"
let [counter,setCounter]= useState(15)
// let counter =15

const addValue=()=>{
  console.log("clicked",counter)
  counter=counter+1
  setCounter(counter)
}
const removeValue=()=>{ 
  while (counter>0){
    setCounter(counter)
    counter=counter-1 
  }
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button><br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
