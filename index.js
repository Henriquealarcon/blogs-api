const express = require('express');

const app = express();

const error = require('./src/middlewares/error');

const { root } = require('./src/controllers/root');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(root);

app.use(error);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});