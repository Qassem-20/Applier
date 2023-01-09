import '../../assets/css/signUpSignIn.css';
import WelcomeNav from '../../components/Nav/welcomeNav';
import React, { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export class signIn extends Component {
  render() {
    return (
        <Fragment>
        <WelcomeNav />
        <Container> 
            <Row>
                <Container className='bg-white p-4 rounded' m-auto>
                <h1 className='alignmentCenter'>Welcome to Applier</h1>
                <hr />
                <Row className='mt-3 mb-3'>
                    <Col xl={5} sm={12} className='mx-3' m-auto>
                    <p className='labelTag'>Email</p>
                    <input className="inputStyling" type="" name="" value="" />
                    <div>
                        <p className='labelTag'>Password</p>
                        <input className="inputStyling" type="" name="" value="" />
                    </div>
                    <Row>
                        <Col mr-5><a className="btn login" href="/consumerProfile">LogIn</a></Col>
                        <Col><a href='/ForgottenPassword'>Forget Password?</a></Col> 
                    </Row>
                        <div className='alignmentCenter mt-2'>
                            <a href='/SignUp'>Don’t have an Account?  Register</a>
                        </div>
                </Col>
                <Col xl={1}>
                    <div id='verticalLine'>
                    </div>
                </Col>
                <Col xl={5} sm={12} className='mx-3' m-auto>
                    <Container><button className='login' >Medical Student</button></Container>
                    <Container><button className='login' >Company</button></Container>
                </Col>
                <Col xl={5} sm={12} className='mx-3 hideMedicalSignIn' m-auto>
                <p className='labelTag'>Email</p>
                <input className="inputStyling" type="" name="" value="" />
                <div>
                    <p className='labelTag'>Password</p>
                    <input className="inputStyling" type="" name="" value="" />
                </div>
                <Row>
                    <Col mr-5><a className="btn login" href="/medicalStudents">LogIn</a></Col>
                    <Col><a href='/ForgottenPassword'>Forget Password?</a></Col> 
                </Row>
                    <div className='alignmentCenter mt-2'>
                        <a href='/SignUp'>Don’t have an Account?  Register</a>
                    </div>
                </Col>
                <Col xl={5} sm={12} className='mx-3 hideCompanySignIn' m-auto>
                <p className='labelTag'>Email</p>
                <input className="inputStyling" type="" name="" value="" />
                <div>
                    <p className='labelTag'>Password</p>
                    <input className="inputStyling" type="" name="" value="" />
                </div>
                <Row>
                    <Col mr-5><a className="btn login" href="/companyHomePage">LogIn</a></Col>
                    <Col><a href='/ForgottenPassword'>Forget Password?</a></Col> 
                </Row>
                    <div className='alignmentCenter mt-2'>
                        <a href='/SignUp'>Don’t have an Account?  Register</a>
                    </div>
                </Col>
                </Row>
                </Container>
            </Row>
        </Container>
    </Fragment>
    )
  }
}

export default signIn