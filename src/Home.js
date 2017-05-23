import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import store from './store';

const MIN_MAG = 2.5;

const isToday = (firstDate, secondDate) => {
  return firstDate.setHours(0,0,0,0) ===
         secondDate.setHours(0,0,0,0);
}

const getEarthquakes = (earthquakes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return earthquakes;
    case 'SHOW_LATEST_SIGNIFICANT':
      return earthquakes.filter(function(earthquake, index) {
        const today = new Date();
        const date = new Date(earthquake.properties.time);
        return earthquake.properties.mag >= MIN_MAG && isToday(today, date);
      });
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

  renderMap() {
    const { data } = this.props.data;
    if (!data.features) {
      return null;
    }
    const earthquakes = getEarthquakes(
      data.features,
      'SHOW_LATEST_SIGNIFICANT'
    );
    earthquakes.map(function(earthquake, index) {
      const date = new Date(earthquake.properties.time);
      console.log(date);
    });
    return (
      <GoogleMapReact
        defaultCenter={{lat: 59.95, lng: 30.33}}
        defaultZoom={11}
      >
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
