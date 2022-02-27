const { user } = require('pg/lib/defaults');
const { models } = require('../../services/sequelize/sequelize.service');
const { comparePassword } = require('../../utils/password.helper');
const { config } = require('../../config/config');
const { sign } = require('../../utils/jtw.helper');
class UserService {
    constructor() {}

    async createUser(data) {
        const newUser = await models.User.create(data);
        return newUser;
    }

    async login(email, password) {
        const findUser = await models.User.findOne({
            where: {
                email
            }
        });

        if(!findUser) {
            return {
                error: true,
                message: 'wrong values',
                code: 409
            }
        }

        const hasMatch = await comparePassword(password, findUser.dataValues.password);
        
        if(!hasMatch) {
            return {
                error: true,
                message: 'wrong values',
                code: 409
            }
        }
        
        delete findUser.dataValues.password;
        
        return {
            user: findUser,
            token: this.signToken(findUser)
        }
    }

    signToken(user) {
        const payload = {
            sub: user.id
        }

        const token = sign(payload, config.jwtLogin);

        return token
    }
}

module.exports = UserService;
