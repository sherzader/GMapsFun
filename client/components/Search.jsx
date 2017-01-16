import React from 'react';
import TerritoryMap from './map';

const Search = ({territories, markTerritory, removeTerritory}) => (
      <div>
        <TerritoryMap territories={territories}
          markTerritory={markTerritory}
          removeTerritory={removeTerritory}/>
      </div>
);

export default Search;
