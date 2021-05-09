//import the utils folders universsal fn file
var universalfn=require('../Utils/universalfunction');
module.exports={
    //add the customer loan details
    addloancustomer:function(data,cb){
        universalfn.saveindb(data,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })

        
    },
    //total list of loan customer details
    listloancustomer:function(data,cb){
        universalfn.saveindblist({},function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    },
    //update the loan customer details
    updateloancustomer:function(data,cb){
        universalfn.updateindb(data,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    },

    //delete the loan customer details
    deletecustomer:function(data,cb){
        universalfn.deleteindb(data,function(err,res){
            if(err){
                cb(err,null)
            }else{
                cb(null,res)
            }
        })
    },

}