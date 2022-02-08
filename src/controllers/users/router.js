const express = require('express');
const rescue = require('express-rescue');
const { userValidation } = require('../../middlewares/validations');
const { addUser } = require('./newUser');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(userValidation), rescue(addUser));

module.exports = router;