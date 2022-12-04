import '../../assets/css/admin.css';
import React, { Fragment, Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export class companies extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1>Companies</h1>
          <Row className='m-auto'> 
            <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Phone Number ' /></Col>
            <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Joined Date' /></Col>
            <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Statue' /></Col>
            <Col xl={3} md={6} sm={12}><input type="search" name="" value="" placeholder='Company Name' /></Col>
          </Row>
        </Container>
        <Container>
          <Row className='opportunitiesTag'>
            <Col xl={2}><p className='opportunitiesMainTags'>Company</p></Col>
            <Col xl={3}><p className='opportunitiesMainTags'>About</p></Col>
            <Col xl={2}><p className='opportunitiesMainTags'>Phone Number</p></Col>
            <Col xl={2}><p className='opportunitiesMainTags'>Location</p></Col>
            <Col xl={2}><p className='opportunitiesMainTags'>Website</p></Col>
            <Col xl={1}><p className='opportunitiesMainTags'>Statue</p></Col>
          </Row>
        </Container>
        <Container>
          <Row className='opportunitiesT'>
            <Col xl={2}><p className='opportunitiesTags'>Amazon</p></Col>
            <Col xl={3}><p className='opportunitiesTags'>lorevk rvierv ieruverivkervh erjverv ejrhv rj</p></Col>
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

export default companies