const { User, UserSchema } = require('./user.model');
const { Profile, ProfileSchema } = require('./profile.model');
const { Auth, AuthSchema } = require('./auth.model');
const { Post, PostSchema } = require('./post.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Profile.init(ProfileSchema, Profile.config(sequelize));
    Auth.init(AuthSchema, Auth.config(sequelize));
    Post.init(PostSchema, Post.config(sequelize));

    User.associate(sequelize.models);
    Profile.associate(sequelize.models);
    Auth.associate(sequelize.models);
    Post.associate(sequelize.models);
}

module.exports = setupModels;
