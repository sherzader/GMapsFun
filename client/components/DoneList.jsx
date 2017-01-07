import React from 'react';

class DoneList extends React.Component{
  toggleMark(index){
    this.props.toggleMark(index, true);
  }

  removeTerritory(index){
    this.props.removeTerritory(index);
  }

  render(){
    let marked = this.props.territories.filter(territory => {
      return territory.marked;
    });
    return (
      <div>
        <h3>Marked Territories</h3>
          <ul>
            {marked.map((territory, index) => {
                return (<li key={index}>{territory.name}

                          <img className="paw-print-marked"
                            onClick={this.toggleMark.bind(this, index)}
                            src="https://www.thesage.com/images/PawPrint.png" />
                          <button
                            onClick={this.removeTerritory.bind(this, index)}>X</button>
                        </li>)
                  })
              }
          </ul>
      </div>
    )
  }

}

export default DoneList;
