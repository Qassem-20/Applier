import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import React, { Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const addAdmin = () => {
  return (
    <Fragment>
    <AdminNav />
    <Container className='bg-white rounded p-3' >
      <Row>
        <Col>
          <p className='mb-1'>Name:</p>
          <input className='inputStyling' type="" name="" value="" />
          <p className='mb-1'>Email:</p>
          <input className='inputStyling' type="" name="" value="" />
          <p className='mb-1'>Phone Number:</p>
          <input className='inputStyling' type="" name="" value="" />
          <p className='mb-1'>Type of the admin:</p>
          <select className='inputStyling' name="cars" placeholder='Status'>
            <option value="">Sub-Admin</option>
            <option value="">Main Admin</option>
          </select>
          <button type="button" className='btn login'>Add admin</button>
        </Col>
      </Row>
    </Container>
  </Fragment>
  )
}

export default addAdmin