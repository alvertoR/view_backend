const { models } = require('../../services/sequelize/sequelize.service');

class UserService {
    constructor() {}

    async createUser(data) {
        const newUser = await models.User.create(data);
        return newUser;
    }
}

module.exports = UserService;
