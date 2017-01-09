import React from 'react';
import Map from 'google-maps-react';
import ReactDOM from 'react-dom';

class MapContainer extends React.Component{
  componentDidMount(){
    console.log(this.props);
      this.renderSearchBox();
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    const {google, map} = this.props;
    // if (map !== prevProps.map) {
      this.renderSearchBox();
    // }
  }

  renderSearchBox(){
    const {google, map} = this.props;
    console.log(map);

    if (!google || !map) return;

    const input = document.getElementById('place-input');;
    const node = ReactDOM.findDOMNode(input);
    let searchBox = new google.maps.places.SearchBox(input);
    // searchBox.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
    console.log(map.controls[google.maps.ControlPosition.TOP_LEFT]);

  }

  render(){
    const {google} = this.props;

    if (!this.props.loaded){
      return <div>Loading...</div>
    }

    return (
      <div>
        <input id='place-input' className='controls' type='text' placeholder='Search Box' />
        <Map google={google}
            containerStyle={{width: '0vw', height: '0vh', position: 'relative'}}
            zoom={13}
            />
      </div>
    )
  }
};

export default MapContainer;
