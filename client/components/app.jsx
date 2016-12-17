import React from 'react';
import TerritoryMap from './map';
import TodoListContainer from './TodoListContainer';

const App = () => (
  <div>
    <h1>Marked</h1>
    <p>For dogs to keep track of their territory</p>
    <TodoListContainer />
    <TerritoryMap />
  </div>
);

export default App;
