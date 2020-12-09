var {Validator,FormatString,DateHandler,Base64} = require('../../helper')
const base64 = require('../../helper/base64')
const formatString = require('../../helper/formatString')
const validator = require('../../helper/validator')
module.exports = {
    /**
     * * Function that generate an id that represent the treatment of a process
     * @param {Object} req Content of the client request
     * @param {Object} res Tools to respond to the client request
     * @returns {Void} This function return nothing
     */
    generateur : async (req,res)=>{
        if(!Validator.notNullUndefinedOrEmptyString(req.body.user)||!Validator.notNullOrUndefinedOranInteger(req.body.scanner))
            return res.status(400).json({
                status:"Failure",
                message:"One or more parameter need to be in the body or isn't correct, please remember to add user and scanner"
            })
        try{
            var result = FormatString.agregateString(base64.base64ToString(req.body.user),req.body.scanner,DateHandler.getStringDateFormatAJHMS())
            return res.status(200).json({
                status:"Ok",
                result:base64.stringToBase64(result),
                username:base64.base64ToString(req.body.user)
            })
        }catch(error){
            if(error instanceof TypeError)
                return res.status(400).json({
                    status:"Failure",
                    message:`The username or the scanner is not of the good type, please consider doing the thing correctly`,
                    Error:error.message
                })
            else
                return res.status(500).json({
                    status:"Failure",
                    message:`The username or the scanner has throw an unexpected error please contact you api owner and pass the Error parameter to him`,
                    Error:error.message
                })
        }
    },
    /**
     * * Function that validate a previously generated id with the date, user and scanner
     * @param {Object} req Content of the client request
     * @param {Object} res Tools to respond to the client request
     * @returns {Void} This function return nothing
     */
    validation : async (req,res)=>{
        if(!Validator.notNullUndefinedOrEmptyStringS(req.body.scanner,req.body.user,req.body.date,req.body.idtraitement))
            return res.status(400).json({
                status:"Failure",
                message:"One or more parameter need to be in the body or isn't correct, please remember to add user and scanner",
                request:req.body.idtraitement
            })
        try{
            var decodedid =base64.base64ToString(req.body.idtraitement)
                return res.status(200).json({
                    status:"Ok",
                    result:decodedid===formatString.agregateString(Base64.base64ToString(req.body.user),req.body.scanner,req.body.date),
                    request:req.body.idtraitement,
                })
        }catch(error){
            if(error instanceof TypeError)
                return res.status(400).json({
                    status:"Failure",
                    message:`The username or the scanner is not of the good type, please consider doing the thing correctly`,
                    Error:error.message,
                    request:req.body.idtraitement
                })
            else
                return res.status(500).json({
                    status:"Failure",
                    message:`The username or the scanner has throw an unexpected error please contact you api owner and pass the Error parameter to him`,
                    Error:error.message,
                    request:req.body.idtraitement})
        }
    },
    /**
     * * Function that encode a string to base64
     * @param {Object} req Content of the client request
     * @param {Object} res Tools to respond to the client request
     * @returns {Void} This function return nothing
     */
    encodeString: async (req,res)=>{
        module.exports.parseHandler(req,res,base64.stringToBase64,"The parameter string, that is gonna be encoded to base64")
    },
    /**
     * * Function that decode a string from base 64
     * @param {Object} req Content of the client request
     * @param {Object} res Tools to respond to the client request
     * @returns {Void} This function return nothing
     */
    decodeString: async (req,res)=>{
        module.exports.parseHandler(req,res,base64.base64ToString, "The parameter string, that is gonna be decoded to base64")
    },
    /**
     * * Function that apply action to the parameter string, allow the kiss
     * @param {Object} req Content of the client request
     * @param {Object} res Tools to respond to the client request
     * @returns {Void} This function return nothing
     */
    parseHandler: async(req,res,action,descriptor)=>{
        if(!Validator.notNullUndefinedOrEmptyString(req.body.string))
            return res.status(400).json({status:"Failure",message:`${descriptor}isn't well formated or present, please add it to the json body`})
        try{
            return res.status(200).json({status:"Ok",result:action(req.body.string)})
        }catch(error){
            if(error instanceof TypeError)
                return res.status(400).json({status:"Failure",message:`${descriptor} is not of the good type, please consider doing the thing correctly`})
            else
                return res.status(500).json({status:"Failure",message:`${descriptor} has throw an unexpected error please contact you api owner and pass the Error parameter to him`,Error:error})
        }
    }
}