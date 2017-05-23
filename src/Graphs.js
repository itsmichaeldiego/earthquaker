import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, params) => {
  return {
    data: state.data
  };
};

class Graphs extends Component {
  render() {
    return (
      <div className="container">
        <h1>Graphs, coming soon...</h1>
      </div>
    );
  }
}

const ConnectGraphs = connect(mapStateToProps)(Graphs);
export default ConnectGraphs;
