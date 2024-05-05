const express = require("express")
const userControllers = require("./../controllers/userControllers")

const router = express.Router()

router.route('/').post(userControllers.createUser).get(userControllers.getAllUsers)

module.exports = router