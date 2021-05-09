
//import the module /customer file
var modelimport = require('../model/customer');
var utilsimport= require('../Utils/universalfunction');
// const customer = require('../Route/customer')
module.exports = {
    // newCustomer: function (data, cb) {

    //     if (data == "aravind") {
    //         cb("aravind name is matched")
    //     } else {
    //         cb("name is not matched")
    //     }
    // },


    // adding the customer details
    addcusmoter: function (data, cb) {
        modelimport(data).save(function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },
    // list of customer details
    listcustomer: function (cb) {
        modelimport.find({}, function (err, res) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res)
            }
        })
    },
    // update the customer details
    updatecustomer: function (data, cb) {
        var queryobj = {
            _id: data._id
        };
        var updateobj = {
            firstName:data.firstName,
            age: data.age
        };
        modelimport.findOneAndUpdate(queryobj, updateobj, function (err, res) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res)
            }
        })
    },
    // delete the customer details
    deletecustomer: function (data, cb) {
        var queryobj = {
            _id: data._id
        };

        modelimport.deleteOne(queryobj, function (err, res) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res)
            }
        })
    }




}