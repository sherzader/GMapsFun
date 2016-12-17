import React from 'react';

const TodoList = ({ territories }) => {
    const territoryNames = Object.keys(territories);

    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {territoryNames.map((name, i) => {
            return <li key={i}>{name}</li>
            })
          }
        </ul>
      </div>
    );
};

export default TodoList;
