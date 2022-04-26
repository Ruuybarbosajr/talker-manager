const getTalkers = require('./getTalkers');
const getTalkerById = require('./getTalkerById');
const error = require('./error');
const postLogin = require('./postLogin');
const emailValidation = require('./emailValidation');
const passwordValidation = require('./passwordValidation');
const postTalker = require('./postTalker');
const tokenValidation = require('./tokenValidation');
const postTalkerValidation = require('./postTalkerValidation');

module.exports = {
  getTalkers,
  getTalkerById,
  error,
  postLogin,
  emailValidation,
  passwordValidation,
  postTalker,
  tokenValidation,
  postTalkerValidation,
};