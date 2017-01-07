import React from 'react';

class TodoList extends React.Component{
  toggleMark(index){
    this.props.toggleMark(index, false);
  }

  removeTerritory(index){
    this.props.removeTerritory(index);
  }

  render(){
    let unmarked = this.props.territories.filter(territory => {
      return !territory.marked;
    });
    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {unmarked.map((territory, index) => {
              return (<li key={index}>{territory.name}

                        <img className="paw-print-unmarked"
                          onClick={this.toggleMark.bind(this, index)}
                          src="https://www.thesage.com/images/PawPrint.png" />
                        <button
                          onClick={this.removeTerritory.bind(this, index)}>X</button>
                      </li>)
              })
            }
        </ul>
      </div>
    );
  }
};

export default TodoList;
