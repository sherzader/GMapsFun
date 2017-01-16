//container of map and to-do/marked lists
import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';

const Search = ({territories, markTerritory, removeTerritory, toggleMark}) => (
      <div>
        <TerritoryMap markTerritory={markTerritory}
          removeTerritory={removeTerritory}/>
        <TodoList territories={territories}
          removeTerritory={removeTerritory}
          toggleMark={toggleMark} />
      </div>
);

export default Search;
