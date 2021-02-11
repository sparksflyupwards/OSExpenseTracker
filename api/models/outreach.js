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
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }],
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Outreach = mongoose.model('Outreach',outreachSchema);

module.exports = Outreach ;