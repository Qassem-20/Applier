import '../../assets/css/signUpSignIn.css';
import Nav from '../../components/navDesktop';
import React, { Fragment ,Component } from 'react'

export class forgottenPassword extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className='container SignUpFormat'>
        <p>Enter your Email</p>
        <input type="email" name="" value="" />
        <div>
          <button className="btn" type="submit">Send Code</button>
        </div>
        </div>
      </Fragment>
    )
  }
}

export default forgottenPassword