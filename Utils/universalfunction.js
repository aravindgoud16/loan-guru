var loancustomermodel=require('../model/loan');
module.exports={
    
    saveindb:function(data,cb){
        loancustomermodel(data).save(function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        }) 
    },

    saveindblist:function(data,cb){
        loancustomermodel.find({}, function (err, res) {
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
            amount:data.amount,
            paymentMode:data.paymentMode
        }
        loancustomermodel.findOneAndUpdate(obj,queryobj,function(err,res){
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
        loancustomermodel.deleteOne(obj,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    }
    }