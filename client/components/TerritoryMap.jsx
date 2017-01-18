import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/markerManager';
import MarkedList from './MarkedList';

const sf = {lat: 37.7758, lng: -122.435};
const _mapOptions = {
  center: sf,
  zoom: 13
};
const MARKED_IMAGE = "http://res.cloudinary.com/littlef00t/image/upload/v1484540058/darkpurplepawprint_fzt9jb.png";
const UNMARKED_IMAGE = "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png";

class TerritoryMap extends React.Component{
  componentDidMount(){
    const mapNode = this.refs.map;

    this.map = new google.maps.Map(mapNode, _mapOptions);
    this.markerManager = new MarkerManager(
      this.map,
      this._renderInfoWindow.bind(this)
    );

    const placeInput = document.getElementById('place-input');
    this.searchBox = new google.maps.places.SearchBox(placeInput);
    this.searchBox.bindTo('bounds', this.map);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(placeInput);

    //add listener to searchBox for input change, then update markers
    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();
      const bounds = new google.maps.LatLngBounds();
      this.markerManager.updateMarkers(places, bounds);
    });
  }

  //add territory to to-do list
  _markOrRemoveTerritory(place, e){
    const {
      markTerritory,
      unmarkTerritory,
    } = this.props;

    const markers = this.markerManager.getMarkers();
    const marker = markers.filter(marker =>
      marker.position === place.geometry.location
    );

    if (e.target.textContent === 'Mark'){
      markTerritory(place);
      e.target.textContent = 'Undo';
      marker[0].setIcon(
        MARKED_IMAGE
      );
      this.markerManager.addToMarked(marker[0]);
    } else {
      this._removeTerritory(place);
    }
  }

  _removeTerritory(place){
    const {
      unmarkTerritory,
    } = this.props;

    const markers = this.markerManager.getMarkers();
    const marker = markers.filter(marker =>
      marker.position === place.geometry.location
    );

    unmarkTerritory(place);
    marker[0]['infowindow']['content'].lastChild.lastChild.textContent = 'Mark';
    marker[0].setIcon(
      UNMARKED_IMAGE
    );
    this.markerManager.removeFromMarked(marker[0]);
  }

  _renderInfoWindow(place){
    return (
      <div className='info-window'>
        <h3>{place.name}</h3>
        <button onClick={this._markOrRemoveTerritory.bind(this, place)}>Mark</button>
      </div>
    )
  }

  render(){
    const {
      territories
    } = this.props;
    return (
      <div className='outer-container'>
        <input id='place-input' className='controls' type='text' placeholder='Search for Territories' />
        <div id='map-container' ref='map'></div>
        <MarkedList
          territories={territories}
          unmarkTerritory={this._removeTerritory.bind(this)}/>
      </div>
    )
  }
}

TerritoryMap.propTypes = {
  unmarkTerritory: PropTypes.func.isRequired,
  markTerritory: PropTypes.func.isRequired,
  territories: PropTypes.array.isRequired,
}

export default TerritoryMap;
