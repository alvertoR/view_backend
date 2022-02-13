const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const PROFILE_TABLE = 'profiles';

const ProfileSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    description: {
        allowNull: true,
        type: DataTypes.TEXT,
        unique: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.UUID,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Profile extends Model {
    static associate(models) {
        this.belongsTo(models.User, { as: 'user' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PROFILE_TABLE,
            modelName: 'Profile',
            timestamps: false
        }
    }
}

module.exports = {
  PROFILE_TABLE,
  ProfileSchema,
  Profile
}
