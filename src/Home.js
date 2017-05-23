import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import store from './store';

import MapMark from './components/MapMark';

const isToday = (date) => {
  const today = new Date();
  const currentDate = new Date(date);
  const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
  return (currentDate >= yesterday && currentDate < today);
}

const getEarthquakes = (earthquakes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return earthquakes;
    case 'SHOW_LAST':
      return earthquakes
             .filter(e => isToday(e.properties.time));
    case 'SHOW_LAST_SIGNIFICANT':
      return earthquakes
             .filter(e => isToday(e.properties.time) && e.properties.mag >= 4.5);
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

  handleClick(ev, earthquake) {
    ev.preventDefault();
    this.setState({
      center: {
        lat: earthquake.geometry.coordinates[1],
        lng: earthquake.geometry.coordinates[0]
      }
    })
  }

  renderSidebarItems(earthquakes) {
    return earthquakes.map((earthquake, index) => {
      return (
        <a href="#"
          key={index}
          className="list-group-item list-group-item-action u-flex u-flex-center"
          onClick={(ev) => this.handleClick(ev, earthquake)}
        >
          <h4 className="col-md-3 u-txt-align-center">
            {earthquake.properties.mag}
          </h4>
          <div className="u-flex u-flex-direction-column col-md-9">
            <h5>
              {earthquake.properties.place}
            </h5>
            <p>
              {(new Date(earthquake.properties.time)).toDateString()}
              <br/>
              {(new Date(earthquake.properties.time)).toLocaleTimeString()}
            </p>
            <small>
              {`${earthquake.geometry.coordinates[2]}km`}
            </small>
          </div>
        </a>
      );
    });
  }

  renderSidebar(earthquakes, significantEarthQuakes) {
    return (
      <div className="c-sidebar list-group">
        <div className="list-group-item">
          <h3 className="list-group-item-heading">
            Today's earthquakes.
          </h3>
          <p className="list-group-item-text">
            {`${significantEarthQuakes.length}
              of ${earthquakes.length} were above 4.5 magnitude.`}
          </p>
        </div>
        {this.renderSidebarItems(earthquakes)}
      </div>
    )
  }

  renderMarkers(earthquakes) {
    return earthquakes.map(function(earthquake, index) {
      return (
        <MapMark
          key={index}
          lat={earthquake.geometry.coordinates[1]}
          lng={earthquake.geometry.coordinates[0]}
          title={earthquake.properties.title}
          magnitude={earthquake.properties.mag}
        />
      )
    });
  }

  renderMap(earthquakes) {
    const { center } = this.state;
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

  render() {
    const { data } = this.props.data;

    if (!data.features) {
      return null;
    }

    const lastEarthquakes = getEarthquakes(
      data.features,
      'SHOW_LAST'
    );

    const significantEarthQuakes = getEarthquakes(
      data.features,
      'SHOW_LAST_SIGNIFICANT'
    );

    return (
      <section className="c-home">
        {this.renderSidebar(lastEarthquakes, significantEarthQuakes)}
        {this.renderMap(lastEarthquakes)}
      </section>
    );
  }
}

const ConnectHome = connect(mapStateToProps)(Home);
export default ConnectHome;
