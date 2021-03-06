import React, { Component } from 'react'
import { Marker } from 'react-map-gl';

const Bus = (props) => {
    return(
      <Marker latitude={props.Latitude} longitude={props.Longitude} offsetTop={-7} >
        <div className="bus" onClick={props.onClick} />
      </Marker>
    )
  }

export default Bus