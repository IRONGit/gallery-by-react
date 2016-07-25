'use strict';

require('core-js/fn/object/assign');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Render the main component into the dom
_reactDom2.default.render(_react2.default.createElement(_Main2.default, null), document.getElementById('app'));