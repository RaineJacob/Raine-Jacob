import React from 'react';
import ProjectBox from './ProjectBox';
import HotelBookingImage from '../images/HotelBookingImage.png';
import DeliveryDelayImage from '../images/DeliveryDelayImage.png';
import MarketingAnalysisImage from '../images/MarketingAnalysisImage.png';
import HrAnalyticsImage from '../images/HrAnalyticsImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects
