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
        const { name, status, userId} = req.body;
        const newParkingSpot = new parkingSpot({
			name,
			status,
			userId,
		});
    await parkingSpot.create(newParkingSpot);
    console.log(newEducationalOrganization.email)
     res.json({msg:'parking spot was created successfully', data: newEducationalOrganization})
    }

    catch(error) {
        console.log("here catch")
        console.log(error)
    }  
 });


module.exports = router