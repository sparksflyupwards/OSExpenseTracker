var db = require('../../models')

exports.getOutreaches = (req,res)=>{
    db.Outreach.find().then((outreachs)=>{
        res.json(outreachs)
    }).catch((error)=>{
        res.send(error)
    })
   
}


exports.createOutreach = (req,res)=>{
    db.Outreach.create(req.body).then(
        (newOutreach)=>{
            console.log(`added ${outreach} to database`, newOutreach);
            res.json(newOutreach)
        }
    ).catch((error)=>{
        res.send(error)
    })
}

exports.getOutreachById = (req,res)=>{
    console.log(req.params.outreachId)
        db.Outreach.findById(req.params.outreachId).then((outreachs)=>{
            res.json(outreachs)
        }).catch((error)=>{
            res.send(error)
        })
       
    }

exports.updateOutreachById = (req,res)=>{
    console.log(req.params.outreachId)
        db.Outreach.findOneAndUpdate({_id: req.params.outreachId}, req.body, {new: true}).then((outreachs)=>{
            res.json(outreachs)
        }).catch((error)=>{
            res.send(error)
        })
       
    }

exports.deleteOutreachById = (req,res)=>{
    console.log(req.params.outreachId)
        db.Outreach.remove({_id: req.params.outreachId}, {new: true}).then((outreachs)=>{
            res.json({message: `outreach with id:${req.params.outreachId} was deleted sucessfully`});
        }).catch((error)=>{
            res.send(error)
        })
       
}
module.exports = exports;