import React from 'react';

class TodoList extends React.Component{
  toggleMark(e){
    console.log(e.target);
    let target = e.target;
    let currentClass = e.target.className;
    target.className = (currentClass === 'paw-print-unmarked') ? 'paw-print-marked' : 'paw-print-unmarked';
  }

  render(){
    return(
      <div>
        <h3>Territories to mark</h3>
        <ul>
          {this.props.territories.map((territory) => {
            return <li key={territory.id}>{territory.name}
              <img className="paw-print-unmarked" onClick={this.toggleMark} src="https://www.thesage.com/images/PawPrint.png" />
            </li>
            })
          }
        </ul>
      </div>
    );
  }
};

export default TodoList;
