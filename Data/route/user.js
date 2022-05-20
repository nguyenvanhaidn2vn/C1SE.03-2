const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();

router.post('/signIn',UserController.signIn)
router.post('/Register',UserController.Register)
router.post('/update-Users/:id',UserController.updateUser)

module.exports = router
