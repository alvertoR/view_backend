const { models } = require('../../services/sequelize/sequelize.service');
const { getCurrentDateUTC } = require('../../utils/date.helper');
const { v4: uuidv4 } = require('uuid');

class FollowerService {
    async create(idUserFrom, idUserTo) {
        const newFollow = await models.Follower.create({
            id: uuidv4(),
            from: idUserFrom,
            to: idUserTo,
            createdAt: getCurrentDateUTC()
        });

        return newFollow;
    }

    async delete(idUserFrom, idUserTo) {
        const users = await models.Follower.findOne({
            where: {
                from: idUserFrom,
                to: idUserTo
            }
        });
        
        await users.destroy();

        return {
            message: 'User unfollow'
        }
    }
}

module.exports = FollowerService;
