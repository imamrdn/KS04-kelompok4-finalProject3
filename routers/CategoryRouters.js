const Router = require('express').Router()
const Category = require('../controllers/CategoryControllers')

Router.post('/', Category.Create)
Router.get('/', Category.GetAll)
Router.patch('/:categoriesId', Category.Update)
Router.delete('/:categoriesId', Category.Delete)

module.exports = Router