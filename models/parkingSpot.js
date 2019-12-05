const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const parkingSpotSchema = new Schema({
 
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default:false
    },
    email: {
        type: String,
        default:null
       
    }

})

module.exports = parkingSpot = mongoose.model('parkingSpots', parkingSpotSchema)



