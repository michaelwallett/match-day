'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.5em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  background: ', ';\n  color: ', ';\n'], ['\n  font-size: 1.5em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  background: ', ';\n  color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mdColours = require('md-colours');

var _mdColours2 = _interopRequireDefault(_mdColours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? _mdColours2.default.primary : _mdColours2.default.secondary;
}, function (props) {
  return props.primary ? 'white' : _mdColours2.default.primary;
});

var Button = function Button(props) {
  return React.createElement(StyledButton, props);
};

exports.default = Button;