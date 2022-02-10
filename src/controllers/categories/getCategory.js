const { Category } = require('../../../models');

const getCategories = async (req, res, _next) => {
    const category = await Category.findAll();

    return res.status(200).json(category);
};

module.exports = { getCategories };