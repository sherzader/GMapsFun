import React from 'react';
import MapContents from './MapContents';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';

class MapWrapper extends React.Component{
  getBounds(){
    console.log(this.map.getBounds());
  }

  renderSearchBox(mapProps, map){
    this.map = map;
    const {google} = this.props;
    let markers = [];
    console.log(this.props);
    console.log(this.map);

    // if (!google || !map) return;

    const input = document.getElementById('place-input');;
    const node = ReactDOM.findDOMNode(input);
    let searchBox = new google.maps.places.SearchBox(input);
    searchBox.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    // map.addListener('bounds_changed', () => {
    //   searchBox.setBounds(map.getBounds());
    // });
    // map.addListener('bounds_changed', () => {
    //   console.log('testing bounds changed');
    // })

    searchBox.addListener('places_changed', () => {
      let places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      markers.forEach( marker => {
        marker.setMap(null);
      });
      markers = [];

      let bounds = new google.maps.LatLngBounds();
      places.forEach( place => {
        if (!place.geometry){
          console.log('returned place has no geometry');
          return;
        }

        let marker = new google.maps.Marker({
          map: map,
          title: place.name,
          icon: "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png",
          position: place.geometry.location,
          id: place.id
        });
        console.log(marker.id);
        markers.push(marker);

        google.maps.event.addListener(marker, 'click', () => {
          console.log(place.name);
          this.props.addTerritory(place.name, place.id);
        });

        if (place.geometry.viewport) {
           bounds.union(place.geometry.viewport);
         } else {
           bounds.extend(place.geometry.location);
         }
      });

      map.fitBounds(bounds);
    });
  }


  render(){
    const props = this.props;
    const {google} = this.props;

    return (
      <Map google={google}
        containerStyle={{width: '100%', height: '100vh', position: 'relative'}}
        onReady={this.renderSearchBox.bind(this)}
        onDragend={this.getBounds.bind(this)}
        zoomChanged={this.getBounds.bind(this)}
        zoom={14}>
        <input id='place-input' className='controls' type='text' placeholder='Search Box' />

      </Map>
    );
  }
}

export default MapWrapper;
