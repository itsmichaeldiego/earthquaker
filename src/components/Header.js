import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              Earthquaker
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/home" activeClassName="active">
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
