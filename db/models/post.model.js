const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const POST_TABLE = 'posts';

const PostSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    description: {
        allowNull: true,
        type: DataTypes.TEXT,
    },
    urlImage: {
        field: 'url_image',
        allowNull: true,
        type: DataTypes.TEXT
    },
    likes: {
        allowNull: true,
        type: DataTypes.INTEGER,
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

class Post extends Model {
    static associate(models) {
        this.belongsTo(models.User, { as: 'user' })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: POST_TABLE,
            modelName: 'Post',
            timestamps: false
        }
    }
}

module.exports = {
  POST_TABLE,
  PostSchema,
  Post
}