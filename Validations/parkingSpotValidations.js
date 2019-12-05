const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

module.exports={
    createValidation: request => {
        const createSchema ={
            
            name: Joi.string().required(),
            status: Joi.boolean(),
            email: Joi.string()
        
        }
        return Joi.validate(request, createSchema)
    },
    updateValidation: request =>{
        const updateSchema ={
            status : Joi.boolean().required(),
            email : Joi.string().required()

        }
        return Joi.validate(request, updateSchema)

    }
}