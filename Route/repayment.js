//import the repayment file from controlser
var repaymentcontrolerfile=require('../controlers/repayment')
module.exports=function(app){
    //add a customer repayment details
    app.post('/addrepaymentcustomer',function(req,res){
        repaymentcontrolerfile.addrepaymentcustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result);
            }
        })
    })
    //total details of customer 
    app.get('/repaymentcustomerlist',function(req,res){
        repaymentcontrolerfile.listrepaymentcustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result);
            }
        })
    })
    //update the repayment customer details
    app.put('/updaterepaymentcustomer',function(req,res){
        repaymentcontrolerfile.updaterepaymentcustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })
    //delete the repayment customer details
    app.delete('/deleterepaymentcustomer',function(req,res){
        repaymentcontrolerfile.deleterepayment(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })
}