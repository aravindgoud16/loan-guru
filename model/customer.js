//import the mongoose module
var mongoose = require("mongoose");
var Schema =mongoose.Schema;
//total required customer schema
var customerSchema =new Schema({
    firstName: {type:String,unique:true},//the firstName will be unique
    lastName:String,
    gender:String,
    age:Number
})
var usercustomer=mongoose.model('user',customerSchema);

module.exports=usercustomer;