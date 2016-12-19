import React from 'react';

class TodoList extends React.Component{
  toggleMark(index, mark){
    this.props.markTerritory(index, mark);
  }

  removeTerritory(index){
    this.props.removeTerritory(index);
  }

  render(){
    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {this.props.territories.map((territory, index) => {
            let print = (territory.marked) ? 'paw-print-marked' : 'paw-print-unmarked';
            return <li key={index}>{territory.name}
              <img className={print} onClick={this.toggleMark.bind(this, index, territory.marked)} src="https://www.thesage.com/images/PawPrint.png" />
              <button onClick={this.removeTerritory.bind(this, index)}>X</button>
            </li>
            })
          }
        </ul>
      </div>
    );
  }
};

export default TodoList;
