const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/user');
const auth = require('../auth/auth');

router.post('/user/verify', auth, userController.verify);


module.exports = router;