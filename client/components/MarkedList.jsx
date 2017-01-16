//list of marked
import React from 'react';

class TodoList extends React.Component{

  removeTerritory(index){
    this.props.removeTerritory(index);
  }

  render(){
    //formatting to an array of arrays: [territory object, index]
    let testing = ['rainbows', 'puppies', 'kittens'];
    let marked = [];
    this.props.territories.forEach((territory, i) => {
      if (territory.marked){
        marked.push([territory, i]);
      }
    });
    return(
      <div>
        <h3>Marked Territories</h3>
          <ul>
            {marked.map((territory) => {
                return (<li key={territory[1]}>{territory[0].name}

                          <img className="paw-print-marked"
                            src="https://www.thesage.com/images/PawPrint.png" />
                          <button
                            onClick={this.removeTerritory.bind(this, territory[1])}>X</button>
                        </li>)
                  })
              }
          </ul>
      </div>
    );
  }
};

export default TodoList;
