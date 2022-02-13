const { BlogPost, Category, User } = require('../../../models');
const ApiError = require('../error/error');

const { NewError } = ApiError;

const getPostById = async (req, res, _next) => {
    const { id } = req.params;
    const posts = await BlogPost.findByPk(id, {
        include: [
            { model: User,
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
    if (!posts) {
        return NewError(404, 'Post does not exist');
    }
    return res.status(200).json(posts);
    };

module.exports = {
    getPostById,
};