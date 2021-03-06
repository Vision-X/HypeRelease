import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand"></a>
        <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className={window.location.pathname === "/about" ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className={window.location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
