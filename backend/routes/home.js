const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', auth)

module.exports = router