var mongoose = require('mongoose');
const { Outreach } = require('.');
var outreach = require('./outreach');


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
    image_url: {
        type: String,
        default: "",
    },
    total_cost: {
        type: Number,
        default: 0.0
    },
    outreach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Outreach"
    },

    created_date: {
        type: Date,
        default: Date.now
    }
});


expenseSchema.pre('remove', async function (next){
    try{
        //find outreach 
        console.log(outreach_id)
        let outreach = await Outreach.findById(this.outreach_id)
        //remove expense id
        outreach.expense.remove(this.id)
        //update outreach
        await outreach.save();
        return next();

    }
    catch(e){
        return next(err)
    }
})
var Expense = mongoose.model('Expense',expenseSchema);

module.exports = Expense ;