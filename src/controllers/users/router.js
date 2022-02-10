const express = require('express');
const rescue = require('express-rescue');
const { isNameValid,
        isEmailValid,
        isPasswordValid,
        tokenGenerator } = require('../../middlewares/validations');
const { addUser } = require('./newUser');
const { getUsers } = require('./getUser');
const { getUserById } = require('./getUserById');
const { authorization } = require('../../middlewares/authorization');

const router = express.Router({ mergeParams: true });

router.post('/',
 rescue(isNameValid),
 rescue(isEmailValid),
 rescue(isPasswordValid),
 rescue(tokenGenerator),
 rescue(addUser));

 router.get('/', rescue(authorization), rescue(getUsers));
 router.get('/:id', rescue(authorization), rescue(getUserById));

 module.exports = router;