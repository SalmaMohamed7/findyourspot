import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/pages/Login'
import ParkingSpotsApp from './ParkinSpotsApp'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path = "/" component = {Login}/>
        <Route exact path = "/parking-spots" component = {ParkingSpotsApp}/>


      </div>
      </Router>
      
    )
  }
}

export default App;
