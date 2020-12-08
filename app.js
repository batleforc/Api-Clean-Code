var express = require('express');
const compression = require('compression');
var router = require('./routes/apiRouter').router
/**
 * * Classe API, this api handle all the workflow of the api and bind use the needed path
 * * Please remember the fact that this api use a GZIP compression that allow to reduce the size of response 
 */
class Api{
    app
    constructor(port){
        this.app = express()
        /**
         * * Set up of the header, this part allow the api to be called from localhost and only localhost, 
         * * This part allow some special verbose like get,post,options,put,patch and delete
         */
        this.app.use((req,res,next)=>{
            if(port)
                res.setHeader('Access-Control-Allow-Origin',`localhost:${port}`);
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
        
        this.app.use(express.json());
        this.app.use(compression());
        /**
         * * Path that stick to the index and say to the user to go to the path needed by the TP
         */
        this.app.get('/',(req,res)=>{
            res.status(404).json({
                status:"Nothing here",
                message:"I think you need to go to /client/scanner/generate if you want to find something..."
            })
        })
        /**
         * * Add of the router to the index path
         */
        this.app.use('/',router)
        
        
        /**
         * * Path that handle every other wrong path
         */
        this.app.use((req,res)=>{
            res.status(418).json({
                status: "Nothing here",
                message: "three case...the first one the path that you aim doesn't exist anymore or not yet, the second one it has never existed and the third one you misspelled it",
                message2: "I'm a teapot"
            })
        })
    }
    /**
     * * Fonction that return the App
     */
    getApp = ()=> this.app
}

module.exports = Api