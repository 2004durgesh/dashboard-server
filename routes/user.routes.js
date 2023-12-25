const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers.js');

// Define routes
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUserById);
router.delete('/users/:userId', userController.deleteUserById);

module.exports = router;
