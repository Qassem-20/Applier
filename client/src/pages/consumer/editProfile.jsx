import '../../assets/css/consumer.css';
import Profile from'../../assets/images/profileIcon.png';
import ConsumerNav from '../../components/Nav/consumerNav';
import React, { Fragment, Component } from 'react'

export class editProfile extends Component {
  render() {
    return (
      <Fragment>
      <ConsumerNav />
      <div className='container'>
          <img src={Profile} className='mx-auto' id='imgProfile' alt='Change Profile' />
      </div>
      <div className='container backgroundProfile'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p className='labelTag'>Full name</p>
            <input type="name" className='inputStyling' name="" value="" />
            <p className='labelTag'>Date of Birth</p>
            <input type="date" className='inputStyling'name="" value="" />
            <p className='labelTag'>Nationality</p>
            <select className='inputStyling'>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <p className='labelTag'>Phone Number</p>
            <input type="phone" className='inputStyling'name="" value="" />
            <p className='labelTag'>GBA</p>
            <input type="number" className='inputStyling'name="" value="" />
            <span>out of</span>
            <select className='inputStyling'>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <p className='labelTag'>Major</p>
            <select className='inputStyling'>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <div>
            <label className='labelTag'>Concentrated major?</label>
            <input type="checkbox" name="" value="" /> 
            </div>
            <div>
            <input type="text" className='inputStyling' name="" value="" />          
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p className='labelTag'>Degree</p>
            <select className='inputStyling'>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <p className='labelTag'>Collage</p>
            <select className='inputStyling'>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <br />
            <p className='labelTag'>CV</p>
            <input type="file" className='inputStyling' name="" value="" />
            <p className='labelTag'>Identification Letter <span>(IF EXISTS)</span></p>
            <input type="file" className='inputStyling' name="" value="" /> 
            <p className='labelTag'>LinkedIn Profile<span>(IF EXISTS)</span></p>
            <input type="link" className='inputStyling' name="" value="" />
            <p className='labelTag'>Profile Picture<span>(IF EXISTS)</span></p>
            <input type="file" className='inputStyling' name="" value="" />
          </div>
        </div>
      </div>
  </Fragment>
    )
  }
}

export default editProfile