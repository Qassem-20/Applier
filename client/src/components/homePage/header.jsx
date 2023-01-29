import { Container } from 'react-bootstrap'
import '../../assets/css/welcoming.css'
import React, { Component, Fragment } from 'react'

export class header extends Component {
  render() {
    return (
      <Fragment>
        <Container className=' header_container' >
          <p className='textStyling'>
          "A venue where trainee can get
          opportunity with a corporation, 
          and where companies found the trainee."
          </p>
          <div className=' d-flex justify-content-center'>
          <a href='/SignIn' className='btn active' id='signInButton'>start your journey with Applier</a>  
          </div>
      </Container>
     </Fragment>
    )
  }
}

export default header