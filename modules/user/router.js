const express = require('express');
const UserController = require('./controller');
const { multer } = require('../../middleware/multer/multer.middleware');
const { canAccess } = require('../../middleware/auth/auth.middleware');

const Controller = new UserController();
const router = express.Router();

router.post('/', (req, res) => { Controller.registerUser(req, res) });
router.post('/find', (req, res) => { Controller.findUsersByNick(req, res ) });
router.put('/change-phote/:id',
    [multer.single('file'), canAccess], 
    (req, res) => { Controller.changePictureProfile(req, res)} 
);
module.exports = router;
