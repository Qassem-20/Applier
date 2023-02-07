import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import AdminChart from '../../components/charts/adminBarChart.jsx';
import React, { Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const adminHomePage = () => {
  return (
    <Fragment>
        <AdminNav />
        <Container className='mt-5'>
          <Row>
            <Col xl={3} md={5} sm={12} className='containerData m-2 p-2'>
            <p>Total Companies:</p>
            <p className='text-center'>234234 <span className='shadowWord'>Companies</span></p> 
            </Col>
            <Col xl={3} md={5} sm={12} className='containerData m-2 p-2'>
            <p className='ml-2'>Total Medical Students:</p>
            <p className='text-center'>234234 <span className='shadowWord'>Medical Students</span></p>
            </Col>
            <Col xl={3} md={5} sm={12} className='containerData m-2 p-2'>
              <p className='ml-10'>Total Opportunities:</p>
              <p className='text-center'>234342  <span className='shadowWord'>Opportunities</span></p>
            </Col>
            <Col xl={2} md={5} sm={12} className='containerData m-2 p-2'>
              <p className='ml-2'>Total active Trainee:</p>
              <p className='text-center'>14343 <span className='shadowWord'>Trainee</span></p>
            </Col>
          </Row>
          <Row className='containerData m-2 p-2'>
            <p>Opportunity Statics</p>
            <AdminChart />
          </Row>
        </Container>
      </Fragment>
  )
}

export default adminHomePage