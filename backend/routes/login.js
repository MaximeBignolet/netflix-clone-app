const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user')

router.post('/login',auth, userCtrl.login)
router.post('/signup', auth, userCtrl.signup)
module.exports = router