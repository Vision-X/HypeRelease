import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import ShowAll from './ShowAll';
import Yeezy from './Yeezy';
import Jordan from './Jordan';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Fragment>
      <Header />
      <Hero />
        <Route exact path="/" component={ShowAll} />
        <Route path="/yeezy" component={Yeezy} />
        <Route path="/jordans" component={Jordan} />
    </Fragment>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
