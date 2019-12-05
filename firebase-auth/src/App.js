import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/pages/Login'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path = "/login" component = {Login}/>

      </div>
      </Router>
      
    )
  }
}

export default App;
