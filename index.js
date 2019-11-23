const Joi = require('joi');//not needed
const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
const parkingSpots = require('./routes/api/parkingSpots')

const app = express()

const db = require('./config/keys').mongoURI
// console.log(db);
mongoose
   .connect(db,{useNewUrlParser: true})
    // .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


    process.on('uncaughtException', function (err) {
      console.log(err);
  }); 

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
//app.use(passport.initialize()) //login
//require('./config/passport')(passport)//login

  
// }

app.get('/', (req, res) => {

  res.send(`<h1>Find Your spot</h1>
  <a href="/api/parkingSpots">Parking Spots</a>
  `);

});

app.use('/api/parkingSpots', parkingSpots)



app.use((req, res) => {

  res.status(404).send({ err: "We can not find what you are looking for" });

});


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))

