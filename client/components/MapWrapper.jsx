import React from 'react';
import MapContainer from './MapContainer';
import Map from 'google-maps-react';

class MapWrapper extends React.Component{
  componentDidMount(){
    // console.log('map wrapper', this.props);
  }

  componentDidUpdate(){
    // console.log('update', this.props)
  }

  render(){
    const props = this.props;
    const {google} = this.props;

    return (
      <Map google={google}
        containerStyle={{width: '100%', height: '100vh', position: 'relative'}}
          >
            <MapContainer {...props} />
      </Map>
    );
  }
}

export default MapWrapper;
