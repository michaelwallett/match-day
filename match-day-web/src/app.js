import express from 'express';

import webpackAssetsMiddleware from './middleware/webpack-assets';

import staticRoute from './routes/static';
import homeRoute from './routes/home';

var app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(staticRoute);
app.use(webpackAssetsMiddleware);
app.use(homeRoute);

export default app;
