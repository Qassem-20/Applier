import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import React, { Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import AdminOperations from '../../context/AdminOperations.js';

const AddAdmin = () => {
  const admin = AdminOperations();

  return (
    <Fragment>
    <AdminNav />
    <Container className='bg-white rounded p-3' >
      <Row>
        <Col>
        <form onSubmit={admin.create}>
            <p className='mb-1'>Name:</p>
            <input className='inputStyling' type="text" placeholder='Name' value={admin.create.name} onChange= {admin.updateCreateFormField} />
            <p className='mb-1'>Email:</p>
            <input className='inputStyling' type="email" placeholder='Email' value={admin.create.email} onChange= {admin.updateCreateFormField} />
            <p className='mb-1'>Phone Number:</p>
            <input className='inputStyling' type="number" placeholder='Phone number' value={admin.create.phone} onChange= {admin.updateCreateFormField} />
            <p className='mb-1'>Password:</p>
            <input className='inputStyling' type="password" placeholder='Password' value={admin.create.password} onChange= {admin.updateCreateFormField} />
            <p className='mb-1'>Type of the admin:</p>
            <select className='inputStyling' name="type" placeholder='type' value={admin.create.type} onChange= {admin.updateCreateFormField}>
              <option value='null'>type</option>
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