const { verifyToken } = require('../jwt/jwt');
const { NewError } = require('../controllers/error/error');

const authorization = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return NewError(401, 'token not found');
        const verified = verifyToken(token);
    if (!verified) return NewError(401, 'Expired or invalid token');
        req.user = verified;
        return next();
};

module.exports = { authorization };