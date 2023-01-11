import '../../assets/css/signUpSignIn.css';
import traineeBackground from '../../assets/images/traineeBackground.png';
import companyBackground from '../../assets/images/companyBackground.png';
import WelcomeNav from '../../components/Nav/welcomeNav';

import React, { Component, Fragment } from 'react'

export class routeSignUp extends Component {
  render() {
    return (
      <Fragment>
      <WelcomeNav />
        <div className='container'> 
          <div className='row'>
          <a className='col-6' href="/signUpConsumer"><img className="img-fluid" src={traineeBackground} alt="" /></a>
          <a className='col-6' href="/signUpCompany"><img className="img-fluid" src={companyBackground} alt="" /></a>
          </div>       
        </div>
      </Fragment>
    )
  }
}

export default routeSignUp