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

    async sendMail(req, res){
        try{
            const { email } = req.body;

            await service.sendToken(email);
            response.success(req, res, 'Mail sent', 200);
        }catch(error){
            response.error(req, res, error.message, 500);
        }
    }

    async updatePassword(req, res){
        try{
            const { token, password } = req.body;

            const auth = await service.changePassword(token, password);
            response.success(req, res, auth.message, 200);
        }catch(error) {
            response.error(req, res, error.message, 500);
        }
    }

}

module.exports = AuthController;