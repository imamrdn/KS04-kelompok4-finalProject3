const Router = require('express').Router()
const Product = require('../controllers/ProductControllers')

Router.post('/', Product.Create)
Router.get('/', Product.getAll)
Router.put('/:productId', Product.updateAll)
Router.patch('/:productId', Product.updateCategoryId)
Router.delete('/:productId', Product.Delete)

module.exports = Router