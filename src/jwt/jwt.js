const jwt = require('jsonwebtoken');
require('dotenv').config();

const segredo = process.env.SECRET;

const OPTIONS = {};

const newTokenGenerator = (user) => {
    const token = jwt.sign(user, segredo, OPTIONS);
    return token;
};

const verifyToken = (token) => {
    const veriToken = jwt.verify(token, segredo);
    return veriToken;
};

module.exports = { newTokenGenerator, verifyToken };