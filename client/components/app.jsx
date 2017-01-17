import React from 'react';
import SearchContainer from './SearchContainer';

const App = () => (
  <div>
    <h1 className='center'>Marked
      <img className="paw-print-marked"
            src="https://www.thesage.com/images/PawPrint.png" /></h1>
    <p className='center'>For dogs to keep track of their territory</p>
    <SearchContainer />
  </div>
);

export default App;
