import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';

let app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));
app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000 '));
