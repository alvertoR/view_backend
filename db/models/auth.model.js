const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const AUTH_TABLE = 'auths';

const AuthSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    codeValidation: {
        field: 'code_validation',
        allowNull: true,
        type: DataTypes.INTEGER
    },
    isValidate: {
        field: 'is_validate',
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false
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

class Auth extends Model {
    static associate(models) {
        this.belongsTo(models.User, { as: 'user' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: AUTH_TABLE,
            modelName: 'Auth',
            timestamps: false
        }
    }
}

module.exports = {
  AUTH_TABLE,
  AuthSchema,
  Auth
}
