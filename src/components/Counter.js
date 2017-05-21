import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';

const mapStateToProps = (state, params) => {
  return {
    counter: store.getState().counter
  };
};

class Counter extends Component {
  onIncrement() {
    store.dispatch({
      type: 'INCREMENT'
    });
  }

  onDecrement() {
    store.dispatch({
      type: 'DECREMENT'
    });
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

const ConnectCounter = connect(mapStateToProps)(Counter);
export default ConnectCounter;
