//import the mongoose module
var mongoose=require("mongoose");

//total required customer schema
var Schema =mongoose.Schema({
    loanType:{type:String},
    amount:{type:String},
    customerId:{type:String},
    paymentMode:{type:String},
    releaseDate:{type:Date,default:Date.now()}//the date will come auto updated date 
})

var loancustomers=mongoose.model('loancustomers',Schema)
module.exports=loancustomers