var db = require('../../models')

exports.getExpenses = (req,res)=>{
    db.Expense.find().then((expenses)=>{
        res.json(expenses)
    }).catch((error)=>{
        res.send(error)
    })
   
}


exports.createExpense = async (req,res)=>{
    try{
                db.Expense.create(req.body).then(
                    async (newExpense)=>{
                    //console.log(`added ${expense} to database`, newExpense);
                // console.log(req.params.id)
                    let foundOutreach = await db.Outreach.findById(req.params.outreachId);
                        
                        console.log("NEW outreach "+foundOutreach)
                        console.log("INSERTING EXPENSE "+newExpense._id)
                        foundOutreach.expenses.push(newExpense._id)
                        await foundOutreach.save();
                        res.json(newExpense)
                }
            ).catch((error)=>{
                res.send(error)
            })
    }
    catch(err){console.log(err)}
    
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