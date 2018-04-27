import React, { Component } from 'react'
import { bindActionCreators} from "redux";
import ReactMapGL, { Popup } from 'react-map-gl';
import { connect } from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css';

import api from '../api'

import * as actions from '../actions/actions'
import Bus from './Bus.js'

class Map extends Component {
  constructor(props) {
    super(props)
    // set viewport to fit in window
    // set lat and long to Vancouver 
    this.state = {
      viewport: {
        height: 800,
        width: 1000,
        latitude: 49.2827,
        longitude: -123.1207,
        zoom: 10,
      }
      // add popup option here for bus info
    }
  }
  // componentWillMount method which will fetch busses at a set interval of every 1000ms
  componentWillMount() {
    this.props.actions.fetchBusses();
    setInterval(this.props.actions.fetchBusses, 1000);
  }

    render() {
    return (
      <div>
        <ReactMapGL 
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken={api}
          >
        {this.props.busses.map((bus) =>
          <Bus {...bus} key={bus.VehicleNo} 
          // need to set up pop up to see bus information
          // onClick={() => this.setState({ popup: bus })} 
          />
        )}
        </ReactMapGL>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    busses: state.busses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)