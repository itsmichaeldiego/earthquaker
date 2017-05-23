import React, { Component } from 'react';
import cn from 'classnames';

class MapMark extends Component {
  render() {
    const { text, magnitude } = this.props;
    const markClassName = cn(
      'c-map__mark',
      magnitude >= 2.5 && magnitude < 4.5 ? 'c-map__mark--warning' : '',
      magnitude >= 4.5 ? 'c-map__mark--alert' : ''
    );
    return (
      <img
        src="img/earthquake-icon.png"
        className={markClassName}
        alt={text}
      />
    );
  }
}

export default MapMark;
