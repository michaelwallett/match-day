'use strict';

require('babel-register');

var config = require('config');
var app = require('../src/app').default;

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}!`);
});
