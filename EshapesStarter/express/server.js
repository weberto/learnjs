var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors());
app.use(express.static('public'));

var server = app.listen(8081, function () {
   // var host = server.address().address
   var host = '10.54.59.57';
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/first', function(req, res) {
  console.log('first');
});
app.get('/second', function(req, res) {
  console.log('second');
});
app.get('/third', function(req, res) {
  console.log('third');
});
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/*', function (req, res) {
   res.send('Sorry, page not found.');
})
