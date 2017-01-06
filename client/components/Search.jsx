import React from 'react';
import TerritoryMap from './map';
import TodoList from './TodoList';
import DoneList from './DoneList';

const Search = ({territories, addTerritory, removeTerritory, markTerritory}) => (
      <div>
        <TerritoryMap addTerritory={addTerritory} />
        <TodoList territories={territories}
          removeTerritory={removeTerritory}
          markTerritory={markTerritory}/>
        <DoneList territories={territories} />
      </div>
);

export default Search;
