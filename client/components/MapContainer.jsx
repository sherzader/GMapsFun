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
            style={{width: '100vw', height: '100vh', position: 'absolute'}}
            zoom={13}
            containerStyle={{position: 'relative'}} />
      </div>
    )
  }
};

export default MapContainer;
