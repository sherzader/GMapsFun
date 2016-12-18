import React from 'react';

class TodoList extends React.Component{
  toggleMark(e){
    e.preventDefault();
    let target, currentClass, i, name, marked;
    target = e.target;
    console.log(target);
    currentClass = e.target.className;
    target.className = (currentClass === 'paw-print-unmarked') ? 'paw-print-marked' : 'paw-print-unmarked';
    i = target.getAttribute('data-index');
    name = target.getAttribute('data-name');
    marked = target.getAttribute('data-mark');
    this.props.markTerritory(name, marked, i);
    console.log(i, name, marked);

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
              <img data-index={index} data-name={territory.name} data-mark={territory.marked} className={print} onClick={this.toggleMark.bind(this)} src="https://www.thesage.com/images/PawPrint.png" />
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
