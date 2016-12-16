import React from 'react';

class TerritoryMap extends React.Component{

  componentDidMount(){
    let map;
    let service;
    let infoWindow;
    let mapNode = this.refs.map;
    const sf = {lat: 37.7758, lng: -122.435};
    const mapOptions = {
      center: sf,
      zoom: 13
    };

    map = new google.maps.Map(mapNode, mapOptions);

    let input = document.getElementById('place-input');
    let searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];

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

        markers.push(new google.maps.Marker({
          map: map,
          title: place.name,
          icon: "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png",
          position: place.geometry.location
        }));

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
    const mapHeight = {
      height: '500px',
      width: '500px'
    };

    return (
      <div>
        <input id='place-input' type='text' placeholder='Search Box' />
        <div id='map-container' ref='map' style={mapHeight}></div>
      </div>
    )
  }
}

export default TerritoryMap;
