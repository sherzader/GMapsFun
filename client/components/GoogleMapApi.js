import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import MapWrapper from './MapWrapper';

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDH4E1rJ4tVn38eqWRBOdiM9ksQDLEPfpc',
  libraries: ['places']
})(MapWrapper);
