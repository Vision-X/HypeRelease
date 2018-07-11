import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jordan from './Jordan';
import Yeezy from './Yeezy';

class Hero extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3 text-warning">HypeRelease</h1>
        <small className="text-info">version 0.1</small>
        <p className="lead">Use this to find all the release dates for new Yeezy Adidas shoes</p>
        <hr className="my-4" />
        <div className="routerNav">
          <button type="button" className="btn btn-warning"><Link to="/yeezy" style={{ textDecoration: 'none' }}>Yeezys</Link></button>
          <button type="button" className="btn btn-danger"><Link to="/jordans" style={{ textDecoration: 'none' }}>Jordans</Link></button>
          <button type="button" className="btn btn-info"><Link to="/" style={{ textDecoration: 'none' }}>All</Link></button>
        </div>
      </div>
    )
  }
}

export default Hero;
