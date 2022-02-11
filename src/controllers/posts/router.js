const express = require('express');
const rescue = require('express-rescue');
const { authorization } = require('../../middlewares/authorization');
const { titlePostValidation,
        contentPostValidation,
        categoryIdPostValidation, 
        categoryIdExists } = require('../../middlewares/validations');
const { getPosts } = require('./getPosts');
const { newPost } = require('./newPost');

const router = express.Router({ mergeParams: true });

router.post('/',
 rescue(authorization),
 rescue(titlePostValidation),
 rescue(contentPostValidation),
 rescue(categoryIdPostValidation),
 rescue(categoryIdExists),
 rescue(newPost));
router.get('/', rescue(authorization), rescue(getPosts));

module.exports = router;