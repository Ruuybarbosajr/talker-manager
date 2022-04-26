const express = require('express');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', middleware.getTalkers);

router.get('/search', middleware.tokenValidation, middleware.getTalkersByQuery);

router.get('/:id', middleware.getTalkerById);

router.post(
  '/', 
  middleware.tokenValidation, 
  middleware.bodyValidation, 
  middleware.postTalker,
);

router.put(
  '/:id', 
  middleware.tokenValidation, 
  middleware.bodyValidation,
  middleware.putTalker,
);

router.delete(
  '/:id',
  middleware.tokenValidation,
  middleware.deleteTalker,
);

module.exports = router;