const Joi = require("@hapi/joi");
const loginValidation = (data)=>{
    const schema = Joi.object({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
    })
    return schema.validate(data);
    
    }
    const registerValidation = (data)=>{
      const schema = Joi.object({
        firstName: Joi.string().min(6).required(),
        lastName: Joi.string().min(6).required(),
        emailAddress: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
      })
      return schema.validate(data);
      
      }
 module.exports.loginValidation = loginValidation;
 module.exports.registerValidation = registerValidation;