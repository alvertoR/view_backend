const UserService = require('./serivices');
const response = require('../../utils/responses');
const { v4: uuidv4 } = require('uuid');
const { hashPassword } = require('../../utils/password.helper');
const { getCurrentDateUTC } = require('../../utils/date.helper');

const service = new UserService();

class UserController {
    constructor () {};

    async registerUser(req, res){
        try{
            const { email, nick, password } = req.body;
            const user = {
                id: uuidv4(),
                email,
                nick,
                password: await hashPassword(password),
                createdAt: getCurrentDateUTC()
            }
            await service.createUser(user);
            response.success(req, res, [], 201);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }
    
    async changePictureProfile(req ,res){
        try{
            const { id } = req.params;
            await service.updatePhoto(id,req.file);
            response.success(req, res, [], 201);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async findUsersByNick(req, res) {
        try{
            const { nick } = req.body;
            
            const users = await service.findUserByNick(nick);
            response.success(req, res, users, 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }
}

module.exports = UserController;