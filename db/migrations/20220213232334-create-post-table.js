'use strict';
const { PostSchema, POST_TABLE } = require ('../models/post.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(POST_TABLE, PostSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(POST_TABLE);
  }
};
