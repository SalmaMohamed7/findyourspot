import React, { Component } from 'react';
import ParkingSpotItem from './ParkingSpotItem';
import axios from 'axios';

const styles = {
  button: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1
  },
};
class ParkingSpots extends Component {

  state = {
        id: null,
        name: null,
        email: null,
        status: null
        
      }
  getParkingSpots = () => {
    axios.get('http://localhost:5000/api/parkingSpots/')
    .then(res => this.setState({parkingSpots:[...this.state.ParkingSpots,res.data]}))
  }
  render() {
    return (
    <div>
    {this.props.parkingSpots.map((parkingSpot) => (
      <ParkingSpotItem key = {parkingSpot._id} parkingSpot = {parkingSpot}
      reserveParkingSpot={this.props.reserveParkingSpot}
      unreserveParkingSpot={this.props.unreserveParkingSpot}

      />

    ))}

    </div>)
  }
}
//proptypes
// EduOrgs.propTypes = {
//   eduorgs: PropTypes.array.isRequired,
//   mark: PropTypes.func.isRequired,
//   delEduOrg: PropTypes.func.isRequired
// }
export default ParkingSpots;