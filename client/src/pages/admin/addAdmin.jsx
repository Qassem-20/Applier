import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import React, { Fragment, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const AddAdmin = () => {
  //route
  const history = useHistory()

  //inputs
  const [name,setName] = useState("")
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [type,setType] = useState('')
  const [phone,setPhone] = useState('')

  async function registerAdmin(event){
    event.preventDefault()
     const response = await fetch('http://localhost:4000/api/v1/auth' ,  {
     method:"POST", 
     headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        type,
      }),
    })
    const data = await response.json()
    //const adminAlreadyExists = await Admin.findOne({ email });
		if (data.status === 'ok') {
			history.push('/adminPanel')
		}
    else if(!name || !email || !password || !type){
      console.log('please provide all values')
    }
    else{
      console.log('Email already in use')
    }
  }
  
  return (
    <Fragment>
    <AdminNav />
    <Container className='bg-white rounded p-3' >
      <Row>
        <Col>
        <form onSubmit={registerAdmin}>
            <p className='mb-1'>Name:</p>
            <input className='inputStyling' type="text" placeholder='Name' value={name} onChange= {(e) => setName(e.target.value)} />
            <p className='mb-1'>Email:</p>
            <input className='inputStyling' type="email" placeholder='Email' value={email} onChange= {(e) => setEmail(e.target.value)} />
            <p className='mb-1'>Phone Number:</p>
            <input className='inputStyling' type="number" placeholder='Phone number' value={phone} onChange= {(e) => setPhone(e.target.value)} />
            <p className='mb-1'>Password:</p>
            <input className='inputStyling' type="password" placeholder='Password' value={password} onChange= {(e) => setPassword(e.target.value)} />
            <p className='mb-1'>Type of the admin:</p>
            <select className='inputStyling' name="type" placeholder='type' value={type} onChange= {(e) => setType(e.target.value)}>
              <option value="sub-admin">sub admin</option>
              <option value="main-admin">main admin</option>
            </select>
            <input type="submit" className='btn login' value="Register" />
          </form>
        </Col>
      </Row>
    </Container>
  </Fragment>
  )
}

export default AddAdmin