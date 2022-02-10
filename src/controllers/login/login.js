const login = async (req, res, _next) => {
    const { token } = req;
    return res.status(200).json({ token });
};

module.exports = {
    login,
};