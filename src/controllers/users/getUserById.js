const { User } = require('../../../models');
const ApiError = require('../error/error');

const { NewError } = ApiError;

const getUserById = async (req, res, _next) => {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email } });

    if (!user) {
        return NewError(404, 'User does not exist');
    }

    return res.status(200).json(user);
};

module.exports = { getUserById };