import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './store';

const mapStateToProps = (state, params) => {
  return {
    data: store.getState().data
  };
};

class Graphs extends Component {
  render() {
    const { data } = this.props.data;
    return (
      <div className="container">
        <h1>Graphs, coming soon...</h1>
      </div>
    );
  }
}

const ConnectGraphs = connect(mapStateToProps)(Graphs);
export default ConnectGraphs;
