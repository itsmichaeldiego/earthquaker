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
    earthquakes: store.getState().earthquakes
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
    };
  }

  handleClick(ev, earthquake) {
    ev.preventDefault();
    this.setState({
      center: {
        lat: earthquake.geometry.coordinates[1],
        lng: earthquake.geometry.coordinates[0]
      }
    });
    store.dispatch({
      type: 'SELECT_EARTHQUAKE',
      earthquake: earthquake
    });
  }

  render() {
    const { earthquakes } = this.props.earthquakes;
    const { center } = this.state;

    if (earthquakes.length === 0) {
      return null;
    }

    const lastEarthquakes = getEarthquakes(
      earthquakes,
      'SHOW_LAST'
    );

    console.log(lastEarthquakes);

    const significantEarthQuakes = getEarthquakes(
      lastEarthquakes,
      'SHOW_LAST_SIGNIFICANT'
    );

    return (
      <section className="c-home">
        <Sidebar
          earthquakes={lastEarthquakes}
          significantEarthQuakes={significantEarthQuakes}
          handleClick={this.handleClick.bind(this)}
        />
        <Map
          earthquakes={lastEarthquakes}
          center={center}
          handleClick={this.handleClick.bind(this)}
        />
      </section>
    );
  }
}

const ConnectHome = connect(mapStateToProps)(Home);
export default ConnectHome;
