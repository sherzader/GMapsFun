import React from 'react';
import MapContents from './MapContents';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import MarkerManager from '../util/markerManager';

class MapWrapper extends React.Component{
  getNewPlaces(mapProps, map){
    let places = this.searchBox.getPlaces();

    if (!places || places.length === 0) {
      return;
    }

    // let bounds = new google.maps.LatLngBounds();
    this.MarkerManager.updateMarkers(places);
  }

  renderSearchBox(mapProps, map){
    this.map = map;
    // console.log(map);
    const {google} = this.props;
    // console.log(mapProps);

    // if (!google || !map) return;

    const input = document.getElementById('place-input');;
    const node = ReactDOM.findDOMNode(input);
    let searchBox = new google.maps.places.SearchBox(input);
    this.searchBox = searchBox;
    console.log(this.map.getBounds());
    this.searchBox.bindTo('bounds', this.map);
    // console.log(this.searchBox);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    this.searchBox.addListener('places_changed', () => {
      let places = this.searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      let bounds = new google.maps.LatLngBounds();
      this.MarkerManager = new MarkerManager(this.map, bounds);
      this.MarkerManager.updateMarkers(places);
    });
  }


  render(){
    const props = this.props;
    const {google} = this.props;

    return (
      <Map google={google}
        containerStyle={{width: '100%', height: '100vh', position: 'relative'}}
        onReady={this.renderSearchBox.bind(this)}
        zoom={14}>
        <input id='place-input' className='controls' type='text' placeholder='Search Box' />

      </Map>
    );
  }
}

export default MapWrapper;
