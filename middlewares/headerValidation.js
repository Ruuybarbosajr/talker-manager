const joi = require('../utils/Joi');

function headerValidation(req, _res, next) {
  try {
    const { name, age, talk } = req.body;
    const { error } = joi.schemaPost.validate({ name, age, talk });
    if (error) next({ status: 400, message: error.message });
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = headerValidation;