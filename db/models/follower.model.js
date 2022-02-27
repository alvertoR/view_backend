const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const FOLLOWER_TABLE = 'followers';

const FollowerSchema =  {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    from: {
        field: 'user_from',
        allowNull: false,
        type: DataTypes.UUID,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    to: {
        field: 'user_to',
        allowNull: false,
        type: DataTypes.UUID,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW,
    }
}

class Follower extends Model {

    static associate(models) {
      //
    }
  
    static config(sequelize) {
      return {
        sequelize,
        tableName: FOLLOWER_TABLE,
        modelName: 'Follower',
        timestamps: false
      }
    }
}

module.exports = { Follower, FollowerSchema, FOLLOWER_TABLE };
