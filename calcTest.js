const fetch = require('node-fetch');

let url = 'http://localhost:8000/';

fetch(url + 'start', { method: 'POST' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'start', response: json.success })
    );

fetch(url + 'calc/add', { method: 'POST', body: 'num=3' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'calc/add', response: json.success })
    );

fetch(url + 'calc/sub', { method: 'POST', body: 'num=1' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'calc/sub', response: json.success })
    );

fetch(url + 'calc/multiply', { method: 'POST', body: 'num=3' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'calc/multiply', response: json.success })
    );

fetch(url + 'calc/divide', { method: 'POST', body: 'num=2' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'calc/divide', response: json.success })
    );

fetch(url + 'calc/M', { method: 'GET' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'calc/M', response: json.success })
    );

fetch(url + 'calc/reset', { method: 'GET' })
    .then(res => res.json())
    .then(json =>
        console.log({ 'testedURL': url + 'calc/reset', response: json.success })
    );

fetch(url + 'get', { method: 'GET' })
    .then(res => res.text())
    .then(body =>
        console.log({ 'testedURL': url + 'calc/get', response: body.success ? body.success : false })
    );