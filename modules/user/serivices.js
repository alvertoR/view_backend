const { models } = require('../../services/sequelize/sequelize.service');
const { comparePassword } = require('../../utils/password.helper');
const { config } = require('../../config/config');
const { sign } = require('../../utils/jtw.helper');
const { getCurrentDateUTC } = require('../../utils/date.helper');
const { v4: uuidv4 } = require('uuid');
const ProfileService = require('../profile/serivices');
const { uploadFile } = require('../../services/firestorage/firestorage.service');


const profileService = new ProfileService();

class UserService{
    constructor() {}

    async createUser(data) {
        const newUser = await models.User.create({
            ...data,
            urlImage: ''
        });
        await models.Auth.create({
            id: uuidv4(),
            userId: newUser.dataValues.id,
            createdAt: getCurrentDateUTC()
        });
        
        await profileService.createProfile(newUser.dataValues.id);
        return newUser;
    }

    async login(email, password) {
        const findUser = await models.User.findOne({
            where: {
                email
            },
            include:['auth']
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
            token: this.signToken(findUser.dataValues.auth.id)
        }
    }
    
    async findUserById(id) {
        const user = await models.User.findByPk(id);
        return user;
    }
    
    async findUserByNick(nickUser) {
        const user =  await models.User.findAll({
            where: {
                nick: nickUser
            }
        });

        return user;
    }

    async updateUser(id, changes) {
        const user = await this.findUserById(id);
        const response = await user.update(changes);

        return response;
    }

    async findUseByEmail(email) {
        const user = await models.User.findOne({
            where: {
                email
            }
        });

        delete user.dataValues.password
        return user;
    }

    signToken(authId) {
        const payload = {
            sub: authId
        }

        const token = sign(payload, config.jwtLogin);

        return token
    }

    async updatePhoto(id, file) {
        const urlStorage = await uploadFile(file);
        const user = await this.findUserById(id);
        const response = await user.update({
            urlImage: urlStorage
        });

        return response;
    }
}

module.exports = UserService;
