import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jordan from './Jordan';
import Yeezy from './Yeezy';

class Hero extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3 text-warning">HypeRelease</h1>
        <small className="text-info">version 0.1</small>
        <p className="lead">Use this to find all the release dates for new Yeezy Adidas and Nike Air Jordan sneakers.</p>
        <div className="routerNav">
          <Link to="/yeezy" style={{ textDecoration: 'none' }}><button type="button" className="btn btn-warning">Yeezys</button></Link>
          <Link to="/jordans" style={{ textDecoration: 'none' }}><button type="button" className="btn btn-danger">Jordans</button></Link>
          <Link to="/" style={{ textDecoration: 'none' }}><button type="button" className="btn btn-info">All</button></Link>
        </div>
      </div>
    )
  }
}

export default Hero;
