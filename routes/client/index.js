var {Validator,FormatString,DateHandler} = require('../../helper')
module.exports = {
    /**
     * * Function that generate an id that represent the treatment of a process
     * @param {Object} req Content of the client request
     * @param {Object} res Tools to respond to the client request
     * @returns {Void} This function return nothing
     */
    generateur : async (req,res)=>{
        console.log("test")
        if(Validator.notNullUndefinedOrEmptyString(req.body.user)||Validator.notNullOrUndefinedOranInteger(req.body.scanner)){
            return res.status(400).json({status:"Failure",message:"One or more parameter need to be in the body or isn't correct"})
        }
        var result = FormatString(req.body.user,req.body.scanner,DateHandler.getStringDateFormatAJHMS())
        res.status(200).json({status:"Ok",result:result})
    }
}