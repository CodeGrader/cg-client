import React from 'react';

const HTTPError = ({ code }) => (
  <section>
    <div className='error-title'>
      <h1>Error {code} </h1>
      <h6> Sorry, Not Found</h6>
    </div>
    <div className='error-img-container'>
      <img src='/media/images/empty_box.svg' alt='empty box'/>
    </div>
    <p className='error-credit'>Icons made by&nbsp;
      <a href='http://www.freepik.com' title='Freepik'>Freepik</a> from&nbsp;
      <a href='http://www.flaticon.com' title='Flaticon'>www.flaticon.com</a> is licensed by&nbsp;
      <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0
        BY</a>
    </p>
  </section>
);

export default HTTPError;
