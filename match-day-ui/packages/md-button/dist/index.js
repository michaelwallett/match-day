'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.5em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  background: ', ';\n  color: ', ';\n'], ['\n  font-size: 1.5em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  background: ', ';\n  color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? 'palevioletred' : 'white';
}, function (props) {
  return props.primary ? 'white' : 'palevioletred';
});

exports.default = Button;