const joi = require('../utils/Joi');

function passwordValidation(req, res, next) {
  try {
    const { password } = req.body;
    const { error } = joi.schemaPassword.validate({ password });
    if (error) return res.status(400).json({ message: error.message });
    return next();
  } catch (error) {
    next(error);
  }
}

module.exports = passwordValidation;