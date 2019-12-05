import React, { Component } from 'react';

class ParkingSpotItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
         
      }
  }
  
  render() {
      const {_id,name,email,status} = this.props.parkingSpot
    return(
        <div style={this.getStyle()}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={this.props.reserveParkingSpot.bind(this,_id)} style={btnStyle}>reserve</button>
            <button onClick={this.props.unreserveParkingSpot.bind(this,_id)} style={btnStyle}>unreserve</button>

        </div>
    )

    
   
  }
  
}
const btnStyle={
    color: 'white',
    background:'red',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius:'80%',
    cursor:'pointer'
    // float:'down-right'
  }

export default ParkingSpotItem;




