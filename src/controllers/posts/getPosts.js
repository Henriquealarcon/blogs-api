const { BlogPost, Category, User } = require('../../../models');

const getPosts = async (req, res, _next) => {
    const posts = await BlogPost.findAll({
        include: [
            { model: { User, as: 'user' } },
            { model: { Category, as: 'categories' } },
    ],
    });
    return res.status(200).json(posts);
};

module.exports = {
    getPosts,
};