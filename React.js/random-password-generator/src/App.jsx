import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './App.css'
import { LC, NC, SC, UC } from './data/passChar';

function App() {
  let [UpperCase, setUpperCase] = useState(false)
  let [LowerCase, setLowerCase] = useState(false)
  let [Number, setNumber] = useState(false)
  let [Symbol, setSymbol] = useState(false)
  let [passwordLen, setPasswordLen] =useState(10)
  let [fPass, setFpass] = useState('')

  let createPassword=()=>{
    let finalPass = "" 
    let charSet = ""
    if(UpperCase || LowerCase || Number || Symbol){
      if(UpperCase) charSet += UC;
      if(LowerCase) charSet += LC;
      if(Number) charSet += NC;
      if(Symbol) charSet += SC;
      for(let i=0;i<passwordLen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setFpass(finalPass)
    }else{
      toast.warning("Please Clicked One Checkbox")
    }
  }
  
  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }
  return (
    <>
    <ToastContainer />
      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className='passwordBoxIn'>
          <input type="text" readOnly  value={fPass} /> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label htmlFor="">Password Length</label>
          <input type="number" max={20} min={10} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>

        <div className='passLength'>
          <label htmlFor="">Include UpperCase Letter</label>
          <input type="checkbox" checked={UpperCase} onChange={()=>setUpperCase(!UpperCase)}/>
        </div>

        <div className='passLength'>
          <label htmlFor="">Include LowerCase Letter</label>
          <input type="checkbox" checked={LowerCase} onChange={()=>setLowerCase(!LowerCase)}/>
        </div>

        <div className='passLength'>
          <label htmlFor="">Include Number</label>
          <input type="checkbox" checked={Number} onChange={()=>setNumber(!Number)}/>
        </div>

        <div className='passLength'>
          <label htmlFor="">Include Symbol</label>
          <input type="checkbox" checked={Symbol} onChange={()=>setSymbol(!Symbol)}/>
        </div>
        <button className='btn' onClick={createPassword}>
          Generator Password 
        </button>
      </div>
    </>
  )
}

export default App
