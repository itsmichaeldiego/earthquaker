import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="c-header navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              Earthquaker
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/graphs" activeClassName="active">
                  Graphs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
