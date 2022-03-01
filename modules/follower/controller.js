const FollowerService = require('./serivices');
const response = require('../../utils/responses');

const service = new FollowerService();

class FollowerController {
    constructor () {};

    async followUser(req, res){
        try{
            const { user_from, user_to } = req.body;
            await service.create(user_from, user_to);
            response.success(req, res, 'followed user', 201);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async unFollowUser(req, res) {
        try{
            const { user_from, user_to } = req.body;
            await service.delete(user_from, user_to)
            response.success(req, res, 'unfollow user', 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }
}

module.exports = FollowerController;