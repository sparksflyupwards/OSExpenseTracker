var mongoose = require('mongoose');
const Expense = require('./expense');

var outreachSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    total_cost: {
        type: Number,
        default: 0.0
    },
    expenses: {
        type: [Expense],
        default: []
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Outreach = mongoose.model('Outreach',outreachSchema);

module.exports = Outreach ;