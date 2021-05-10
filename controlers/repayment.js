var universalfn1=require('../Utils/universalfunction1');
module.exports={
    //adding repayment customer details
    addrepaymentcustomer:function(data,cb){
        universalfn1.saveindb(data,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })

        
    },
    //total list of repayment customer details
    listrepaymentcustomer:function(data,cb){
        universalfn1.saveindblist({},function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    },
    //update the repayment customer details
    updaterepaymentcustomer:function(data,cb){
       
        universalfn1.updateindb(data,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    },
    //delete the repayment customer details
    deleterepayment:function(data,cb){
        universalfn1.deleteindb(data,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    },

}