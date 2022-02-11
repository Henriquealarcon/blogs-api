const { BlogPost, User } = require('../../../models');

const newPost = async (req, res, _next) => {
    const { title, content, categoryIds } = req.body;
    const { email } = req.user;
    const user = await User.findOne({ where: { email } });
    const { dataValues: { id: userId } } = user;
    console.log(userId, 'user');
    const newData = await BlogPost
    .create({ title, content, userId });
    await newData.addCategories(categoryIds);
    return res.status(201).json(newData);
};

module.exports = {
    newPost,
};