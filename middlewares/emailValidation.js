const joi = require('../utils/Joi');

function emailValidation(req, res, next) {
  try {
    const { email } = req.body;
    const { error } = joi.schemaEmail.validate({ email });
    if (error) return res.status(400).json({ message: error.message });
    return next();
  } catch (error) {
    next(error);
  }
}

module.exports = emailValidation;