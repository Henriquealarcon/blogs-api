const express = require('express');
const rescue = require('express-rescue');
const { authorization } = require('../../middlewares/authorization');
const { titlePostValidation,
        contentPostValidation,
        categoryIdPostValidation, 
        categoryIdExists } = require('../../middlewares/validations');
const { getPostById } = require('./getPostById');
const { getPosts } = require('./getPosts');
const { newPost } = require('./newPost');
const { updatePostById } = require('./updatePostById');

const router = express.Router({ mergeParams: true });

router.post('/',
 rescue(authorization),
 rescue(titlePostValidation),
 rescue(contentPostValidation),
 rescue(categoryIdPostValidation),
 rescue(categoryIdExists),
 rescue(newPost));
router.get('/', rescue(authorization), rescue(getPosts));
router.get('/:id', rescue(authorization), rescue(getPostById));
router.put('/:id', rescue(authorization),
 rescue(titlePostValidation),
rescue(contentPostValidation),
 rescue(updatePostById));

module.exports = router;