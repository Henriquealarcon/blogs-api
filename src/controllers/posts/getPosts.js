const { BlogPost, Category, User } = require('../../../models');

const getPosts = async (req, res, _next) => {
    const posts = await BlogPost.findAll({
        include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                    model: Category,
                    as: 'categories',
                    through: { attributes: [] },
            },        
        ],
    });
    return res.status(200).json(posts);
};

module.exports = {
    getPosts,
};