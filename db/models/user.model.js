const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    nick: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    urlImage: {
      allowNull: true,
      type: DataTypes.TEXT,
      field: 'url_image',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
    },
}

class User extends Model {
    static associate(models) {
        this.hasOne(models.Profile, { 
            as: 'profile',
            foreignKey: 'userId'
        });
        this.hasOne(models.Auth, {
            as: 'auth',
            foreignKey: 'userId'
        });
        this.hasMany(models.Post, {
            as: 'post',
            foreignKey: 'userId'
        });
        this.belongsToMany(models.Follower, {
            as:'followers',
            through: models.Follower,
            foreignKey:'user_from',
            otherKey:'user_to'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  User
}