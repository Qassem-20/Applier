import React, { Fragment } from 'react';
import Nav from '../../components/Nav/companyNav';
import EditOpportunities from '../../assets/images/customizeIcon.png';
import EyeIcon from '../../assets/images/eyeIcon.webp';

const companyHomePage = () => {
  return (
    <Fragment>
    <Nav />
    <section>
    <div className='container '>
      <div className='row'>
        <div className='col-3 m-auto'>
          <h1 id='opportunitiesHeader'>Opportunities</h1>
        </div>
        <div className='col-3 m-auto'>
          <h1>Sorting</h1>
        </div>
        <div className='col-6 m-auto'>
          <input type="text" className='form-control' placeholder='  Search' name="" value="" id='searchInput' />
        </div>
      </div>
    </div>
    </section>
    <div className='row opportunitiesTag'>
      <span className='col-2 opportunitiesMainTags'>Role</span>
      <span className='col-3 opportunitiesMainTags'>Job Description</span>
      <span className='col-1 opportunitiesMainTags'>#Applications</span>
      <span className='col-1 opportunitiesMainTags'>duration</span>
      <span className='col-2 opportunitiesMainTags'>Created at</span>
      <span className='col-1 opportunitiesMainTags'>View</span>
      <span className='col-1 opportunitiesMainTags'>Edit</span>
    </div>
    <div className='row opportunitiesT'>
        <span className='col-2 opportunitiesTags'>Developer</span>
        <span className='col-3 opportunitiesTags'>g4tg45g4g45g45g45g5g45gefrwe</span>
        <span className='col-1 opportunitiesTags'>3/20</span>
        <span className='col-1 opportunitiesTags'>duration</span>
        <span className='col-2 opportunitiesTags'>12/2/2022</span>
        <div className='col-1 d-flex justify-content-center'>
         <a href='/appliedTrainee'><img className='infoImg' src={EyeIcon} alt="view Applications" /></a>
        </div>
        <div className='col-1 d-flex justify-content-center'>
            <a href='/editOpportunity'><img className='infoImg' src={EditOpportunities} alt="Edit Opportunity" /></a>
        </div>
    </div>
      <div className='row opportunitiesT'>
      <span className='col-2 opportunitiesTags'>assurance</span>
      <span className='col-3 opportunitiesTags'>fvervrevevthtaeheheh</span>
      <span className='col-1 opportunitiesTags'>6/20</span>
      <span className='col-1 opportunitiesTags'>duration</span>
      <span className='col-2 opportunitiesTags'>10/01/2022</span>
        <div className='col-1 d-flex justify-content-center'>
            <a href='/appliedTrainee'><img className='infoImg' src={EyeIcon} alt="view Applications" /></a>
        </div>
         <div className='col-1 d-flex justify-content-center'>
            <a href='/editOpportunity'><img className='infoImg' src={EditOpportunities} alt="Edit Opportunities" /></a>
        </div>
    </div>
  </Fragment>
  )
}

export default companyHomePage