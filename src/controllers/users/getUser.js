const { User } = require('../../../models');

const getUsers = async (req, res, _next) => {   
    console.log(req.headers, 'aqui era pra vir o token'); 
    const user = await User.findAll();

    return res.status(200).json(user);
};

module.exports = { getUsers };