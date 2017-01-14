//container of map and to-do/marked lists
import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';

const Search = ({territories, addTerritory, addAndMark, removeTerritory, toggleMark}) => (
      <div>
        <TerritoryMap addTerritory={addTerritory}
          addAndMark={addAndMark} />
        <TodoList territories={territories}
          removeTerritory={removeTerritory}
          toggleMark={toggleMark} />
      </div>
);

export default Search;
