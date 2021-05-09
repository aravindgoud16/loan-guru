//importing modules and files
var express =require("express");
var mongoose= require("mongoose");
var body_parser= require("body-parser");

//importing  files
var routecustomerfile=require("./Route/customer");
var loanroutefile =require("./Route/loan");
var repaymentfile=require("./Route/repayment");
var addconfig =require('./Config/addconfig');
var dbconfig =require("./Config/dbconfig");

var app=express();

app.use(body_parser.json())
//calling imported modules and files 
routecustomerfile(app);
loanroutefile(app);
repaymentfile(app);
//running in loaclhost port number
app.listen(addconfig.PORT)

//connecting mongodb
mongoose.connect("dbconfig.mongooseConnect",dbconfig.urlParser,function(err,res){
    if(err){
        // res.send("mongodb connection is success");
        console.log("mongodb connection is failed",err);
    }else{
        // res.send("connection is failed");
        console.log("connection is success");
    }
})
console.log(" node project is runnning" );