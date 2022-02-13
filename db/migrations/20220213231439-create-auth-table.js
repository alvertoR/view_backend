'use strict';
const { AuthSchema, AUTH_TABLE } = require ('../models/auth.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(AUTH_TABLE, AuthSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(AUTH_TABLE);
  }
};
