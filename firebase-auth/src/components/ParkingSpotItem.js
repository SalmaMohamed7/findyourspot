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
        </div>
    )
   
  }
}


export default ParkingSpotItem;




