var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json

var server = app.listen(8081, function () {
   // var host = server.address().address
   var host = process.env.HOST;
   // var host = '10.54.59.57';
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

app.use(function(req, res, next) {
  console.log(req);
  // console.log(JSON.stringify(req.headers, null, 4));
  next();
})


// app.post('/saveSetup', urlencodedParser, function (req, res) {
app.post('/saveSetup', function (req, res) {
   // Prepare output in JSON format
   console.log(`EXPRESS REQUEST: ${JSON.stringify(req.body)}`);
   /**
   response = {
      firstName:req.body.firstName,
      lastName:req.body.lastName
   };
   */
   response = req.body;
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
