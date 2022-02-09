const { User } = require('../../../models');

const addUser = async (req, res, _next) => {
    const { displayName, email, password, image } = req.body;

    const newUser = await User.create({ displayName, email, password, image });

    return res.status(201).json(newUser);
};

module.exports = { addUser };