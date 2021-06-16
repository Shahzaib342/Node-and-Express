var calculator = require('./calc');

var express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
var app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));
let M;

var server = app.listen(8000, function () {
    console.log("Server is up!");
});

async function post(request, func) {
    switch (func) {
        case "add":
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(calculator.add(request.body, M)), 1000)
              });
              M = await promise; 
            break;
        }
      return {'M': M};
  }

app.post('/start', function(request, response) {
    M = 0;
    response.send({'success': true});
});

app.post('/calc/add', function(request, response) {
     return post(request, 'add').then(function(result){
        response.send(result);
     });
});