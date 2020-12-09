const Api = require('./app')
const port = process.env.PORT || 5000;

const app = new Api(port)

var http = require('http').createServer(app.getApp());

/**
 * * Mise en place du listener web
 */
http.listen(port,(err)=>{
    if(err) return console.log(err)
    console.log(`The api is listening to the port ${port}`)
})