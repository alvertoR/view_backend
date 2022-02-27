'use strict';

const { AuthSchema, AUTH_TABLE } = require('../models/auth.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(AUTH_TABLE, 'token', AuthSchema.token);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(AUTH_TABLE, 'token');
  }
};
