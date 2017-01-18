import React, {PropTypes} from 'react';

class MarkedList extends React.Component{
  render(){
    const {
      unmarkTerritory,
      territories,
    } = this.props;

    return(
      <div className='marked-list'>
        <h3 className='center'>Marked Territories</h3>
          <ul className='scroll'>
            {territories.map((territory, i) => {
                return (<li key={i}>
                          {territory.name}
                          <button
                            onClick={unmarkTerritory.bind(this, territory)}>
                            X
                          </button>
                        </li>)
                  })
              }
          </ul>
      </div>
    );
  }
};

MarkedList.propTypes = {
  unmarkTerritory: PropTypes.func.isRequired,
  territories: PropTypes.array.isRequired,
}

export default MarkedList;
