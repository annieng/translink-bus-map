import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
         <h1 className='title'> Translink Bus Mapper </h1>
        </div>
        <div className='map-container'>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
