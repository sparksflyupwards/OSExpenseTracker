var mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    category: {
        type: String,
        default: "Clothing",
        required: 'Need to choose a category'
    },
    total_cost: {
        type: Number,
        default: 0.0
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Expense = mongoose.model('Expense',expenseSchema);

module.exports = Expense ;