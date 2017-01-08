import React from 'react';
import MapContainer from './MapContainer';
import Map from 'google-maps-react';

class MapWrapper extends React.Component{
  render(){
    const props = this.props;
    const {google} = this.props;

    return (
      <Map google={google}
          className={'map'}
          visible={false}>
            <MapContainer {...props} />
      </Map>
    );
  }
}

export default MapWrapper;
