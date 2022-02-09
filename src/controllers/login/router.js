const express = require('express');
const rescue = require('express-rescue');
const { loginValidation,
     passwordLoginValidation,
     emailLoginValidation, tokenGenerator } = require('../../middlewares/validations');
const { login } = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/',
  rescue(emailLoginValidation),
  rescue(passwordLoginValidation),
  rescue(loginValidation),
  rescue(tokenGenerator),
  rescue(login));

module.exports = router;