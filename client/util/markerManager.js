import ReactDOM from 'react-dom';

export default class MarkerManager {
  constructor(map, addTerritory, renderInfoWindow){
    this.map = map;
    this.addTerritory = addTerritory;
    this.renderInfoWindow = renderInfoWindow;
    this.markers = [];
    this._createMarker = this._createMarker.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(locations, bounds){
    this.bounds = bounds;
    this.locations = locations;
    this._locationsToAdd().forEach(this._createMarker);
    this._markersToRemove().forEach(this._removeMarker);
    this.map.fitBounds(this.bounds);
  }

  _locationsToAdd(){
    const currentMarkers = this.markers.map( marker => marker.id );
    return this.locations.filter( location => !currentMarkers.includes(location.id));
  }

  _markersToRemove(){
    const locationIds = this.locations.map( location => location.id );
    return this.markers.filter( marker => !locationIds.includes(marker.id));
  }

  _createMarker(place){
    let marker = new google.maps.Marker({
      map: this.map,
      title: place.name,
      icon: "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png",
      position: place.geometry.location,
      id: place.id
    });

    let contentString = document.createElement('div');
    ReactDOM.render(this.renderInfoWindow(place), contentString);

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    // marker.addListener('click', () => this.addTerritory(place.name));
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });

    this.markers.push(marker);

    if (place.geometry.viewport) {
       this.bounds.union(place.geometry.viewport);
     } else {
       this.bounds.extend(place.geometry.location);
     }
  }

  _removeMarker(marker){
    const i = this.markers.indexOf(marker);
    this.markers[i].setMap(null);
    this.markers.splice(i, 1);
  }
}
