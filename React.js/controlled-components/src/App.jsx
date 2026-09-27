import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [uname, setUname] = useState('')
  let [password, setPassword] = useState('')
  let handlesubmit=()=>{
    event.preventDefault()
    console.log(uname,password)
  }
  // let getUname=(event)=>{
  //   setUname(event.target.value)
  // }

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handlesubmit}>
              <div className='text-start my-3'>
                <label>UserName</label>
                <input type="text" className='form-control' value={uname} onChange={(event)=>setUname(event.target.value)} />
              </div>
              <div className='text-start my-3'>
                <label>Password</label>
                <input type="text" className='form-control' value={password} onChange={(event)=>setPassword(event.target.value)} />
              </div>
              <div className='text-start'>
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
