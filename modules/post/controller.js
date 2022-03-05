const PostService = require('./serivices');
const response = require('../../utils/responses');

const service = new PostService();

class PostController {
    constructor () {};

    async createPost(req, res){
        try{
            const newData = req.body;
            await service.create(newData, req.file);
            response.success(req, res, [], 201);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async getAllPosts(req, res){
        try{
            const posts = await service.findAll();
            response.success(req, res, posts, 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async getPostsByUserId(req, res){
        try{
            const { user_id } = req.params;
            const posts = await service.findOne(user_id);
            response.success(req, res, posts, 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async getPostByPostId(req, res){
        try{
            const { post_id } = req.params;
            const post = await service.findPostByPostId(post_id);
            response.success(req, res, post, 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async likePost(req, res){
        try{
            const { post_id } = req.params;
            await service.like(post_id);
            response.success(req, res, [], 201);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }
}

module.exports = PostController;