import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';
import DoneList from './DoneList';

const Search = ({territories, addTerritory, removeTerritory, toggleMark}) => (
      <div>
        <TerritoryMap addTerritory={addTerritory} />
        <TodoList territories={territories}
          removeTerritory={removeTerritory}
          toggleMark={toggleMark} />
        <DoneList territories={territories}
          removeTerritory={removeTerritory}
          toggleMark={toggleMark} />
      </div>
);

export default Search;
