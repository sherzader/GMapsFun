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
    }

    map = new google.maps.Map(mapNode, mapOptions);

     let request = {
       location: sf,
       radius: '2000',
       type: ['park']
     };

     infoWindow = new google.maps.InfoWindow();

     service = new google.maps.places.PlacesService(map);
     service.nearbySearch(request, callback);


    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }


    function createMarker(place) {
      let placeLoc = place.geometry.location;
      let marker = new google.maps.Marker({
        map: map,
        icon: "http://res.cloudinary.com/littlef00t/image/upload/v1481759433/ojvig5yzrbwt1fzej4wc.png",
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', () => {
        console.log(place.name);
      });
    }

  }

  render(){
    const mapHeight = {
      height: '500px',
      width: '500px'
    };

    return (
      <div>
        <input id='place-input' type='text' placeholder='Search Box'>
        <div id='map-container' ref='map' style={mapHeight}></div>
      </div>
    )
  }
}

export default TerritoryMap;
