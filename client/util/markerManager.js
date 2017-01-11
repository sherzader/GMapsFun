export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
    this._createMarker = this._createMarker.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(locations){
    this.locations = locations;

  }

  _locationsToAdd(){
    const currentLocations = this.markers.map( marker => marker );
  }
}
