const express = require('express');
const FollowerController = require('./controller');
const { canAccess } = require('../../middleware/auth/auth.middleware');

const Controller = new FollowerController();
const router = express.Router();

router.post('/follow', [canAccess],(req, res) => { Controller.followUser(req, res) });
router.delete('/un-follow', [canAccess],(req, res) => { Controller.unFollowUser(req , res) });

module.exports = router;
