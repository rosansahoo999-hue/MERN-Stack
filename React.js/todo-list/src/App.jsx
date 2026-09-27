import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { tabs } from './Data/tabs'

function App() {
  let [todolist,setTodolist] = useState([])
  let [activeTabs, setActiveTabs] = useState(0)
  let [activeContent, setActiveContent] = useState(tabs[0])

  let changeData=(index)=>{
    setActiveTabs(index)
    setActiveContent(tabs[index])
  }

  let saveToDoList = (event) => {
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname]
      setTodolist(finalDolist)
    }
    else{
      alert('Todo Name Already Exits.....')
    }

    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist} />
    )
  })

  return (
    <div className='App'>
      <div className='tabsOuter'>
        <h1 style={{textAlign:'left'}}>
          Law Prep Vission Mission and Values.
        </h1>
        <ul>
          {tabs.map((tabsItems,index)=>{
            return(
              <li>
                  <button onClick={()=>changeData(index)} className={activeTabs==index ? 'activeButton' : ''}>{tabsItems.title}</button>
              </li>
            )
          })}
        </ul>
        {
        activeContent!==undefined ? 
        <p>
          {activeContent.description}
        </p>
        :
        ''
        }
      </div>

        <h1>Todo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='toname'/> <button>Save</button>
        </form>
      
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default App

function ToDoListItems({value,indexNumber,todolist,setTodolist}) {
  let [status,setStatus] = useState(false)
  let deleteRow=()=>{
    let finalData = todolist.filter((v, i)=> i != indexNumber)
    setTodolist(finalData)
  }
  let checkStatus =()=>{
    setStatus(!status)
  }

  return(
    <li className={(status)? 'complete-todo' : ''} onClick={checkStatus}>{indexNumber+1} . {value} <span onClick={deleteRow}>&times;</span></li>
  )
}