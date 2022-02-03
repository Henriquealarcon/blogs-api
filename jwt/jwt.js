const jwt = require('jsonwebtoken');
require('dotenv').config();

const segredo = process.env.SECRET;

const newTokenGenerator = (user, secret = segredo) => {
    const token = jwt.sign(user, secret);
    return token;
};

const verifyToken = (token, secret = segredo) => {
    const veriToken = jwt.verify(token, secret);
    return veriToken;
};

module.exports = { newTokenGenerator, verifyToken };