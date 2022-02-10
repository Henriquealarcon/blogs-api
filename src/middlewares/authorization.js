const { verifyToken } = require('../jwt/jwt');
const { NewError } = require('../controllers/error/error');

const authorization = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return NewError(401, 'Token not found');
    try {
        const verified = verifyToken(token);
                req.user = verified;
        } catch (error) {
        return NewError(401, 'Expired or invalid token');
        }
        return next();
};

module.exports = { authorization };