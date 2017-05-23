import React, { Component } from 'react';

class Sidebar extends Component {
  renderSidebarItems() {
    const {lastEarthquakes, handleClick} = this.props;
    return lastEarthquakes.map((earthquake, index) => {
      return (
        <a href="#"
          key={index}
          className="list-group-item list-group-item-action u-flex u-flex-center"
          onClick={(ev) => handleClick(ev, earthquake)}
        >
          <h4 className="col-md-3 u-txt-align-center">
            {earthquake.properties.mag}
          </h4>
          <div className="u-flex u-flex-direction-column col-md-9">
            <h5>
              {earthquake.properties.place}
            </h5>
            <p>
              {(new Date(earthquake.properties.time)).toUTCString()}
            </p>
            <small>
              {`${earthquake.geometry.coordinates[2]}km`}
            </small>
          </div>
        </a>
      );
    });
  }

  render() {
    const {lastEarthquakes, significantEarthQuakes} = this.props;
    return (
      <div className="c-sidebar list-group">
        <div className="list-group-item">
          <h3 className="list-group-item-heading">
            Lasts earthquakes.
          </h3>
          <p className="list-group-item-text">
            {`${significantEarthQuakes.length}
              of ${lastEarthquakes.length} were above 4.5 magnitude.`}
          </p>
        </div>
        {this.renderSidebarItems()}
      </div>
    );
  }
}

export default Sidebar;
