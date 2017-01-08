import React from 'react';
import GoogleMapApi from './GoogleMapApi';
import TodoList from './TodoList';
import DoneList from './DoneList';

const Search = ({territories, addTerritory, removeTerritory, toggleMark}) => (
      <div>
        <GoogleMapApi addTerritory={addTerritory} />
        <TodoList territories={territories}
          removeTerritory={removeTerritory}
          toggleMark={toggleMark} />
      </div>
);

export default Search;
