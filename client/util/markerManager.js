export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
    this._createMarker = this._createMarker.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(locations){
    this.locations = locations;
    this._locationsToAdd().forEach(this._createMarkerFromLocation);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _locationsToAdd(){
    const currentMarkers = this.markers.map( marker => marker.id );
    return this.locations.filter( location => !currentMarkers.includes(location.id));
  }

  _markersToRemove(){
    const locationIds = this.locations.map( location => location.id );
    return this.markers.filter( marker => !locationIds.includes(marker.id));
  }

  _createMarkerFromLocation(location){

  }

  _removeMarker(marker){
    const i = this.markers.indexOf(marker);
    this.markers[i].setMap(null);
    this.markers.splice(i, 1);
  }
}
