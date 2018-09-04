import React from 'react';
import { Link } from 'react-router-dom'

export const CampaignHeader = () => {
  return (
    <div>
      <h4>Select ad template</h4>
      <ul>
        <li><Link to='/templates/1'>Single Image Ad</Link></li>
        <li><Link to='/templates/2'>Multi Image Carousel Ad</Link></li>
        <li><Link to='/templates/3'>Multi Image Slider Ad</Link></li>
      </ul>
    </div>
  );
};

export default CampaignHeader;
