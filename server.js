var http = require('http');

var server = http.createServer();

var messages = ["Hi", "Bye"];

var handleRequest = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	if (req.method === 'GET') {
		res.statusCode = 200;



		res.end(JSON.stringify({messages: messages});
	}
	
}


server
	.on('request', handleRequest)
	.listen(8887);