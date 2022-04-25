const express = require('express');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.getTalkers);

router.get('/:id', middleware.getTalkerById);

module.exports = router;