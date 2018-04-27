import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className='logo' src='./images/bus.svg' alt='bus-icon' />
        <div className='header'>
          <h1 className='title'> Translink Bus Mapper </h1>
        </div>
        <div className='instructions'>
          <p> CLICK ON A </p>
          <p> DOT TO </p>
          <p> DISPLAY BUS </p>
          <p> INFORMATION </p>
        </div>
        <div className='map-container'>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
