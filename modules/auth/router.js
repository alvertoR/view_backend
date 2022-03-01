const express = require('express');
const AuthController = require('./controller');

const Controller = new AuthController();
const router = express.Router();

router.post('/login', (req, res) => { Controller.loginUser(req, res) });
router.post('/forgot-password', (req, res) => { Controller.sendMail(req, res) });
router.put('/change-password', (req, res) => { Controller.updatePassword(req, res) });
module.exports = router;
