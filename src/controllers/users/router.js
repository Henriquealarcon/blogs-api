const express = require('express');
const rescue = require('express-rescue');
const { isNameValid,
        isEmailValid,
        isPasswordValid,
        tokenGenerator } = require('../../middlewares/validations');
const { addUser } = require('./newUser');
const { getUsers } = require('./getUser');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(getUsers));
router.post('/',
 rescue(isNameValid),
 rescue(isEmailValid),
 rescue(isPasswordValid),
 rescue(tokenGenerator),
 rescue(addUser));

module.exports = router;