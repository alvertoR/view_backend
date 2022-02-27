const express = require('express');
const user_router = require('../modules/user/router');
const router = express.Router();

router.use('/api/v1/users', user_router);

module.exports = router;
