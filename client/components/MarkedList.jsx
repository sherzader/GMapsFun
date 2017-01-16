//list of marked
import React from 'react';

class MarkedList extends React.Component{

  removeTerritory(index){
    this.props.removeTerritory(index);
  }

  render(){
    let marked = this.props.territories;
    return(
      <div>
        <h3>Marked Territories</h3>
          <ul>
            {marked.map((territory, i) => {
                return (<li key={i}>{territory.name}

                          <img className="paw-print-marked"
                            src="https://www.thesage.com/images/PawPrint.png" />
                          <button
                            onClick={this.removeTerritory.bind(this, i)}>X</button>
                        </li>)
                  })
              }
          </ul>
      </div>
    );
  }
};

export default MarkedList;
