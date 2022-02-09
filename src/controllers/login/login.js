const login = async (req, res, _next) => {
    const { token } = req;
    res.status(200).json({ token });
};

module.exports = {
    login,
};