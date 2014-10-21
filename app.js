var express = require('express'),
	app  = express(),
	server = require('http').createServer(app);


server.listen(process.env.PORT || 8080);

app.use(express.static( __dirname +'/public'));

app.get('/',function(req,res){
  res.sendfile( __dirname + '/public/views/kroz.html');

});
