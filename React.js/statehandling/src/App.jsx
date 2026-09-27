import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import btnModule from './Button.module.css';
import { questions } from './Data/Question';
import Faqs from './faqs';


function App() {
  let [showans,setShowans] = useState(questions[0].id);
  let [status,setStatus] = useState(false);
  let [pstatus,setPstatus] = useState(false);
  let [menustatus,setMenustatus] = useState(false);
  let [modalstatus,setModalstatus] = useState(false);
  let n = ['ram', 'ravi', 'raj', 'hello']
  let showNotification =()=>{
    // toast.info('Welcome to WS')
    // toast.success('Success Message', 'Title Here');
    // toast.error('Error Message', 'Click me!')
    toast.warning('warning Message', 'show after 24h')
  }
  return (
    <div className='App'>
      <button onClick={showNotification}>Save</button>
      <ToastContainer />
      <div>
        {/* <ul>
          {n.map((items,i)=>{
            return(
              <li key={i}>{items}</li>
            )
          })}
        </ul> */}
        {/* <Faqs /> */}
        <h1>Fequently Asked Question (FAQ)</h1>
        <div className='faqouter'>
          {questions.map((faqItems,i) => {
            return(
            <div className='faqItems' key={faqItems.id}>
              <h2 onClick={()=>setShowans(faqItems.id)}>{faqItems.question}</h2>
              <p className={showans==faqItems.id ? 'activeAns': ''}>{faqItems.answer}</p>
            </div>
            )
          })}

        </div>
      </div>
      <button className='en' onClick={()=>setModalstatus(true)}>Enquiary</button>
      <div  onClick= {()=>setModalstatus(false)}  className={`modalOverLay ${ modalstatus ? 'modalshow' : '' }`}></div>
      <div className={`ModalDiv  ${ modalstatus ? 'showModalDiv' : '' } `}>
        <h3>Enquiary Now <span onClick={()=>setModalstatus(false)}>&times;</span></h3>
      </div>

      <button className='micon' onClick={()=>setMenustatus(!menustatus)}>
        { menustatus ? <span>&times;</span> : <span>&#9776;</span> }
      </button>
      <div className={`Menu ${menustatus ? 'activeMenu' : '' }`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <input type={pstatus ? 'text' : 'password' } /> 
      <button onClick={()=>setPstatus(!pstatus)}>
        { pstatus ? 'Hide' : 'Show' }
      </button>
      <br />
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
      <button onClick={()=>Setstatus(!status)}>
        { (status) ? 'Hide' : 'Show' }
      </button>
      { (status) ? <p className='para'>Welcome to Ws</p> : '' }
    </div>
  )
}

export default App
