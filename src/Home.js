import React, { Component } from 'react';

import Counter from './components/Counter';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Counter />
      </div>
    );
  }
}

export default Home;
