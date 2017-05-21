import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <Link to="/home">
          Home
        </Link>
        <Link to="/graphs">
          Graphs
        </Link>
      </div>
    );
  }
}

export default Header;
