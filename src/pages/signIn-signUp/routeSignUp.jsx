import '../../assets/css/signUpSignIn.css';
import traineeBackground from '../../assets/images/traineeBackground.png';
import companyBackground from '../../assets/images/companyBackground.png';
import Nav from '../../components/navDesktop.jsx';

import React, { Component, Fragment } from 'react'

export class routeSignUp extends Component {
  render() {
    return (
      <Fragment>
      <Nav />
        <div className='container'> 
          <div className='row'>
          <a className='col-6' href="/StudentSignUp"><img className="img-fluid" src={traineeBackground} alt="" /></a>
          <a className='col-6' href="/TrainerSignUp"><img className="img-fluid" src={companyBackground} alt="" /></a>
          </div>       
        </div>
      </Fragment>
    )
  }
}

export default routeSignUp