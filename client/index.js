import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
// import {HashRouter as Router, Route, IndexRoute} from 'react-router-dom';
import routes from './routes';

import App from './components/App';
import Greetings from './components/greetings';

render( 
  <Router history={browserHistory} routes={routes} /> ,
  document.getElementById('app')
);
