const UserService = require('../user/serivices');

const userService = new UserService();

class AuthService {
    async login(email, password) {
        const validateUser = await userService.login(email, password);
        return validateUser;
    }
}

module.exports = AuthService;