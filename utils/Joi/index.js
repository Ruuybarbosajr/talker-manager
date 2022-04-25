const Joi = require('joi');

const schemaEmail = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'O campo "email" é obrigatório',
    'string.email': 'O "email" deve ter o formato "email@email.com"',
  }),
  
});

const schemaPassword = Joi.object({
  password: Joi.string().min(6).required().messages({
    'any.required': 'O campo "password" é obrigatório',
    'string.min': 'O "password" deve ter pelo menos 6 caracteres',
    'string.empty': 'O "password" deve ter pelo menos 6 caracteres',
  }),
});

module.exports = { schemaEmail, schemaPassword };