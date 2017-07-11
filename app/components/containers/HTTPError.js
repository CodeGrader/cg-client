/* eslint-disable global-require */
import React from 'react';

const HTTPError = ({ code }) => (
  <div>
    <h1 className="error-title">Error {code} </h1>
    <img src={require('../../../static/media/images/empty_box.svg')} className="error-img"/>
  </div>
);

export default HTTPError;
