import React from 'react';
// import Hangman from '../Hangman';

const HTTPError = ({ code }) => (
  <div>
    <h1>Error {code}</h1>
    <h2>Hangman</h2>
    <p>Use the alphabet below to guess the word, or click hint to get a clue.</p>
  </div>
);

export default HTTPError;
