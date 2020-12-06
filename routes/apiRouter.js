var express = require('express')
var Client = require('./client')
/**
 * * Fonction that bind subPath to Function
 *  * If you want to add path to the client do it here
 */
exports.router = (()=>{
    var ApiRouter = express.Router();
    ApiRouter.route('/client/scanner/generate').post(Client.generateur)
    ApiRouter.route('test').get(()=>console.log("test"))
    return ApiRouter
})();