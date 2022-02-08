const express = require('express');

const root = express.Router({ mergeParams: true });

const newUserRouter = require('./users/router');
// const newLoginRouter = require('./users/routerL');
// const categoriesRouter = require('./categories/router');

// root.use('/', recipesRouter);

// root.use('/login', newLoginRouter);
// root.use('/categories', categoriesRouter);
root.use('/users', newUserRouter);

module.exports = { root };