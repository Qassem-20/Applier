import '../../assets/css/admin.css';
import React, { Component,Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export class medicalStudents extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <h1>medicalStudents</h1>
        <Row className='m-auto'> 
          <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Phone Number ' /></Col>
          <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Joined Date' /></Col>
          <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Statue' /></Col>
          <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Name' /></Col>
        </Row>
      </Container>
      <Container>
        <Row className='opportunitiesTag'>
          <Col xl={2}><p className='opportunitiesMainTags'>Name</p></Col>
          <Col xl={3}><p className='opportunitiesMainTags'>Specialty</p></Col>
          <Col xl={2}><p className='opportunitiesMainTags'>Phone Number</p></Col>
          <Col xl={2}><p className='opportunitiesMainTags'>Location</p></Col>
          <Col xl={2}><p className='opportunitiesMainTags'>Identification Letter</p></Col>
          <Col xl={1}><p className='opportunitiesMainTags'>Statue</p></Col>
        </Row>
      </Container>
      <Container>
        <Row className='opportunitiesT'>
          <Col xl={2}><p className='opportunitiesTags'>Ahmed</p></Col>
          <Col xl={3}><p className='opportunitiesTags'>Dental</p></Col>
          <Col xl={2}><p className='opportunitiesTags'>+9663746356</p></Col>
          <Col xl={2}><p className='opportunitiesTags'>wbkejdbwek</p></Col>
          <Col xl={2}><p className='opportunitiesTags'>whjfbrwbfhrf.com</p></Col>
          <Col xl={1}><p className='opportunitiesTags'>activated</p></Col>
        </Row>
      </Container>
    </Fragment>
    )
  }
}

export default medicalStudents
