import React from 'react';
import { Provider } from 'react-redux';
import Marked from './Marked.jsx';

const Root = ({store}) => (
  <Provider store={store}>
    <Marked />
  </Provider>
)

export default Root;
