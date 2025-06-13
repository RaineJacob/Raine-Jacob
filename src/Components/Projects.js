import React from 'react';
import ProjectBox from './ProjectBox';
import HotelBookingImage from '../images/HotelBookingImage.png';
import DeliveryDelayImage from '../images/DeliveryDelayImage.png';
import MarketingAnalysisImage from '../images/MarketingAnalysisImage.png';
import HrAnalyticsImage from '../images/HrAnalyticsImage.png';
import OlistImage from '../images/Olist.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={HotelBookingImage} projectName="Hotel Booking Analysis" />
        <ProjectBox projectPhoto={DeliveryDelayImage} projectName="Delivery Delay Analysis" />
        <ProjectBox projectPhoto={MarketingAnalysisImage} projectName="Marketing Analysis" />
        <ProjectBox projectPhoto={HrAnalyticsImage} projectName="Hr Analytics" />
        <ProjectBox projectPhoto={OlistImage} projectName="Olist Ecommerce Analysis" />
      </div>

    </div>
  )
}

export default Projects
