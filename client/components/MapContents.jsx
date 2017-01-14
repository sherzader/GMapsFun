import React from 'react';
import ReactDOM from 'react-dom';

class MapContents extends React.Component{

  componentDidMount() {
    console.log(this.props);
      const {map} = this.props;
      this.renderSearchBox();
      map.addListener('bounds_changed', () => {
        console.log('bounds changed');
      })
  }

  componentDidUpdate(prevProps) {
    const {google, map} = this.props;
    if (map !== prevProps.map) {
      this.renderSearchBox();
    }
  }

  renderSearchBox() {
    const {google, map} = this.props;
    let markers = [];
    console.log(this.props);

    if (!google || !map) return;

    const input = document.getElementById('place-input');;
    const node = ReactDOM.findDOMNode(input);
    let searchBox = new google.maps.places.SearchBox(input);
    searchBox.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    // map.addListener('bounds_changed', () => {
    //   searchBox.setBounds(map.getBounds());
    // });

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
          position: place.geometry.location
        });
        console.log(marker);

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

  render() {
    const {
      loaded,
    } = this.props;

    return (
      <div>
        {
          loading
          ? <div>Loading...</div>
          : <input id='place-input' className='controls' type='text' placeholder='Search Box' />
        }
      </div>
    )
  }
};

export default MapContents;
