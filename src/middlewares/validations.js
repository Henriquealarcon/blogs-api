const ApiError = require('../error/error');
const jwt = require('../jwt/jwt');
const { User } = require('../../models');

const { NewError } = ApiError;

const isNameValid = (displayName) => {
    switch (true) {
        case !typeof displayName === 'string' || displayName.length > 8:
            NewError(400, '"displayName" length must be at least 8 characters long');
            break;
        default:
            return true;
    }
    return true;
};

const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9.\-_]+@[a-z]+\.[a-z]+$/;
    switch (true) {
        case !email:
            NewError(400, '"email" is required');
            break;
        case !emailRegex.test(email):
            NewError(400, '"email" must be a valid email');
            break;
            default:
                return true;
    }
    return true;
};

const isPasswordValid = (password) => {
    switch (true) {
        case !password:
            NewError(400, '"password" is required');
            break;
        case !password.length === 6:
            NewError(400, '"password" length must be 6 characters long');
            break;
            default:
                return true;
    }
    return true;
};

const userValidation = async (displayName, email, password) => {
   if (isNameValid(displayName) && isEmailValid(email) && isPasswordValid(password)) {
    const user = await User.findOne({ where: email });
    if (user) {
        return NewError(400, 'User already registered');
    }
       return jwt.newTokenGenerator(user);
   }
};

const loginValidation = async (req, _res, next) => {
    const { email, password } = req.body;
    const token = await userValidation(email, password);
    req.token = token; 
    return next();
};

module.exports = {
    loginValidation,
    userValidation,
};