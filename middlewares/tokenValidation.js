const joi = require('../utils/Joi');

function tokenValidation(req, _res, next) {
  try {
    const { authorization } = req.headers;
    const { error } = joi.schemaToken.validate({ authorization });
    if (error) return next({ status: 401, message: error.message });
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = tokenValidation;