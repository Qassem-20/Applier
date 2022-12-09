import '../../assets/css/signUpSignIn.css';
import WelcomeNav from '../../components/Nav/welcomeNav';
import React, { Fragment, Component } from 'react'

export class signIn extends Component {
  render() {
    return (
        <Fragment>
        <WelcomeNav />
        <div className='container' id='SignIn'> 
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8 signInBox'>
                <h1 className='alignmentCenter'>Welcome to Applier</h1>
                <p className='labelTag'>Email</p>
                <input className="inputStyling" type="" name="" value="" />
                <div>
                <p className='labelTag'>Password</p>
                <input className="inputStyling" type="" name="" value="" />
                </div>
                <div>
                <a className="btn login" href="/consumerProfile">LogIn</a>
                <a id="ForgottenPassword" href='/ForgottenPassword'>Forget Password?</a> 
                </div>
                    <div className='alignmentCenter'>
                        <a href='/SignUp'>Don’t have an Account?  Register</a>
                    </div>
                </div>
                <div className='col-2'></div> 
            </div>
        </div>
    </Fragment>
    )
  }
}

export default signIn