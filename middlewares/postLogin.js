const generateToken = require('../utils/crypto');

function postLogin(_req, res, next) {
  try {
    return res.status(200).json({ token: generateToken() });
  } catch (error) {
    next(error);
  }
}

module.exports = postLogin;