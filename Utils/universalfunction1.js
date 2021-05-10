var modelrepayment =require('../model/repayment')
module.exports={
    //
    saveindb:function(data,cb){
        modelrepayment(data).save(function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        }) 
    },
    saveindblist:function(data,cb){
        modelrepayment.find({}, function (err, res) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res)
            }
        })
    },
    updateindb:function(data,cb){
        let obj={
            _id:data._id
        }
        let queryobj={
            repaymentAmount:data.repaymentAmount,
            // paymentMode:data.paymentMode
        }
        modelrepayment.findOneAndUpdate(obj,queryobj,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })

    },
    deleteindb:function(data,cb){
        let obj={
            _id:data._id
        }
        modelrepayment.deleteOne(obj,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    }
}