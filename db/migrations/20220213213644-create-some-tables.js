'use strict';
const { UserSchema, USER_TABLE } = require ('../models/user.model');
const { ProfileSchema, PROFILE_TABLE } = require ('../models/profile.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
  }
};
