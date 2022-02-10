const express = require('express');
const rescue = require('express-rescue');
const { authorization } = require('../../middlewares/authorization');
const { nameCategoryValidation } = require('../../middlewares/validations');
const { addCategory } = require('./newCategory');
const { getCategories } = require('./getCategory');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(authorization), rescue(nameCategoryValidation), rescue(addCategory));
router.get('/', rescue(authorization), rescue(getCategories));

module.exports = router;