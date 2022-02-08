const ApiError = require('../controllers/error/error');

const errorHandler = (error, _req, res, _next) => {
    if (error instanceof ApiError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    console.log('error');

    console.log(error, 'alo');
    return res.status(500).json({ message: 'internal server' });
};

module.exports = errorHandler;