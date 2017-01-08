import React from 'react';
import Map from 'google-maps-react';
import ReactDOM from 'react-dom';

class MapContainer extends React.Component{
  componentDidMount(){
      this.renderSearchBox();
  }

  componentDidUpdate(prevProps) {
    const {google, map} = this.props;
    if (map !== prevProps.map) {
      this.renderSearchBox();
    }
  }

  renderSearchBox(){
    const {google, map} = this.props;

    if (!google || !map) return;

    const input = this.refs.input;
    const node = ReactDOM.findDOMNode(input);
    let searchBox = new google.maps.places.SearchBox(input);

    searchBox.bindTo('bounds', map);

  }

  render(){
    const props = this.props;

    if (!this.props.loaded){
      return <div>Loading...</div>
    }

    return (
      <div>
        <input id='place-input' ref='input' type='text' placeholder='Search Box' />
        <Map {...props}
            style={{width: '100vw', height: '100vh', position: 'absolute'}}
            zoom={13}
            containerStyle={{position: 'relative'}} />
      </div>
    )
  }
};

export default MapContainer;
