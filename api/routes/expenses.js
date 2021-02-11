var express = require('express');
var router = express.Router();
var db = require('../models')
var helpers = require('./helpers/expense')

router.route('/')
.get(helpers.getExpenses)


router.route('/:outreachId')
.post(helpers.createExpense)

router.route('/:expenseId')
.get(helpers.getExpenseById)
.put(helpers.updateExpenseById)
.delete(helpers.deleteExpenseById)


module.exports = router;