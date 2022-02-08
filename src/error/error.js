class ApiError {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    static NewError(statusCode, message) {
        throw new ApiError(statusCode, message);
    }
}

module.exports = ApiError;