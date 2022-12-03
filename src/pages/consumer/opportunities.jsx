import '../../assets/css/consumer.css';
import InfoIcon from'../../assets/images/infoIcon.png';
import Nav from '../../components/navDesktop.jsx';

import React, { Component } from 'react'

export class opportunities extends Component {
  render() {
    return (
      <div>
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
        <span className='col-3 opportunitiesMainTags'>Company</span>
        <span className='col-3 opportunitiesMainTags'>Role</span>
        <span className='col-3 opportunitiesMainTags'>Statues</span>
        <span className='col-3 opportunitiesMainTags'>info</span>
      </div>
      <div className='row opportunitiesT'>
        <span className='col-3 opportunitiesTags'>Amazon</span>
        <span className='col-3 opportunitiesTags'>Software Engineer</span>
        <span className='col-3 opportunitiesTags'>Applied</span>
        <div className='col-3 d-flex justify-content-center'>
        <img className='infoImg' src={InfoIcon} alt="InfoIcon" />
        </div>
      </div>
        <div className='row opportunitiesT'>
        <span className='col-3 opportunitiesTags'>Amazon</span>
        <span className='col-3 opportunitiesTags'>Software Engineer</span>
        <span className='col-3 opportunitiesTags'>Applied</span>
        <div className='col-3 d-flex justify-content-center'>
        <img className='infoImg' src={InfoIcon} alt="InfoIcon" />
        </div>
      </div>
    </div>
    )
  }
}

export default opportunities