//importing customer loan file
var loancontrolerfile =require('../controlers/loan');
module.exports=function(app){
    //adding a loan customer details
    app.post('/addloancustomer',function(req,res){
        loancontrolerfile.addloancustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result);
            }
        })
    })
    //total list of loan customer details
    app.get('/loancustomerlist',function(req,res){
        loancontrolerfile.listloancustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result);
            }
        })
    })
    //update the loan customer details
    app.put('/updateloancustomer',function(req,res){
        loancontrolerfile.updateloancustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })
    //delete the customer details
    app.delete('/deleteloancustomer',function(req,res){
        loancontrolerfile.deletecustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })

}