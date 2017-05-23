import React, { Component } from 'react';

import Header from './components/Header';

import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Loader />
      </div>
    );
  }
}

export default App;
