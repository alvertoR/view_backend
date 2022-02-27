const ProfileService = require('./serivices');
const response = require('../../utils/responses');

const service = new ProfileService();

class ProfileController {
    constructor () {};

    async updateProfile(req, res){
        try{
            const newData = req.body;
            const { user_id } = req.params
            await service.changeProfile(user_id, newData)
            response.success(req, res, [], 201);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async getProfileByUserId(req, res) {
        try{
            const { user_id } = req.params
            const profile = await service.findOne(user_id)
            response.success(req, res, profile, 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }
}

module.exports = ProfileController;