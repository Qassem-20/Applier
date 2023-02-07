import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import React, { Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const adminPanel = () => {
  return (
<Fragment>
        <AdminNav />
        <Container className='mb-2'>
            <Row>
              <Col md={6} xs={12}><h1>Admin Panel</h1></Col>
              <Col md={6} xs={12}><a className='btn btn-dark' href="/addAdmin">add new admin</a></Col>
            </Row>
        </Container>
        <Container fluid>
            <Row className='opportunitiesTag'>
            <Col md={3} xs={3}><p className='opportunitiesMainTags'>Name</p></Col>
            <Col md={3} xs={4}><p className='opportunitiesMainTags'>Email</p></Col>
            <Col md={4} xs={3}><p className='opportunitiesMainTags'>Phone Number</p></Col>
            <Col md={1} xs={2}><p className='opportunitiesMainTags'>Status</p></Col>
            </Row>
        </Container>
        <Container fluid>
            <Row className='opportunitiesT'>
              <Col md={3} xs={3}><p className='opportunitiesTags'>Faisal</p></Col>
              <Col md={3} xs={4}><p className='opportunitiesTags'>wneow@gmail.com</p></Col>
              <Col md={4} xs={3}><p className='opportunitiesTags'>+9663746356</p></Col>
              <Col md={2} xs={2}><input className='opportunitiesTags' type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
                <label class="btn btn-outline-danger" for="btn-check-outlined">Delete</label></Col>
            </Row>
        </Container>
      </Fragment>
  )
}

export default adminPanel