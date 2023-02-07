import '../../assets/css/admin.css';
import React, {Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const adminSignIn = () => {
  return (
    <Fragment>
        <Container className='m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow'>
            <h3 className='text-center'>Welcome to Applier Dashboard</h3>
            <Col className='m-auto' xl={8}>
            <p className='mb-1'>e-mail:</p>
            <input className='inputStyling pl-2' type="email" placeholder='John123@gmail.com' />
            </Col>
            <Col className='m-auto' xl={8}>
            <p className='mb-1'>Password:</p>
            <input className='inputStyling pl-2' type="email" placeholder='John123@gmail.com' />
            </Col>
            <Col className='m-auto' xl={8}>
            <Row>
                <Col md={8}  sm={6} xs={4}>
                    <a href='/adminForgottenPassword'>Forget Password?</a> 
                </Col>
                <Col md={1} sm={1} xs={3}>
                </Col>
                <Col md={2} sm={3} xs={1}>
                    <a className="btn login" href="/adminHomePage">LogIn</a>
                </Col>
            </Row>
            </Col>
        </Container>
      </Fragment>
  )
}

export default adminSignIn