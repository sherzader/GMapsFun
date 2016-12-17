import React from 'react';

class TodoList extends React.Component{
  render(){
    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {this.props.territories.map((territory) => {
            return <li key={territory.id}>{territory.name}
              <img className="paw-print-unmarked" src="https://www.thesage.com/images/PawPrint.png" />
            </li>
            })
          }
        </ul>
      </div>
    );
  }
};

export default TodoList;
