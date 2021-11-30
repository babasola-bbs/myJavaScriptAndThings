const express = require('express')
const { signup, signin, signout } = require('../controllers/userController')
const {check} = require('express-validator')
const router = express.Router()



router.post('/signup',[
    check("name", "Name Should Be At Least 3 Characters").isLength({min:3}),
    check("email", "That Email Is Not Valid").isEmail(),
    check("password", "Password Should Be At Least 6 Characters").isLength({min: 6})
    ], signup)

router.post('/signin', signin)

router.get('/signout', signout)

module.exports = router
