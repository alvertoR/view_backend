const AuthService = require('./serivices');
const response = require('../../utils/responses');

const service = new AuthService();

class AuthController {
    constructor () {};

    async loginUser(req, res){
        try{
            const { email, password } = req.body;
            const getUser = await service.login(email, password);
            if(getUser.error) {
                response.error(req, res, getUser, getUser.code);
            }
            response.success(req, res, getUser, 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }
}

module.exports = AuthController;