import React from 'react';

const HTTPError = ({ code }) => (
  <section>
    <h1 className="error-title">Error {code} </h1>
    <div className="error-img-container">
      <img src='/media/images/empty_box.svg' alt="empty box"/>
    </div>
    <p className="error-credit">Icons made by
      <a href="http://www.freepik.com" title="Freepik"> Freepik</a> from
      <a href="http://www.flaticon.com" title="Flaticon"> www.flaticon.com</a> is licensed by
      <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
    </p>
  </section>
);

export default HTTPError;
