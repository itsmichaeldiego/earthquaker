import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import cn from 'classnames';

const mapStateToProps = (state, params) => {
  return {
    selectedEarthquake: state.earthquakes.selectedEarthquake
  };
};

class MapMark extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    $hover: PropTypes.bool,
    earthquake: PropTypes.object,
    selectedEarthquake: PropTypes.object
  }

  isSelected(earthquake) {
    const { selectedEarthquake } = this.props;
    if (!selectedEarthquake) {
      return false;
    }
    return earthquake.id === selectedEarthquake.id;
  }

  render() {
    const { earthquake, handleClick } = this.props;
    const { title, magnitude } = earthquake.properties;
    const isActive = this.isSelected(earthquake);
    const markClassName = cn(
      'c-map__mark',
      magnitude >= 4.5 ? 'c-map__mark--alert' : '',
      this.props.$hover ? 'c-map__mark--hover' : '',
      isActive ? 'c-map__mark--hover' : ''
    );
    const style = {
      zIndex: isActive ? '999' : '0'
    };
    return (
      <img
        src="img/earthquake-icon.png"
        className={markClassName}
        alt={title}
        onClick={(ev) => handleClick(ev, earthquake)}
        style={style}
      />
    );
  }
}

const ConnectMapMark = connect(mapStateToProps)(MapMark);
export default ConnectMapMark;
