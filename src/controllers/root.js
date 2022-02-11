const express = require('express');

const root = express.Router({ mergeParams: true });

const newUserRouter = require('./users/router');
const newLoginRouter = require('./login/router');
const categoriesRouter = require('./categories/router');
const postsRouter = require('./posts/router');

root.use('/user', newUserRouter);
root.use('/login', newLoginRouter);
root.use('/categories', categoriesRouter);
root.use('/post', postsRouter);

module.exports = { root };