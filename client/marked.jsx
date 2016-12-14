import React from 'react';
import ReactDOM from 'react-dom';

var Greeting = React.createClass({
  render: function() {
    return (
      <p>Hello, Universe</p>
    )
  }
});

ReactDOM.render(
  <Greeting/>,
  document.getElementById('greeting-div')
);
