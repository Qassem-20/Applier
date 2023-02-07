import '../../assets/css/admin.css';
import React, { Fragment } from 'react'
import {Container, Col} from 'react-bootstrap';

const adminForgottenPassword = () => {
  return (
    <Fragment>
    <Container className='m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow'>
        <Col className='m-auto' xl={8}>
            <p className='mb-1'>e-mail:</p>
            <input className='inputStyling' type="email" placeholder='John123@gmail.com' />
            <Container className='d-flex flex-row-reverse'>
                <a className="btn login" href="/adminSignIn">Verify</a>
            </Container>
        </Col>
    </Container>
  </Fragment>
    )
}

export default adminForgottenPassword