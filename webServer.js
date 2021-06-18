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
        case "sub":
            let promise2 = new Promise((resolve, reject) => {
                setTimeout(() => resolve(calculator.sub(request.body, M)), 1000)
            });
            M = await promise2;
            break;
        case "multiply":
            let promise3 = new Promise((resolve, reject) => {
                setTimeout(() => resolve(calculator.multiply(request.body, M)), 1000)
            });
            M = await promise3;
            break;
        case "divide":
            let promise4 = new Promise((resolve, reject) => {
                setTimeout(() => resolve(calculator.divide(request.body, M)), 1000)
            });
            M = await promise4;
            break;
        }
      return {'M': M, 'success': true};
  }

app.post('/start', function(request, response) {
    M = 0;
    response.send({'success': true,'M': M});
});

app.post('/calc/add', function(request, response) {
     return post(request, 'add').then(function(result){
        response.send(result);
     });
});

app.post('/calc/sub', function(request, response) {
    return post(request, 'sub').then(function(result){
        response.send(result);
    });
});

app.post('/calc/multiply', function(request, response) {
    return post(request, 'multiply').then(function(result){
        response.send(result);
    });
});

app.post('/calc/divide', function(request, response) {
    return post(request, 'divide').then(function(result){
        response.send(result);
    });
});

app.get('/calc/M', function(request, response) {
    return response.send( {'success': true,'M': M});
});

app.get('/calc/reset', function(request, response) {
    M = 0 ;
    return response.send( {'success': true,'M': M});
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

//The 404 Route (ALWAYS Keep this as the last route)
 app.get('*', function(req, res){
    res.send('what??? 404 error generated with 404 status code', 404);
});

