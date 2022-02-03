const ApiError = require('../error/error');
const jwt = require('../jwt/jwt');

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
        case !email || !emailRegex.test(email):
            NewError(400, '"email" must be a valid email');
            break;
            default:
                return true;
    }
    return true;
};