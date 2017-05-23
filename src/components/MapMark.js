import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class MapMark extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    $hover: PropTypes.bool,
    earthquake: PropTypes.object,
    activeEarthquakeName: PropTypes.string
  };

  render() {
    const { earthquake, activeEarthquakeName, handleClick } = this.props;
    const { title, magnitude } = earthquake.properties;
    const isActive = earthquake.properties.title === activeEarthquakeName;
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

export default MapMark;
