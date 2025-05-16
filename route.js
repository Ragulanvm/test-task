const express = require("express");
const router = require("express-router");

const {handleActivity} = require('./controllers/activieyController')
 


router.post('/:username/activity', handleActivity)


module.exports = router