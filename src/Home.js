import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './store';

const mapStateToProps = (state, params) => {
  return {
    data: store.getState().data
  };
};

class Home extends Component {
  render() {
    const { isFetching, data } = this.props.data;
    return (
      <div>
        <h1>
          {isFetching ? 'Loading...' : 'Loaded!!: '}
        </h1>
        <div>
          {JSON.stringify(data)}
        </div>
      </div>
    );
  }
}

const ConnectHome = connect(mapStateToProps)(Home);
export default ConnectHome;
