const { Category } = require('../../../models');

const addCategory = async (req, res, _next) => {
    const { name } = req.body;

    const newCategory = await Category.create({ name });

    return res.status(201).json(newCategory);
};

module.exports = { addCategory };