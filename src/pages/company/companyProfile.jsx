import React from 'react';
import Nav from '../../components/Nav/companyNav';
import Profile from '../../assets/images/profileIcon.png';
import '../../assets/css/company.css';
const companyProfile = () => {
  return (
    <div>
    <Nav />
        <div className='container'>
            <img src={Profile} className='mx-auto' id='imgProfile' alt='Change Profile' />
        </div>
        <div className='container backgroundProfile'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <p className='labelTag'>Full name</p>
              <input type="name" className='inputUser' name="" value="" />
              <p className='labelTag'>Date of Birth</p>
              <input type="date" className='inputUser'name="" value="" />
              <p className='labelTag'>Nationality</p>
              <select>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <p className='labelTag'>Phone Number</p>
              <input type="phone" className='inputUser'name="" value="" />
              <p className='labelTag'>GBA</p>
              <input type="number" className='inputUser'name="" value="" />
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
              <div>
              <label className='labelTag'>Concentrated major?</label>
              <input type="checkbox" name="" value="" /> 
              </div>
              <div>
              <input type="text" className='inputUser' name="" value="" />          
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default companyProfile