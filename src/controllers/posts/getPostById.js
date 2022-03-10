const { BlogPost } = require('../../../models');

const getPostById = async (req, res, _next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const [updatePost] = await BlogPost.update({
        title, content,
    }, { where: { id } });
    return res.status(200).json(updatePost);
    };

module.exports = {
    getPostById,
};