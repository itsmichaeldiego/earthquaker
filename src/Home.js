import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import store from './store';

import MapMark from './components/MapMark';

const isToday = (date) => {
  const today = new Date();
  const currentDate = new Date(date);
  return currentDate.setHours(0,0,0,0) === today.setHours(0,0,0,0);
}

const getEarthquakes = (earthquakes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return earthquakes;
    case 'SHOW_LATEST':
      return earthquakes.filter(e => isToday(e.properties.time));
    default:
      return earthquakes;
  }
}

const mapStateToProps = (state, params) => {
  return {
    data: store.getState().data
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 0,
        lng: 0
      }
    }
  }

  renderMarkers(earthquakes) {
    return earthquakes.map(function(earthquake, index) {
      return (
        <MapMark
          key={index}
          lat={earthquake.geometry.coordinates[1]}
          lng={earthquake.geometry.coordinates[0]}
          title={earthquake.properties.title}
        />
      )
    });
  }

  renderMap() {
    const { center } = this.state;
    const { data } = this.props.data;

    if (!data.features) {
      return null;
    }

    const earthquakes = getEarthquakes(
      data.features,
      'SHOW_LATEST'
    );

    return (
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={0}
        maxZoom={100}
        minZoom={0}
      >
        {this.renderMarkers(earthquakes)}
      </GoogleMapReact>
    )
  }

  render() {
    return (
      <div className="c-map">
        {this.renderMap()}
      </div>
    );
  }
}

const ConnectHome = connect(mapStateToProps)(Home);
export default ConnectHome;
