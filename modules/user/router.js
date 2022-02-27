const express = require('express');
const UserController = require('./controller');

const Controller = new UserController();
const router = express.Router();

router.post('/', (req, res) => { Controller.registerUer(req, res) });

module.exports = router;
