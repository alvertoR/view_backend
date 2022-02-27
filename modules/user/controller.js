const UserService = require('./serivices');
const response = require('../../utils/responses');
const { v4: uuidv4 } = require('uuid');
const { hashPassword } = require('../../utils/password.helper');
const { getCurrentDateUTC } = require('../../utils/date.helper');

const service = new UserService();

class UserController {
    constructor () {};

    async registerUer(req, res){
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
}

module.exports = UserController;