import React from 'react';

const TodoList = ({ territories }) => {
    

    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {territories.map((territory) => {
            return <li key={territory.id}>{territory.name}
              <img className="paw-print" src="https://www.thesage.com/images/PawPrint.png" />
              </li>
            })
          }
        </ul>
      </div>
    );
};

export default TodoList;
