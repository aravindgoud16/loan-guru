//importing customer loan file
var Joi = require("joi");
var loancontrolerfile =require('../controlers/loan');
var validate_data=require('../Utils/validations');
//exportig modules
module.exports=function(app){
    //adding a loan customer details
    app.post('/addloancustomer',function(req,res){
        //joi validation calling
        const { error } = validate_data.addloanschema.validate(req.body);
    if(error) return res.send(error.details[0].message);

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
        //joi validation calling
        const { error } = validate_data.getloanSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

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
        //joi validation calling
        const { error } = validate_data.updateloanVaidator.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

        loancontrolerfile.updateloancustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })
    //delete the loan details
    app.delete('/deleteloancustomer',function(req,res){
        //joi validation calling
        const { error } = validate_data.deleteloanSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

        loancontrolerfile.deletecustomer(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })

}