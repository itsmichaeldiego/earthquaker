import React, { Component } from 'react';

class MapMark extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="c-map__mark">
        <img
          src="img/earthquake-icon.png"
          className="c-map__mark"
          alt={text}
        />
      </div>
    );
  }
}

export default MapMark;
