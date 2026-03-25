const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/register', controller.createUser);

module.exports = router;