var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('www'));

app.get('/getAll', function (req, res) {
  fs.readFile("./data/todos.json", function(err, data){
  	res.json(JSON.parse(data.toString()).results)
  })
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});