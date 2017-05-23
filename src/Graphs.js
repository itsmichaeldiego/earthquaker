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
    console.log(data);
    return (
      <div>
        Graphs
      </div>
    );
  }
}

const ConnectGraphs = connect(mapStateToProps)(Graphs);
export default ConnectGraphs;
