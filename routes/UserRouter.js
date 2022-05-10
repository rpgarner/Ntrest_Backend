const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.get('/session/:user_id', controller.GetUserProfile)
Router.get('/session', 
middleware.stripToken,
middleware.verifyToken,
controller.CheckSession)

module.exports = Router