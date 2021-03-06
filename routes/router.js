const express = require('express');
const userRouter = require('../modules/user/router');
const profileRotuer = require('../modules/profile/router');
const authRotuer = require('../modules/auth/router');
const followerRouter = require('../modules/follower/router');
const postRouter = require('../modules/post/router');
const router = express.Router();

router.use('/api/v1/users', userRouter);
router.use('/api/v1/profile', profileRotuer);
router.use('/api/v1/auth', authRotuer);
router.use('/api/v1/follower', followerRouter);
router.use('/api/v1/posts', postRouter);

module.exports = router;
