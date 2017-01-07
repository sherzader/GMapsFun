import React from 'react';

class TodoList extends React.Component{
  toggleMark(index, mark){
    this.props.toggleMark(index, mark);
    // console.log(territory);
  }

  removeTerritory(index){
    this.props.removeTerritory(index);
    // console.log(territory);
  }

  render(){
    //formatting to an array of arrays: [territory object, index]
    let unmarked = [];
    let marked = [];
    this.props.territories.forEach((territory, i) => {
      if (territory.marked){
        marked.push([territory, i]);
      } else {
        unmarked.push([territory, i]);
      }
    });
    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {unmarked.map(territory => {
              return (<li key={territory[1]}>{territory[0].name}

                        <img className="paw-print-unmarked"
                          onClick={this.toggleMark.bind(this, territory[1], false)}
                          src="https://www.thesage.com/images/PawPrint.png" />
                        <button
                          onClick={this.removeTerritory.bind(this, territory[1])}>X</button>
                      </li>)
              })
            }
        </ul>
        <h3>Marked Territories</h3>
          <ul>
            {marked.map((territory) => {
                return (<li key={territory[1]}>{territory[0].name}

                          <img className="paw-print-marked"
                            onClick={this.toggleMark.bind(this, territory[1], true)}
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
