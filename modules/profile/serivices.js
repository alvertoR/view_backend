const { models } = require('../../services/sequelize/sequelize.service');
const { v4: uuidv4 } = require('uuid');
const { getCurrentDateUTC } = require('../../utils/date.helper');

class ProfileService {
    constructor() {}

    async changeProfile(id, changes) {
        const currentProfile = await this.findOne(id);
        const profileUpdated = await currentProfile.update({
            ...changes
        });
        return profileUpdated;
    }

    async createProfile(userId) {
        const newProfile = await models.Profile.create({
            id: uuidv4(),
            description: '',
            createdAt: getCurrentDateUTC(),
            userId
        });
        return newProfile;
    }

    async findOne(userId) {
        const profile = await models.Profile.findOne({
            where: {
                userId
            },
            include:['user']
        });

        delete profile.dataValues.user.dataValues.password
        return profile;
    }
}

module.exports = ProfileService;
