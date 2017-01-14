import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';
import DoneList from './DoneList';

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
