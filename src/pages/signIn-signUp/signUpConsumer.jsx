import '../../assets/css/signUpSignIn.css';
import WelcomeNav from '../../components/Nav/welcomeNav';
import React, { Fragment, Component } from 'react'

export class signUpConsumer extends Component {
  render() {
    return (
      <Fragment>
      <WelcomeNav />
      <div className='SignUpFormat container'>
        <h1>Welcome to Applier</h1>
        <p>Register your account</p>
        <p className='labelTag'>Full name</p>
        <input type="name" className='inputUser' name="" value="" />
        <p className='labelTag'>Date of Birth</p>
        <input type="date" className='inputUser' name="" value="" />
        <p className='labelTag'>Nationality</p>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <p className='labelTag'>Phone Number</p>
        <input type="phone" className='inputUser' name="" value="" />
        <p className='labelTag'>Email</p>
        <input type="email" className='inputUser' name="" value="" />
        <p className='labelTag'>Password</p>
        <input type="password" className='inputUser' name="" value="" />
        <br />
        <p className='labelTag'>GBA</p>
        <input type="number" className='inputUser' name="" value="" />
        <span>out of</span>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <p className='labelTag'>Major</p>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label className='labelTag'>Concentrated major?</label>
        <input type="checkbox" name="" value="" />
        <input type="text" name="" value="" />
        <p className='labelTag'>Degree</p>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <p className='labelTag'>Collage</p>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <br />
        <p className='labelTag'>CV</p>
        <input type="file" className='inputUser' name="" value="" />
        <p className='labelTag'>Identification Letter <span>(IF EXISTS)</span></p>
        <input type="file" className='inputUser' name="" value="" /> 
        <p className='labelTag'>LinkedIn Profile<span>(IF EXISTS)</span></p>
        <input type="link" className='inputUser' name="" value="" />
        <p className='labelTag'>Profile Picture<span>(IF EXISTS)</span></p>
        <input type="file" className='inputUser' name="" value="" />
        <div>
          <a href='/SignIn'>Already have an account? SignIn</a>
          <button className="btn" type="submit">submit</button>
        </div>
      </div>
    </Fragment>
    )
  }
}

export default signUpConsumer