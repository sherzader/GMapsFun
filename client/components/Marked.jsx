import React from 'react';
import SearchMapContainer from './SearchMapContainer';

const Marked = () => (
  <div>
    <h1 className='center'>
      Marked
      <img className="paw-print-marked"
        src="https://www.thesage.com/images/PawPrint.png" />
    </h1>
    <p className='center'>For dogs to keep track of their territory</p>
    <SearchMapContainer />
  </div>
);

export default Marked;
