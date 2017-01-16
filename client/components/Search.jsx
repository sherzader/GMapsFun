//container of map and to-do/marked lists
import React from 'react';
import TerritoryMap from './map';
import MarkedList from './MarkedList';

const Search = ({territories, markTerritory, removeTerritory}) => (
      <div>
        <TerritoryMap territories={territories} 
          markTerritory={markTerritory}
          removeTerritory={removeTerritory}/>
        <MarkedList territories={territories}
          removeTerritory={removeTerritory} />
      </div>
);

export default Search;
