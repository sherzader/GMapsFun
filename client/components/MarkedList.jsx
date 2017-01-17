import React from 'react';

class MarkedList extends React.Component{

  removeTerritory(i, territory){
    this.props.removeTerritory(i, territory);
  }

  render(){
    let marked = this.props.territories;
    return(
      <div className='marked-list'>
        <h3 className='center'>Marked Territories</h3>
          <ul>
            {marked.map((territory, i) => {
                return (<li key={i}>{territory.name}
                          <img className="paw-print-marked"
                            src="https://www.thesage.com/images/PawPrint.png" />
                          <button
                            onClick={this.removeTerritory.bind(this, i, territory)}>X</button>
                        </li>)
                  })
              }
          </ul>
      </div>
    );
  }
};

export default MarkedList;
