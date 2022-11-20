import '../../assets/css/signUpSignIn.css';
import Nav from '../../components/navDesktop.jsx';

import React, { Component, Fragment } from 'react'

export class signUpCompany extends Component {
  render() {
    return (
      <Fragment>
      <Nav />
      <div className='container SignUpFormat'>
      <h1>Welcome to Applier</h1>
      <p>Register your account</p>
      <p className='labelTag'>Organization logo</p>
      <input type="file" className='inputUser' name="" value="" />
      <br />
      <p className='labelTag'>Organization name in English</p>
      <input type="text" className='inputUser' name="" value="" />
      <p className='labelTag'>Organization registration number</p>
      <input type="text" className='inputUser' name="" value="" />
      <p className='labelTag'>Organization phone</p>
      <input type="phone" className='inputUser' name="" value="" />
      <p className='labelTag'>Organization name in Arabic</p>
      <input type="text" className='inputUser' name="" value="" />
      <p className='labelTag'>Organization email</p>
      <input type="email" className='inputUser' name="" value="" />
      <p className='labelTag'>Organization website <span>(if exists)</span> </p>
      <input type="link" className='inputUser' name="" value="" />
      <p className='labelTag'>About organization</p>
      <input type="text" className='inputUser' name="" value="" />
      <p className='labelTag'>Supervisor full name</p>
      <input type="name" className='inputUser' name="" value="" />
      <p className='labelTag'>Supervisor email</p>
      <input type="email" className='inputUser' name="" value="" />
      <p className='labelTag'>Supervisor email confirmation</p>
      <input type="email" className='inputUser' name="" value="" />
      <p className='labelTag'>Supervisor phone</p>
      <input type="phone" className='inputUser' name="" value="" />
      <p className='labelTag'>Password</p>
      <input type="password" className='inputUser' name="" value="" />
      <p className='labelTag'>Password confirmation</p>
      <input type="password" className='inputUser' name="" value="" />
      <p className='labelTag'>Country</p>
      <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <p className='labelTag'>City</p>
      <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <div>
        <a href='/SignIn'>Already have an account? SignIn</a>
        <button className="btn" type="submit">submit</button>
      </div>
      </div>
    </Fragment>
    )
  }
}

export default signUpCompany