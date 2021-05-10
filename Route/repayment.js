var Joi =require("joi");
//import the repayment file from controlser
var repaymentcontrolerfile=require('../controlers/repayment')
var validate_data=require('../Utils/validations');
module.exports=function(app){
    //add a customer repayment details
    app.post('/addrepaymentcustomer',function(req,res){
        //joi validation calling
     const { error } = validate_data.addrepaymentschema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

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
        //joi validation calling
        const { error } = validate_data.getrepaymetSchema.validate({});
        if(error) return res.status(400).send(error.details[0].message);

        repaymentcontrolerfile.listrepaymentcustomer(req.query,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result);
            }
        })
    })
    //update the repayment customer details
    app.put('/updaterepaymentcustomer',function(req,res){
        //joi validation calling
        const { error } = validate_data.updaterepaymentVaidator.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);


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
        //joi validation calling
        const { error } = validate_data.deleterepaymentSchema.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        repaymentcontrolerfile.deleterepayment(req.body,function(err,result){
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })
}