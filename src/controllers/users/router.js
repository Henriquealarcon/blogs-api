const express = require('express');
const rescue = require('express-rescue');
// const { userValidation } = require('../../middlewares/validations');
// const { addUser } = require('./newUser');
const { getUsers } = require('./getUser');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(getUsers));
// router.post('/', rescue(userValidation), rescue(addUser));

module.exports = router;