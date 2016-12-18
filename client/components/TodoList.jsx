import React from 'react';

class TodoList extends React.Component{
  toggleMark(e){
    let target = e.target;
    console.log(target);
    let currentClass = e.target.className;
    target.className = (currentClass === 'paw-print-unmarked') ? 'paw-print-marked' : 'paw-print-unmarked';
    let i = target.getAttribute('data-index');
    let name = target.getAttribute('data-name');
    let marked = target.getAttribute('data-mark');
    console.log(i, name, target.className);
    this.props.markTerritory(name, target.className, i);
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
            return <li key={index}>{territory.name}
              <img data-index={index} data-name={territory.name} data-mark={territory.marked} className="paw-print-unmarked" onClick={this.toggleMark.bind(this)} src="https://www.thesage.com/images/PawPrint.png" />
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
