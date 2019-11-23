const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const parkingSpotSchema = new Schema({
 
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }

})

module.exports = parkingSpot = mongoose.model('parkingSpots', parkingSpotSchema)



