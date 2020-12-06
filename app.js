var express = require('express');
const compression = require('compression');
var router = require('./routes/apiRouter').router
class Api{
    app
    constructor(port){
        this.app = express()
        this.app.use((req,res,next)=>{
            res.setHeader('Access-Control-Allow-Origin',`localhost:${port}`);
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
        
        this.app.use(express.json());
        this.app.use(compression());
        this.app.use('/',router)
        
        this.app.get('/',(req,res)=>{
            res.status(404).json({
                status:"Nothing here",
                message:"I think you need to go to /client/scanner/generate if you want to find something...but if you want i'm a teapot"
            })
        })
        /**
         * Path that handle every other wrong path
         */
        this.app.use((req,res)=>{
            res.status(418).json({
                status: "Nothing here",
                message: "three case...the first one the path that you aim doesn't exist anymore or not yet, the second one it has never existed and the third one you misspelled it",
                message2: "I'm a teapot"
            })
        })
    }
    getApp = ()=> this.app
}

module.exports = Api