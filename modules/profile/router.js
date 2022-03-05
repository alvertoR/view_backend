const express = require('express');
const ProfileController = require('./controller');
const { canAccess } = require('../../middleware/auth/auth.middleware');

const Controller = new ProfileController();
const router = express.Router();

router.get('/:user_id', (req, res) => { Controller.getProfileByUserId(req ,res) });
router.put('/:user_id', [canAccess],(req, res) => { Controller.updateProfile(req, res) });

module.exports = router;
