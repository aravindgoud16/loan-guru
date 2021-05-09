//imported customer vontroler file
var import_customerControler=require('../controlers/customer');
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
    import_customerControler.listcustomer(function(err,result){
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

    const objDataVaidator =Joi.object().keys({
        _id:Joi.string(),
        firstName:Joi.string().required().min(3),
        age:Joi.string().required()
    });
    const { error } = objDataVaidator.validate(req.body);
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
    import_customerControler.deletecustomer(req.body,function(err,result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
}