const express = require('express');
const router = express.Router(); 

router.use('/auth',require('./authRoutes'));
router.use('/form',require('./surveyRoutes'));


module.exports=router;