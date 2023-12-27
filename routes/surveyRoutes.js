const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const passport = require('../config/passportJWT');

// Middleware to check authentication using Passport JWT strategy
const authenticate = passport.authenticate('jwt', { session: false });

router.get('/getform', authenticate, surveyController.getForm);
router.post('/submit', authenticate, surveyController.submitForm);

module.exports = router;
