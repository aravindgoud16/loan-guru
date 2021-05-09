//import the mongoose module
var mongoose=require("mongoose");

//total required customer schema
var Schema=mongoose.Schema({
    loanId:{type:String},
    customerId:{type:String},
    repaymentAmount:{type:String},
    repaymentDate:{type:Date,default:Date.now()}//the date will come auto updated date 
})
var repaymentcustomer =mongoose.model('repaymentcustomer',Schema)
module.exports=repaymentcustomer