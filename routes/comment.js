var express = require('express');
var router = express.Router();
const {verifyToken} = require('../Middleware')
const comment = require('../controllers/comment')
router.post('/api/postComment', [verifyToken, comment.postComment]);

module.exports = router;