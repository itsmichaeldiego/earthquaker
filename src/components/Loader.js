import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state, params) => {
  return {
    isFetching: state.earthquakes.isFetching
  };
};

class Loader extends Component {
  static propTypes = {
    isFetching: PropTypes.bool
  };

  render() {
    const { isFetching } = this.props;
    if (!isFetching) {
      return null;
    }
    return (
      <div>
        <div id="loader"
          className="modal fade in u-flex u-items-center u-justify-content-center"
          data-backdrop="static"
          data-keyboard="false"
        >
          <div className="c-loader">
          </div>
        </div>
        <div className="modal-backdrop fade in"></div>
      </div>
    );
  }
}

const ConnectLoader = connect(mapStateToProps)(Loader);
export default ConnectLoader;
