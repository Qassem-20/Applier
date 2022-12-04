import '../../assets/css/admin.css';
import React, { Fragment,Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export class trainee extends Component {
  render() {
    return (
      <Fragment>
      <Container>
      <h1>Consumers</h1>
      <Row className='m-auto'> 
        <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Phone Number ' /></Col>
        <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Joined Date' /></Col>
        <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Statue' /></Col>
        <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Trainee Name' /></Col>
      </Row>
    </Container>
    <Container>
      <Row className='opportunitiesTag'>
        <Col xl={2}><p className='opportunitiesMainTags'>Name</p></Col>
        <Col xl={2}><p className='opportunitiesMainTags'>Major</p></Col>
        <Col xl={2}><p className='opportunitiesMainTags'>Phone Number</p></Col>
        <Col xl={2}><p className='opportunitiesMainTags'>Location</p></Col>
        <Col xl={2}><p className='opportunitiesMainTags'>CV</p></Col>
        <Col xl={2}><p className='opportunitiesMainTags'>Statue</p></Col>
      </Row>
    </Container>
    <Container>
      <Row className='opportunitiesT'>
        <Col xl={2}><p className='opportunitiesTags'>ahmed</p></Col>
        <Col xl={2}><p className='opportunitiesTags'>software engineer</p></Col>
        <Col xl={2}><p className='opportunitiesTags'>+9663746356</p></Col>
        <Col xl={2}><p className='opportunitiesTags'>Dammam</p></Col>
        <Col xl={2}><p className='opportunitiesTags'>whjfbrwbfhrf.com</p></Col>
        <Col xl={2}><p className='opportunitiesTags'>suspended</p></Col>
      </Row>
    </Container>
    </Fragment>
    )
  }
}

export default trainee