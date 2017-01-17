var http = require("http");


var server= http.createServer(function (req, res) {


	//console.log("req");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


server.listen('3000',function(err,result)
{
	  if(err)
	   console.log(err);
		console.log("server is running");
});