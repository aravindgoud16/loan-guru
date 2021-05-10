var Joi = require("joi");
module.exports = {
    //add customer validation
    addcustomerschema: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        gender: Joi.string().required(),
        age: Joi.string().required()
    }),
    //get customer validation
    getcustomerSchema:Joi.object().keys({
        _id: Joi.string().optional()
    }),

    //updaate customer validation
    updateDataVaidator: Joi.object().keys({
        _id: Joi.string(),
        firstName: Joi.string().required(),
        age: Joi.string().required(),

    }),
    deletecustomerSchema:Joi.object().keys({
        _id: Joi.string().optional()
    }),

                    //////loan validation
    //add loan validatio
    addloanschema: Joi.object().keys({
        loanType:Joi.string().required(),
        amount:Joi.string().required(),
        customerId:Joi.string().required(),
        paymentMode:Joi.string().required()
       
    }),
    //get customer validation
    getloanSchema:Joi.object().keys({
        loanType:Joi.string(),
        amount:Joi.string(),
        customerId:Joi.string(),
        paymentMode:Joi.string()
       
    }),

    //updaate customer validation
    updateloanVaidator: Joi.object().keys({
        _id: Joi.string(),
        amount: Joi.string().optional(),
        
        paymentMode: Joi.string().required()

    }),
    deleteloanSchema:Joi.object().keys({
        _id: Joi.string().optional()
    }),

        /////repayment validations
    //add repaymet validations
    addrepaymentschema: Joi.object().keys({
        loanId:Joi.string().required(),
    customerId:Joi.string().required(),
    repaymentAmount:Joi.string().required()
    }),
    //get customer validation
    getrepaymetSchema:Joi.object().keys({
        _id: Joi.string().optional()
    }),

    //updaate customer validation
    updaterepaymentVaidator: Joi.object().keys({
        _id: Joi.string().required(),
        repaymentAmount: Joi.string().required()

    }),
    deleterepaymentSchema:Joi.object().keys({
        _id: Joi.string().required()
    }),






}