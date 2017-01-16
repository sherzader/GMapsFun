import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/markerManager';
import MarkedList from './MarkedList';

const sf = {lat: 37.7758, lng: -122.435};

let _mapOptions = {
  center: sf,
  zoom: 13
};

class TerritoryMap extends React.Component{
  componentDidMount(){
    this.renderInfoWindow = this._renderInfoWindow.bind(this);

    const mapNode = this.refs.map;

    this.map = new google.maps.Map(mapNode, _mapOptions);
    this.markerManager = new MarkerManager(
      this.map,
      this.renderInfoWindow
    );


    let input = document.getElementById('place-input');
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.bindTo('bounds', this.map);
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

//add listener to searchBox input changed, updates markers
    this.searchBox.addListener('places_changed', () => {
      let places = this.searchBox.getPlaces();

      let bounds = new google.maps.LatLngBounds();
      this.markerManager.updateMarkers(places, bounds);
    });
  }

//add territory to to-do list
  _markorRemoveTerritory(place, e){
    let markers = this.markerManager.getMarkers();
    let marker = markers.filter(marker =>
      marker.position === place.geometry.location
    );

    if (e.target.textContent === 'Mark'){
      this.props.markTerritory(place);
      e.target.textContent = 'Undo';
      marker[0].setIcon(
        "http://res.cloudinary.com/littlef00t/image/upload/v1484540058/darkpurplepawprint_fzt9jb.png"
      );
      this.markerManager.addToMarked(marker[0]);
    } else {
      let idx = this.props.territories.indexOf(place);
      this.props.removeTerritory(idx);
      e.target.textContent = 'Mark';
      marker[0].setIcon(
        "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png"
      );
      this.markerManager.removeFromMarked(marker[0]);
    }
  }

  _removeTerritoryFromList(idx, place){
    let markers = this.markerManager.getMarkers();
    let marker = markers.filter(marker =>
      marker.position === place.geometry.location
    );
    this.props.removeTerritory(idx);
    marker[0]['infowindow']['content'].lastChild.lastChild.textContent = 'Mark';
    marker[0].setIcon(
      "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png"
    );
    this.markerManager.removeFromMarked(marker[0]);
  }

  _renderInfoWindow(place){
    return (
      <div>
        <h1>{place.name}</h1>
        <button onClick={this._markorRemoveTerritory.bind(this, place)}>Mark</button>
      </div>
    )
  }

  render(){
    const mapContainerStyle = {
      width: '100%',
      height: '100vh',
      position: 'relative'
    };

    return (
      <div>
        <input id='place-input' type='text' placeholder='Search Box' />
        <div id='map-container' ref='map' style={mapContainerStyle}></div>
        <MarkedList {...this.props} removeTerritory={this._removeTerritoryFromList.bind(this)}/>
      </div>
    )
  }
}

export default TerritoryMap;
