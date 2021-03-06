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
        width: 1200,
        latitude: 49.2827,
        longitude: -123.1207,
        zoom: 10,
      }
    }
  }
  // componentWillMount method which will fetch busses at a set interval of every 1000ms
  componentWillMount() {
    this.props.actions.fetchBusses();
    setInterval(this.props.actions.fetchBusses, 1000);
  }

  showPopup() {
    const {popup} = this.state

    return popup && (
      <Popup
        tipSize={5}
        longitude={popup.Longitude}
        latitude={popup.Latitude}
        closeOnClick={true}
        closeButton={true}
        anchor='top'
        captureDrag={true}
        onClose={()=> this.setState({popup: null})}
        >
        <p>Route No: {popup.RouteNo}</p>
        <p>Destination: {popup.Destination}</p>
        <p>Direction: {popup.Direction}</p>
        <p>Last updated: {popup.RecordedTime}</p>
      </Popup>
    )
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
          onClick={() => this.setState({ popup: bus })}
          />
        )}
          {this.showPopup()}
        </ReactMapGL>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    busses: state.busses
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)