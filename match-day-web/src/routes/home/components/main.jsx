import React from 'react';
import ReactDOM from 'react-dom';

var rootElement = document.getElementById('root');

var render = () => {
  var Home = require('./home').default;

  ReactDOM.render(
    <Home />,
    rootElement
  );
}

if (module.hot) {
  var renderApp = render;

  var renderError = (error) => {
    var RedBox = require('redbox-react');

    ReactDOM.render(
      <RedBox error={error} />,
      rootElement
    );
  }

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  }

  module.hot.accept('./home', render);
}

render();
