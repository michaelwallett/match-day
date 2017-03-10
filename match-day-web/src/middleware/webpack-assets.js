import path from 'path';
import _ from 'lodash';

function getAssetKind(assetPath) {
  var ext = path.extname(assetPath).split('.');
  return ext[ext.length - 1];
}

export default (req, res, next) => {
  if (res.locals.webpackStats) {
    var { publicPath, assetsByChunkName } = res.locals.webpackStats.toJson();

    res.locals.webpackAssets = _.mapValues(assetsByChunkName, asset => {
        var assetPaths = Array.isArray(asset) ? asset : [asset];

        return _.map(assetPaths, assetPath => {
          var assetKind = getAssetKind(assetPath);

          return {
            [assetKind]: `${publicPath}${assetPath}`
          };
        });
    });
  } else {
    res.locals.webpackAssets = require('../../build/webpack-assets.json');
  }

  next();
}
