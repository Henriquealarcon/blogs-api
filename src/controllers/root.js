const express = require('express');

const root = express.Router({ mergeParams: true });

const newUserRouter = require('./users/router');
const newLoginRouter = require('./login/router');
const categoriesRouter = require('./categories/router');
// root.use('/categories', categoriesRouter);
root.use('/user', newUserRouter);
root.use('/login', newLoginRouter);
root.use('/categories', categoriesRouter);

module.exports = { root };