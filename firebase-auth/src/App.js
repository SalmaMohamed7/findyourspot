import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/pages/Login'
import ParkingSpots from './components/ParkingSpots'
import ParkingSpotsApp from './ParkinSpotsApp'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/p" component = {ParkingSpotsApp}/>


      </div>
      </Router>
      
    )
  }
}

export default App;
