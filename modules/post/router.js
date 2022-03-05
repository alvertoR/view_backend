const express = require('express');
const PostController = require('./controller');
const { multer } = require('../../middleware/multer/multer.middleware');
const { canAccess } = require('../../middleware/auth/auth.middleware');

const Controller = new PostController();
const router = express.Router();

router.get('/all', [canAccess],(req, res) => { Controller.getAllPosts(req, res) });
router.get('/all/:user_id', [canAccess],(req, res) => { Controller.getPostsByUserId(req, res) });
router.get('/one/:post_id', [canAccess] ,(req, res) => { Controller.getPostByPostId(req, res)} );
router.post('/', [multer.single('file'), canAccess] ,(req, res) => { Controller.createPost(req, res) });
router.put('/like/:post_id', [canAccess],(req, res) => { Controller.likePost(req ,res) });

module.exports = router;
