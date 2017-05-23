import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import cn from 'classnames';

import store from '../store';

const mapStateToProps = (state, params) => {
  return {
    selectedEarthquake: store.getState().earthquakes.selectedEarthquake
  };
};

class Sidebar extends Component {
  static propTypes = {
    earthquakes: PropTypes.array,
    significantEarthQuakes: PropTypes.array,
    handleClick: PropTypes.func,
    selectedEarthquake: PropTypes.object
  };

  isSelected(earthquake) {
    const { selectedEarthquake } = this.props;
    if (!selectedEarthquake.properties) {
      return false;
    }
    return earthquake.id === selectedEarthquake.id;
  }

  renderSidebarItems() {
    const {earthquakes, handleClick} = this.props;
    return earthquakes.map((earthquake, index) => {
      const sidebarItemClassName = cn(
        'list-group-item',
        'list-group-item-action',
        'u-flex',
        'u-flex-center',
        this.isSelected(earthquake) ? 'active' : ''
      );
      return (
        <a href="#"
          key={index}
          className={sidebarItemClassName}
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
    const {earthquakes, significantEarthQuakes} = this.props;
    return (
      <div className="c-sidebar list-group">
        <div className="list-group-item">
          <h3 className="list-group-item-heading">
            Lasts earthquakes.
          </h3>
          <p className="list-group-item-text">
            {`${significantEarthQuakes.length}
              of ${earthquakes.length} were above 4.5 magnitude.`}
          </p>
        </div>
        {this.renderSidebarItems()}
      </div>
    );
  }
}

const ConnectSidebar = connect(mapStateToProps)(Sidebar);
export default ConnectSidebar;
