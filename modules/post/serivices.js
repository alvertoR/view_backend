const { models } = require('../../services/sequelize/sequelize.service');
const { getCurrentDateUTC } = require('../../utils/date.helper');
const { uploadFile } = require('../../services/firestorage/firestorage.service');

class PostService {
    constructor() {}

    async create(data, file) {
        const urlStorage = await uploadFile(file);
        const newPost = await models.Post.create({
            description: data.description,
            urlImage: urlStorage,
            likes: 0,
            userId: data.userId,
            createdAt: getCurrentDateUTC()
        });


        return newPost;
    }

    async findAll() {
        const posts = await models.Post.findAll({
            include:['user']
        });
        return posts;
    }

    async findOne(userId) {
        const posts = await models.Post.findAll({
            where: {
                userId
            }
        });

        return posts;
    }

    async findPostByPostId(postId) {
        const post = await models.Post.findByPk(postId);
        return post;
    }

    async like(postId) {
        const post = await this.findPostByPostId(postId);
        const update = await post.update({
            likes: post.dataValues.likes + 1
        });

        return update;
    }
}

module.exports = PostService;
