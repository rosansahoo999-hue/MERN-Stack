import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [city, setCity] = useState('');
  let [wdetails, setWdetails] = useState();
  let [isloading, setIsloading] = useState(false)
  let [counter, setCounter] = useState(1)

  let getData =(event)=>{
    setIsloading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      if(finalRes.cod=="404"){
        setWdetails(undefined)
      }else{
      setWdetails(finalRes)
      }
      setIsloading(false)
    })

    event.preventDefault()
    setCity('')
  }

  let changeCounter=()=>{
    setCounter(counter+1)
  }

  useEffect(()=>{
    console.log("Welcome to Ws")
  },[counter])
  return (
      <div className='w-[100%] h-[100vh] bg-[#4aacb1] text-[black]'>
        {counter}
        <button onClick={changeCounter}>Count</button>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-[40px] font-bold py-[50px] text-white'>Simple Weather App</h1>

          <form onSubmit={getData}>
            <input type="text" className='w-[300px] h-[40px] pl-3 bg-[white] text-[black]' placeholder='City Name' value={city}             onChange={(e)=>setCity(e.target.value)} /> <button className='bg-[blue]'>Submit</button>
          </form>

          <div className='w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] text-[black] relative'>
            <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif' width={100}                                           className={`absolute left-[40%] ${isloading? "" : "hidden"}`} />

            {wdetails!==undefined 
            ?
            <>
              <h3 className='font-bold text-[30px]'>
                {wdetails.name}
                <span className='bg-[yellow]'>
                  {wdetails.sys.country}
                </span>
              </h3>
              <h2 className='font-bold text-[40px] bg-[gray] w-[100px]'>
                {wdetails.main.temp}
              </h2>
              <img src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} className='w-[100px] h-[100px]' alt="weather" />
              <p>
                {wdetails.weather[0].description}
              </p>
            </>
            :
            'No Data Found'
            }

          </div>
        </div>
      </div>
  )
}

export default App
