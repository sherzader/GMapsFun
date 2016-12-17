import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';

const Search = ({territories, addTerritory, removeTerritory, markTerritory}) => (
      <div>
        <TodoList territories={territories} removeTerritory={removeTerritory} markTerritory={markTerritory}/>
        <TerritoryMap addTerritory={addTerritory} />
      </div>
);

export default Search;
