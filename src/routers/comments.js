const controller = require('../controllers/comments');
const express = require('express');

const router = express.Router();

router.get('/comments', controller.getComments);
router.post('/comments', controller.createComment);

module.exports = router;
