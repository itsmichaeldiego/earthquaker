import React, { Component, PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMark from './MapMark';

class Map extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
    earthquakes: PropTypes.array,
    center: PropTypes.object
  };

  renderMarkers(earthquakes) {
    const { handleClick } = this.props;
    return earthquakes.map(function(earthquake, index) {
      return (
        <MapMark
          key={index}
          lat={earthquake.geometry.coordinates[1]}
          lng={earthquake.geometry.coordinates[0]}
          earthquake={earthquake}
          handleClick={handleClick}
        />
      )
    });
  };

  render() {
    const { center, earthquakes } = this.props;
    return (
      <div className="c-map">
        <GoogleMapReact
          center={center}
          defaultZoom={0}
          maxZoom={100}
          minZoom={0}
        >
          {this.renderMarkers(earthquakes)}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
