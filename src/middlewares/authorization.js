const { verifyToken } = require('../jwt/jwt');
const { NewError } = require('../controllers/error/error');

const authorization = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return NewError(401, 'missing auth token'); try {
        const verified = verifyToken(token);
        req.user = verified;
        return next();
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

module.exports = { authorization };