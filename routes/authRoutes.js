const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');
const passport = require('passport')

router.post('/sign-up',userController.signUp);
router.post('/sign-in',userController.signIn);


module.exports=router;