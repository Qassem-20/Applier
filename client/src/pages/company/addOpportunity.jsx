import React from 'react';
import Nav from '../../components/Nav/companyNav';
import '../../assets/css/company.css';
const addOpportunity = () => {
  return (
    <div>
    <Nav />
    <section>
      <div className='container backgroundAdd'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
          <p className='labelTag'>Job Role</p>
          <input type="input" className='inputStyling' name="" value="" />
          <p className='labelTag'>Job Description</p>
          <input type="text" className='inputStyling'name="" value="" />
          <p className='labelTag'>Departments looking for</p>
          <select>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <p className='labelTag'>Major Looking for</p>
          <select>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <p className='labelTag'>Training Duration</p>
          <input type="number" className='inputStyling'name="" value="" />
        </div>  
          <div className='col-sm-12 col-md-6'>
            <p className='labelTag'>Type of Job</p>
            <input type="radio" name="" value="" /> 
            <input type="radio" name="" value="" /> 
            <input type="radio" name="" value="" /> 
            <div>
            <label className='labelTag'>Paid Opportunity?</label>
            <input type="checkbox" name="" value="" /> 
            </div>
            <div>
            <input type="text" className='inputStyling' name="" value="" />          
            </div>
            <p className='labelTag'>Place of the Job</p>
            <input type="text" className='inputStyling' name="" value="" />
            <div>
            <button className='primaryButton' type="submit">add opportunity</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default addOpportunity