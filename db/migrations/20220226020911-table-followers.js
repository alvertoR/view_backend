'use strict';
const { FOLLOWER_TABLE, FollowerSchema, } = require('../models/follower.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(FOLLOWER_TABLE, FollowerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(FOLLOWER_TABLE);

  }
};

