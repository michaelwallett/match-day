import express from 'express';
import devServer from 'webpack-dev-middleware';
import hotServer from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../../../webpack.config';

var compiler = webpack(webpackConfig);

var router = express.Router();

router.use(devServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  serverSideRender: true,
  stats: {
    assets: true,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    timings: false,
    version: false
  }
}));

router.use(hotServer(compiler, {
  log: console.log
}));

export default router;
