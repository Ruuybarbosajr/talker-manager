const Joi = require('joi').extend(require('@joi/date'));

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

const schemaToken = Joi.object({
  authorization: Joi.string().length(16).required().messages({
    'any.required': 'Token não encontrado',
    'string.length': 'Token inválido',
    'string.empty': 'Token inválido',
  }),
});

const schemaPost = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'O campo "name" é obrigatório',
    'string.empty': 'O campo "name" é obrigatório',
    'string.min': 'O "name" deve ter pelo menos 3 caracteres',
  }),

  age: Joi.number().integer().min(18).required()
    .messages({
      'any.required': 'O campo "age" é obrigatório',
      'number.empty': 'O campo "age" é obrigatório',
      'number.min': 'A pessoa palestrante deve ser maior de idade',
  }),

  talk: Joi.object().keys({
    watchedAt: Joi.date().format('DD/MM/YYYY').required().messages({
      'date.format': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      'any.required': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    }),
    rate: Joi.number().integer().min(1).max(5)
      .required()
      .messages({
        'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
        'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
        'any.required': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      }),
  }).required().messages({
    'object.length': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    'any.required': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  }),
});

module.exports = { 
  schemaEmail, 
  schemaPassword,
  schemaToken,
  schemaPost, 
};