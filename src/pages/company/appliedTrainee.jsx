import React from 'react';
import '../../style/company.css';
import ShareIcon from'../../assets/ShareIcon.png';
import CustomizeIcon from '../../assets/customizeIcon.png';
import OptionIcon from '../../assets/optionIcon.png';
import EyeIcon from '../../assets/eyeIcon.webp';
import Nav from './navCompany';

const opportunity = () => {
  return (
    <div>
      <Nav />
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-3'>
          <h1 id='opportunitiesHeader'>Qualified candidates</h1>
          <p>Number of applications:</p>
          <p>200</p>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3'>
          <h1>Showing statues data about the applied students</h1>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <p>Job Role:</p>   
              <p>Software Engineer</p>
              <p>Location:</p>
              <p>Riyadh</p>       
            </div>
            <div className='col-sm-12 col-md-6 col-lg-7'>
              <p>Job Description:</p>            
              <p>ieguheriughuerverbviberuvbreu<wbr />vbruvberuvibreuvberiuvberiuvbrivru<wbr />vbruvberuvibreuvberiuvberiuvbrivru<wbr />vbruvberuvibreuvberiuvberiuvbrivru<wbr />vbruvberuvibreuvberiuvberiuvbrivru<wbr />vbruvberuvibreuvberiuvberiuvbrivru<wbr />vbruvberuvibreuvberiuvberiuvbrivru</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-2'>
              <div>
                <img src={ShareIcon} alt="ShareIcon" />
              </div>
              <div>
              <a href='/editOpportunity'><img src={CustomizeIcon} alt="CustomizeIcon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        
      </section>
      <div className='row opportunitiesTag'>
        <span className='col-1 opportunitiesTags'>Name &#8645;</span>
        <span className='col-1 opportunitiesTags'>CV</span>
        <span className='col-1 opportunitiesTags'>LinkedIn</span>
        <span className='col-1 opportunitiesTags'>Phone Number</span>
        <span className='col-2 opportunitiesTags'>University &#8645;</span>
        <span className='col-2 opportunitiesTags'>Major</span>
        <span className='col-1 opportunitiesTags'>GPA &#8645;</span>
        <span className='col-1 opportunitiesTags'>City &#8645;</span>
        <span className='col-1 opportunitiesTags'>Statues</span>
        <span className='col-1 opportunitiesTags'>Info</span>
      </div>
      <div className='row px-auto opportunitiesT'>
        <span className='col-1 mx-auto  opportunitiesTags'>Ahmed</span>
          <div className='col-1 d-flex justify-content-center'>
          <img className='iconSize' src={EyeIcon} alt="EyeIcon" />
          </div>
          <div className='col-1 d-flex justify-content-center'>
          <img className='iconSize' src={EyeIcon} alt="EyeIcon" />
          </div>
        <span className='col-1  opportunitiesTags'>+9665476156</span>
        <span className='col-2 opportunitiesTags'>King Fahad Petroleum and minerals</span>
        <span className='col-2 opportunitiesTags'>Software Engineering</span>
        <span className='col-1 opportunitiesTags'>2/4</span>
        <span className='col-1 opportunitiesTags'>Riyadh</span>
        <span className='col-1 opportunitiesTags'>Applied</span>
        <div className='col-1 d-flex justify-content-center'>
        <a href='/traineeDetails'><img className='iconSize' src={OptionIcon} alt="OptionIcon" /></a>
        </div>
      </div>
      <div className='row px-auto opportunitiesT'>
      <span className='col-1 mx-auto  opportunitiesTags'>Ahmed</span>
        <div className='col-1 d-flex justify-content-center'>
        <img className='iconSize' src={EyeIcon} alt="EyeIcon" />
        </div>
        <div className='col-1 d-flex justify-content-center'>
        <img className='iconSize' src={EyeIcon} alt="EyeIcon" />
        </div>
          <span className='col-1  opportunitiesTags'>+9665476156</span>
          <span className='col-2 opportunitiesTags'>King Fahad Petroleum and minerals</span>
          <span className='col-2 opportunitiesTags'>Software Engineering</span>
          <span className='col-1 opportunitiesTags'>2/4</span>
          <span className='col-1 opportunitiesTags'>Riyadh</span>
          <span className='col-1 opportunitiesTags'>Applied</span>
          <div className='col-1 d-flex justify-content-center'>
          <a href='/traineeDetails'><img className='iconSize' src={OptionIcon} alt="OptionIcon" /></a>
        </div>
    </div>
    </div>
  )
}

export default opportunity