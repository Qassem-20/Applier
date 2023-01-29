import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import React, { Fragment, Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export class companies extends Component {
  render() {
    return (
      <Fragment>
        <AdminNav />
        <Container className='mt-3 mb-2'>
          <h1>Companies</h1>
          <Row className='m-auto pt-3 pb-1'> 
          <Col xl={3} md={6} sm={12}><input className='inputStyling' type="search" name="" value="" placeholder='Phone Number ' /></Col>
          <Col xl={3} md={6} sm={12}><input className='inputStyling' type="search" name="" value="" placeholder='Trainee Name' /></Col>
          <Col xl={3} md={6} sm={12}><input className='inputStyling' type="date" name="" value="" placeholder='Joined Date' /></Col>
          <Col xl={3} md={6} sm={12}>
            <select className='inputStyling' name="cars" placeholder='Status'>
              <option value="saab">Null</option>
              <option value="volvo">Active</option>
              <option value="saab">Inactive</option>
            </select>
          </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className='opportunitiesTag'>
            <Col xl={2}><p className='opportunitiesMainTags'>Company</p></Col>
            <Col xl={3}><p className='opportunitiesMainTags'>About</p></Col>
            <Col xl={2}><p className='opportunitiesMainTags'>Phone Number</p></Col>
            <Col xl={2}><p className='opportunitiesMainTags'>Location</p></Col>
            <Col xl={2}><p className='opportunitiesMainTags'>Website</p></Col>
            <Col xl={1}><p className='opportunitiesMainTags'>Status</p></Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className='opportunitiesT'>
            <Col xl={2}><p className='opportunitiesTags'>Amazon</p></Col>
            <Col xl={3}><p className='opportunitiesTags'>lorevk rvierv ieruverivkervh erjverv ejrhv rj</p></Col>
            <Col xl={2}><p className='opportunitiesTags'>+9663746356</p></Col>
            <Col xl={2}><p className='opportunitiesTags'>wbkejdbwek</p></Col>
            <Col xl={2}><p className='opportunitiesTags'>whjfbrwbfhrf.com</p></Col>
            <Col xl={1}><input className='opportunitiesTags' type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
            <label class="btn btn-outline-success" for="btn-check-outlined">Activate</label><br /></Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default companies