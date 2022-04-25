const getTalkers = require('./getTalkers');
const getTalkerById = require('./getTalkerById');
const error = require('./error');
const postLogin = require('./postLogin');
const emailValidation = require('./ emailValidation');
const passwordValidation = require('./passwordValidation');

module.exports = {
  getTalkers,
  getTalkerById,
  error,
  postLogin,
  emailValidation,
  passwordValidation,
};