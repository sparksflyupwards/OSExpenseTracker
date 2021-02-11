var db = require('../../models')

exports.getExpenses = (req,res)=>{
    db.Expense.find().then((expenses)=>{
        res.json(expenses)
    }).catch((error)=>{
        res.send(error)
    })
   
}


exports.createExpense = (req,res)=>{
    db.Expense.create(req.body).then(
        (newExpense)=>{
            console.log(`added ${expense} to database`, newExpense);
            res.json(newExpense)
        }
    ).catch((error)=>{
        res.send(error)
    })
}

exports.getExpenseById = (req,res)=>{
        db.Expense.findById(req.params.expenseId).then((expenses)=>{
            res.json(expenses)
        }).catch((error)=>{
            res.send(error)
        })
       
    }

exports.updateExpenseById = (req,res)=>{
    console.log(req.params.expenseId)
        db.Expense.findOneAndUpdate({_id: req.params.expenseId}, req.body, {new: true}).then((expenses)=>{
            res.json(expenses)
        }).catch((error)=>{
            res.send(error)
        })
       
    }

exports.deleteExpenseById = (req,res)=>{
        db.Expense.remove({_id: req.params.expenseId}, {new: true}).then((expenses)=>{
            res.json({message: `outreach with id:${req.params.expenseId} was deleted sucessfully`});
        }).catch((error)=>{
            res.send(error)
        })

exports.addExpenseToOutreachById = (req,res)=>{
    console.log(req.params.outreachId)
        db.Outreach.findOneAndUpdate({_id: req.params.outreachId}, req.body, {new: true}).then((outreachs)=>{
            res.json(outreachs)
        }).catch((error)=>{
            res.send(error)
        })
       
    }
       
}
module.exports = exports;