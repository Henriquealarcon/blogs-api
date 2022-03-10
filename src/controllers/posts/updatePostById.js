const { BlogPost, Category, User } = require('../../../models');
const ApiError = require('../error/error');

const { NewError } = ApiError;

const updatePostById = async (req, res, _next) => {
    const { id } = req.params;
    const { title, content } = req.body;
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
    if (!title || !content) {
        return NewError(404, 'Post does not exist');
    }
    return res.status(200).json(posts);
    };

module.exports = {
    updatePostById,
};