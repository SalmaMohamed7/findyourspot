import React, { Component } from 'react';
import ParkingSpots from './components/ParkingSpots';
import './App.css';
import axios from 'axios';

class ParkingSpotsApp extends Component {
  getStyleEduOrg = () => {
    return {
      backgroundColor : '#000',
      color : '#f0f0f0'
    }
  
  }

  constructor(props){
    super(props)
    this.state={
      parkingSpots:[],
      error:false,
      loading:true
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/parkingSpots/')
    .then(res=> this.setState({parkingSpots:res.data.data,loading:false}))
    .catch(error=> this.ERROR.bind(error))
  }

  
  render() {
    return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <div class="text-center">
    <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
  <div class="spinner-border"  style={spinnerStyle} role="status">
    <span class="sr-only">Loading...</span>
  </div>
  {/* <h1>loading please be patient</h1> */}
</div>
  
  :(
      <div>
        <h1 style = {this.getStyleEduOrg()}>Parking Spots</h1>
        <br></br>
        <ParkingSpots parkingSpots = {this.state.parkingSpots}/>
      </div>
    );
  }
  ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
//"width: 3rem; height: 3rem;"
const spinnerStyle={
  //background:'#193E43',
  width: '5rem',
  height: '5rem',
  color:'#e5e8e8',
  textAlign:'center',
  fontFamily:'ariel',
  padding:'10px'
}

export default ParkingSpotsApp;
