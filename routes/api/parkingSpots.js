const express = require('express')
const router = express.Router()
router.use(express.json())
const Joi = require('joi')
const uuid = require('uuid') 
const mongoose = require('mongoose')
const parkingSpot = require('../../models/parkingSpot')
const validator = require('../../Validations/parkingSpotValidations')


//create
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const { name, status, email} = req.body;
        const newParkingSpot = new parkingSpot({
			name,
			status,
			email,
		});
    await parkingSpot.create(newParkingSpot);
    console.log(newParkingSpot.name)
     res.json({msg:'parking spot was created successfully', data: newParkingSpot})
    }

    catch(error) {
        console.log("here catch")
        console.log(error)
    }  
 });

 //view all
 router.get('/', async (req,res) => {
    const parkingSpots = await parkingSpot.find()
    res.json({data: parkingSpots})
})
router.put('/:id', async (req, res) => {
    
<<<<<<< HEAD
    const isValidated = validator.updateValidation(req.body)
    console.log("in put parking spots")
    if (isValidated.error)
    {
        console.log(isValidated.error.details[0].message)
        return res.status(400).send({ error: isValidated.error.details[0].message });
    }
    
    else{
        console.log("updating parking spots..")
        console.log(req.body)
        console.log(req.params.id)

        console.log("here")
    await parkingSpot.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/parkingSpot/${req.params.id}`) })
    .catch(err => {console.log(err); return res.status(400).send(`Sorry, couldn't update a parkingSpot with that id !`) })
    }
=======
  //const isValidated = validator.updateValidation(req.body)
  console.log("in put parking spots")
  // if (isValidated.error)
  // {
  //     // console.log(isValidated.error.details[0].message)
  //     // return res.status(400).send({ error: isValidated.error.details[0].message });
  // }
  
  // else{
      console.log("updating parking spots..")
      console.log(req.body)
      console.log(req.params.id)

      console.log("here")
  await parkingSpot.findByIdAndUpdate(req.params.id, req.body)
  .exec()
  .then(r => {return res.json({msg:'parking spot was updated successfully'})})
  .catch(err => {console.log(err); return res.status(400).send(`Sorry, couldn't update a parkingSpot with that id !`) })
 // }
>>>>>>> 26ab1ec77ac468508b2b14d60bee1bfa0e197451
})
//get by name
router.get('/:_id',async(req, res) =>{

    const id = req.params._id;
    parkingSpot.findById(id)
      
        .exec()
        .then(doc => {
          if (doc) {
            res.status(200).json(doc);
          
          } else {
            res
              .status(404)
              .json({ message: "No Parking spot found for provided ID" });
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });
      } 
      );
    
module.exports = router