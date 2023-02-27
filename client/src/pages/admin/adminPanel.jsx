import '../../assets/css/admin.css';
import AdminNav from '../../components/Nav/adminNav';
import {Container, Row, Col} from 'react-bootstrap';
import adminsStore from "../../stores/AdminsStore.js";
import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';

const AdminPanel = () => {
  const store = adminsStore();

  const [admins, setAdmins] = useState(null)

  useEffect(() => {
    fetchAdmins();
  },[])

  const fetchAdmins = async () => {
    const res = await axios.get("http://localhost:4000/api/v1/admins");
    // Set to state
    setAdmins(res.data.admins);
  }


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
            <Col xl={3} md={2} xs={3}><p className='opportunitiesMainTags'>Name</p></Col>
            <Col xl={3} md={3} xs={3}><p className='opportunitiesMainTags'>Email</p></Col>
            <Col xl={3} md={3} xs={2}><p className='opportunitiesMainTags'>Phone Number</p></Col>
            <Col xl={1} md={1} xs={1}><p className='opportunitiesMainTags'>type</p></Col>
            <Col xl={2} md={1} xs={1}><p className='opportunitiesMainTags'>Status</p></Col>
            </Row>
        </Container>
        {admins && 
        admins.map((admin) => {
          return <Container fluid key={admin._id} >
              <Row className='opportunitiesT'>
                <Col xl={3} md={2} xs={3}><p className='opportunitiesTags'>{admin.name}</p></Col>
                <Col xl={3} md={3} xs={3}><p className='opportunitiesTags'>{admin.email}</p></Col>
                <Col xl={3} md={3} xs={2}><p className='opportunitiesTags'>{admin.phone}</p></Col>
                <Col xl={2} md={1} xs={1}><button className='opportunitiesTags'>{admin.type}</button></Col>
                <Col xl={1} md={1} xs={1} ><input className='opportunitiesTags' type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" /><label class="btn btn-outline-danger" for="btn-check-outlined">Delete</label>
                </Col>
              </Row>
          </Container>
        })}
      </Fragment>
  )
}

export default AdminPanel