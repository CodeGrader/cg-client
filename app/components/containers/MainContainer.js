import React from 'react';

import SearchEngine from '../SearchEngine'; // eslint-disable-line import/no-named-as-default

const MainContainer = () => (
  <main>
    <section className='company-search-container'>
      <SearchEngine placeholder='Add companies to compare' endpoint='/companies' />
    </section>
    <section>
      <article>
        <p>Hello</p>
      </article>
    </section>
  </main>
);

export default MainContainer;
