const express = require('express');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.emailValidation, middleware.passwordValidation, middleware.postLogin);

module.exports = router;