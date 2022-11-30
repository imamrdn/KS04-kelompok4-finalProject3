const Router = require('express').Router()
const User = require('../controllers/UserControllers')

Router.post('/register', User.Register)
Router.post('/login', User.Login)

Router.put('/:usersId', User.Update)
Router.delete('/:userId', User.Delete)

Router.patch('/topup', User.topUp)

module.exports = Router