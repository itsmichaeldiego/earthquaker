import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

class MapMark extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    earthquake: PropTypes.object
  };

  render() {
    const { earthquake, handleClick } = this.props;
    const { title, magnitude } = earthquake.properties;
    const markClassName = cn(
      'c-map__mark',
      magnitude >= 4.5 ? 'c-map__mark--alert' : '',
      this.props.$hover ? 'c-map__mark--hover' : ''
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
