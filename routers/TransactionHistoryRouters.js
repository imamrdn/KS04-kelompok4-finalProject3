const Router = require('express').Router()

const TransactionHistory = require('../controllers/TransactionHistoryControllers')

Router.post('/', TransactionHistory.Create)
Router.get('/user', TransactionHistory.getTransactionUser)
Router.get('/admin', TransactionHistory.getAllTransaction)
Router.get('/:transactionId', TransactionHistory.getTransactionById)

module.exports = Router