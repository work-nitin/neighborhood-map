import React, { Component } from 'react';
import './App.css';

//import  getGoogleMaps from './utils.js';

class App extends Component {
/* render the map to UI*/
  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

/* Function to retrun the google maps using the GOOGLE Maps API*/
export function getGoogleMaps() {
  return new Promise((resolve) => {
    window.resolveGoogleMapsPromise = () => {
      resolve(window.google);
      delete window.resolveGoogleMapsPromise;
    };
    const script = document.createElement("script");
    const API = 'AIzaSyAyN_yf4SYMxFzuT9NxvybIm0_NjKk7U9k';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}

export default App;
