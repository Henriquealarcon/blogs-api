const express = require('express');
const rescue = require('express-rescue');
const { loginValidation } = require('../../middlewares/validations');
const { login } = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(loginValidation), rescue(login));

module.exports = router;