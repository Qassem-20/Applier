import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';

import React, { Fragment,Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export class adminPanel extends Component {
  render() {
    return (
      <Fragment>
        <AdminNav />
        <Container className=''>
            <h1>Admin Panel</h1>
        </Container>
        <Container fluid>
            <Row className='opportunitiesTag'>
            <Col xl={2}><p className='opportunitiesMainTags'>Name</p></Col>
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

export default adminPanel