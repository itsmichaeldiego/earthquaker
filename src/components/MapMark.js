import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class MapMark extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    earthquake: PropTypes.object,
    activeEarthquakeName: PropTypes.string
  };

  render() {
    const { earthquake, activeEarthquakeName, handleClick } = this.props;
    const { title, magnitude } = earthquake.properties;
    const markClassName = cn(
      'c-map__mark',
      magnitude >= 4.5 ? 'c-map__mark--alert' : '',
      this.props.$hover ? 'c-map__mark--hover' : '',
      earthquake.properties.title === activeEarthquakeName ? 'c-map__mark--hover' : ''
    );
    return (
      <img
        src="img/earthquake-icon.png"
        className={markClassName}
        alt={title}
        onClick={(ev) => handleClick(ev, earthquake)}
      />
    );
  }
}

export default MapMark;
