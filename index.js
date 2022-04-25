const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const middleware = require('./middlewares');

const app = express();
app.use(bodyParser.json());

// start project
const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', routes.talker);
app.use('/login', routes.login);

app.use(middleware.error);

app.listen(PORT, () => {
  console.log('Online');
});
