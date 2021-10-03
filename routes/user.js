const express = require('express')
const router = express.Router()
const controller = require('../controller/users')
router.route('/')
    .get(controller.index)
    .post(controller.newUser)
    .patch()
    .put()
    .delete()

module.exports = router