'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var GalleryByReactApp = React.createClass({
  displayName: 'GalleryByReactApp',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'main' },
      React.createElement(
        ReactTransitionGroup,
        { transitionName: 'fade' },
        React.createElement('img', { src: imageURL })
      )
    );
  }
});
React.render(React.createElement(GalleryByReactApp, null), document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;