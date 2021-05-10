//imported customer vontroler file
var import_customerControler=require('../controlers/customer');
var validationfile=require('../Utils/validations');
var Joi = require("joi");
module.exports=function(app){
// app.get('/newCustomer',function(req,res){
//     var marks={
//         data:req.query.data
//     }
//     import_customerControler.newCustomer(marks.data,function(err,result){
//         if(err){
//             res.status(400).send(err)
           
//         }else{
//             res.status(200).send(result)
//         }
//     })
// })


//adding customers route and details
app.post('/addcustomer',function(req,res){
    //joi validation calling
    const { error } = validationfile.addcustomerschema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    console.log(req);
    import_customerControler.addcusmoter(req.body,function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})

//total list customer details
app.get('/listcustomer',function(req,res){
    //joi validation calling
    const { error } = validationfile. getcustomerSchema.validate({});
    if(error) return res.status(400).send(error.details[0].message);

    import_customerControler.listcustomer(req.query,function(err,result){
        // res.send(result);
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})

//api for update customer details
app.put('/updatecustomer',function(req,res){
    //joi validation calling
    const { error } = validationfile.updateDataVaidator.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    import_customerControler.updatecustomer(req.body,function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})

//api for delete customer details
app.delete('/deletecustomer',function(req,res){
    //joi validation calling
    const { error } = validationfile.deletecustomerSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);


    import_customerControler.deletecustomer(req.body,function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
}