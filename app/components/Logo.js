import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ isMobile }) => (
  <div id='logo'>
    {isMobile ? (<svg></svg>) : (<span>Job Compare</span>)}
  </div>
);

Logo.propTypes = {
  isMobile: PropTypes.bool,
};

export default Logo;
