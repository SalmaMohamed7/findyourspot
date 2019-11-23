const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

module.exports={
    createValidation: request => {
        const createSchema ={
            
            name: Joi.string().required(),
            status: Joi.string().reguired(),
            userId: Joi.number()
        
        }
        return Joi.validate(request, createSchema)
    },
}
