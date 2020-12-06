const Api = require('./app')
const port = process.env.PORT || 5000;

const app = new Api(port)

var http = require('http').createServer(app.getApp());

http.listen(port)