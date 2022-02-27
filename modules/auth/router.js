const express = require('express');
const AuthController = require('./controller');

const Controller = new AuthController();
const router = express.Router();

router.post('/login', (req, res) => { Controller.loginUser(req, res) });

module.exports = router;
