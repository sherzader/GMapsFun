import React from 'react';
import MapContents from './MapContents';
import Map from 'google-maps-react';

class MapWrapper extends React.Component{
  render(){
    const props = this.props;
    const {google} = this.props;

    return (
      <Map google={google}
        containerStyle={{width: '100%', height: '100vh', position: 'relative'}}
        zoom={14}>
            <MapContents {...props} />
      </Map>
    );
  }
}

export default MapWrapper;
