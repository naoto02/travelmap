//server.js
var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var app = connect();
var port = 3000;
app.use(serveStatic(__dirname));
app.use(function(req, res){
//  console.log('connection start!\n');
})

http.createServer(app).listen(port);
//app.listen(port,function(){console.log('test')});
console.log('Server started at http://localhost:' + port);
