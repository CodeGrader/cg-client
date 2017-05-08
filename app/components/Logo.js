import React from 'react';

const Logo = ({ isMobile }) => (
  <div id="logo">
    {isMobile ? (<svg></svg>) : (<span>Job Compare</span>)}
  </div>
);

export default Logo;
