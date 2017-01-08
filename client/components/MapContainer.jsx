import React from 'react';
import Map from 'google-maps-react';

class MapContainer extends React.Component{
  render(){
    if (!this.props.loaded){
      return <div>Loading...</div>
    }

    return (
      <div>
        <Map google={this.props.google}
            style={{width: '300px', height: '300px', position: 'relative'}}
            zoom={13} />
      </div>
    )
  }
};

export default MapContainer;
