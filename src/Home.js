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
    const { data } = this.props.data;
    console.log(data);
    return (
      <div>
        Home
      </div>
    );
  }
}

const ConnectHome = connect(mapStateToProps)(Home);
export default ConnectHome;
