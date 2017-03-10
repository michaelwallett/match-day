import config from 'config';

var staticRoute = require(`./${config.env}`).default;

export default staticRoute;
