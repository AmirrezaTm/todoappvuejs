const express = require('express')
const controlleruser = require('../controllers/userloginController')
const router = express.Router()

// signin user
router.post('/signup', controlleruser.signup_user)

// signup user 
router.post('/login', controlleruser.login_user)

module.exports = router