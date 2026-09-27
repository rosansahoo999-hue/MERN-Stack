import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Container, Col, Row, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './App.css'


function App() {
  let [formData, setFormData] = useState({
    uname:'',
    uemail:'',
    uphone:'',
    umessage:'',
    index:''
  })

  let [userData, setUserData] = useState([])

  let getValue=(event)=>{
    let oldData={...formData}
    let inputName=event.target.name;
    let inputValue=event.target.value;
    oldData[inputName]=inputValue;
    setFormData(oldData);
    
  }

  let submitHandle=(event)=>{
    let currentUserFormData={
      uname: formData.uname, 
      uemail: formData.uemail, 
      uphone: formData.uphone, 
      umessage: formData.umessage
    }    

    if(formData.index===""){

    let checkFliterUser = userData.filter((v)=>v.uemail==formData.uemail || v.uphone==formData.uphone)
    if(checkFliterUser.length==1){
      
      toast.error("Email or Phone number already exists....")
    }
    else{
    let olduserData=[...userData,currentUserFormData]
    setUserData(olduserData)

    setFormData({
    uname:'',
    uemail:'',
    uphone:'',
    umessage:'',
    index:''
    })
    }
    }
    else{
      let editIndex=formData.index;
      let oldData=userData;
      let checkFliterUser = userData.filter((v, i)=>(v.uemail==formData.uemail || v.uphone==formData.uphone) && i!=editIndex)
      if(checkFliterUser.length==0){
      oldData[editIndex]['uname']=formData.uname
      oldData[editIndex]['uemail']=formData.uemail
      oldData[editIndex]['uphone']=formData.uphone
      oldData[editIndex]['umessage']=formData.umessage

      setUserData(oldData)
      setFormData(
        {
          uname:'',
          uemail:'',
          uphone:'',
          umessage:'',
          index:''
        }
      )
    }else{
      toast.error("Email or Phone number already exists....")
    }
      }
    event.preventDefault();
  }

  let deleteRow=(indexNumber)=>{
    let filterDataAfterDelete=userData.filter((v,i)=>i!=indexNumber)
    toast.success('Data Delete')
    setUserData(filterDataAfterDelete)
  }
  
  let editRow=(indexNumber)=>{
    let editData=userData.filter((v, i)=>i==indexNumber)[0]
    editData["index"]=indexNumber;
    setFormData(editData)
  }
  return (
    <Container fluid>
      <ToastContainer />
      <Container>
        <Row>
          <Col className='text-center py-5'>
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
          {userData.length}
            <form onSubmit={submitHandle}>
              <div className='pb-3'>
                <label className='form-label'>Name</label>
                <input type="text" name='uname' className='form-control' value={formData.uname} onChange={getValue} />
              </div>
              <div className='pb-3'>
                <label className='form-label'>Email</label>
                <input type="email" name='uemail' className='form-control' value={formData.uemail} onChange={getValue} />
              </div>
              <div className='pb-3'>
                <label className='form-label'>Phone</label>
                <input type="number" name='uphone' className='form-control' value={formData.uphone} onChange={getValue} />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Message</label>
                <textarea name="umessage" id="" rows="3" className='form-control' value={formData.umessage} onChange={getValue} />
              </div>

              <button className='btn btn-primary'>
                {
                  formData.index!== '' ? 'Update' : 'Save'
                }
              </button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? 
                  userData.map((obj,index)=>{
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button onClick={()=>deleteRow(index)}>Delete</button>
                          <button onClick={()=>editRow(index)}>Update</button>
                        </td>
                      </tr>
                    )
                  })
                : 
                <tr>
                  <td colSpan={6}>No Data Found</td>
                </tr> 
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
