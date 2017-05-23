import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './store';

import Sidebar from './components/Sidebar';
import Map from './components/Map';

const MAX_LENGTH = 20;

const sortByDate = (a, b) => {
  a = new Date(a.properties.time);
  b = new Date(b.properties.time);
  return a > b ? -1 : a < b ? 1 : 0;
}

const getEarthquakes = (earthquakes, filter) => {
  earthquakes.sort(sortByDate);
  switch (filter) {
    case 'SHOW_LAST':
      return earthquakes
             .filter(e => e.properties.mag >= 2.5)
             .slice(0, MAX_LENGTH);
    case 'SHOW_LAST_SIGNIFICANT':
      return earthquakes
             .filter(e => e.properties.mag >= 4.5)
             .slice(0, MAX_LENGTH);
    default:
      return earthquakes.slice(0, MAX_LENGTH);
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
      },
      activeEarthquake: null
    }
  }

  handleClick(ev, earthquake) {
    ev.preventDefault();
    this.setState({
      center: {
        lat: earthquake.geometry.coordinates[1],
        lng: earthquake.geometry.coordinates[0]
      },
      activeEarthquake: earthquake.properties.title
    })
  }

  render() {
    const { data } = this.props.data;
    const { center, activeEarthquake } = this.state;

    if (!data.features) {
      return null;
    }

    const lastEarthquakes = getEarthquakes(
      data.features,
      'SHOW_LAST'
    );

    const significantEarthQuakes = getEarthquakes(
      lastEarthquakes,
      'SHOW_LAST_SIGNIFICANT'
    );

    return (
      <section className="c-home">
        <Sidebar
          earthquakes={lastEarthquakes}
          significantEarthQuakes={significantEarthQuakes}
          activeEarthquake={activeEarthquake}
          handleClick={this.handleClick.bind(this)}
        />
        <Map
          earthquakes={lastEarthquakes}
          center={center}
          activeEarthquake={activeEarthquake}
          handleClick={this.handleClick.bind(this)}
        />
      </section>
    );
  }
}

const ConnectHome = connect(mapStateToProps)(Home);
export default ConnectHome;
