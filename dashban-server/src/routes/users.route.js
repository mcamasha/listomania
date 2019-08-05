const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const users_controller = require('../controllers/users.controller');

// Register
router.post('/register', users_controller.register_user);

// Login
router.post('/login', users_controller.login);

// Logout
router.get('/logout', users_controller.logout);

module.exports = router;