const express = require('express');
const FollowerController = require('./controller');

const Controller = new FollowerController();
const router = express.Router();

router.post('/follow', (req, res) => { Controller.followUser(req, res) });
router.delete('/un-follow', (req, res) => { Controller.unFollowUser(req , res) });

module.exports = router;
