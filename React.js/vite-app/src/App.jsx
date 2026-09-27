import React, { useState } from "react";
import Header from "./components/Header";
import logo from './logo.svg';
import assets from './assets/pngtree-creative-company-logo-png-image_1197025.jpg';
import awards from './assets/pngtree-circle-best-award-medal-in-black-gold-color-with-paddy-symbol-png-image_9267832.png'

function App() {
  let template='';
  let [count,setCount] = useState(1)
  let [pshow,setPshow] = useState(true)

  if(pshow){
    template=<Card />
  }else{
    template='';
  }
  // if(pshow){
  //   template=<>
  //     <button className="bg-[red] p-2.5" onClick={()=>setPshow(!pshow)}>Hide</button>
  //     <p className="text-center p-2.5">Welcome to ws</p>
  //   </>
  // }else{
  //   template=<button className="bg-[red] p-2.5" onClick={()=>setPshow(!pshow)}>Show</button>
  // }
  
  let displayData = () => {
    setCount(count+1)
  }

  let addData = (a,b) => {
    console.log(a+b)
  }

  return (
    <div className="App">
      {template}
      <div className="text-center">
      {count}
      <button className="bg-[red] p-2.5 mr-4" onClick={()=> addData(20,25)}>Add Data</button>
      <button className="bg-[red] p-2.5" onClick={displayData}>Save</button>
      </div>
      <img width={200} src={assets} alt="" />
      <img src={awards} alt="" width={200} />
      <Header />
      <h1 className='text-[40px] text-red-900 font-bold text-center'>Welcome to Ws</h1>
    </div>
  );
}

export default App;


let Card=()=>{
  return(
    <h1 className="text-center">WscubeTech</h1>
  )
}