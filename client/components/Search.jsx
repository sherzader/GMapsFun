import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';

const Search = ({territories, addTerritory, removeTerritory, markTerritory}) => (
      <div>
        <TerritoryMap addTerritory={addTerritory} />
        <TodoList territories={territories}
          removeTerritory={removeTerritory}
          markTerritory={markTerritory}/>
      </div>
);

export default Search;
