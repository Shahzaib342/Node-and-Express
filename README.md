
<strong>Exercise : Node & Express</strong>

<strong>This repository contains basic code for getting you started with API writing skills in Node JS.
         Below mentioned points are extracted from a assignment and solved here in this repository. You can practice these to get yourself 
         familiar with Node and Express JS</strong>
         
         You just need to run npm install in the project dir and then follow the assignment points
         to check and test end points.

<strong>Read more Node.js materials</strong>
<li>https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e</li>
<li>Download: https://nodejs.org/en/download/</li><br>

<strong>Review ho to do modules and how to use NPM efficiently</strong>
<li> Modules docs: https://nodejs.org/docs/latest-v12.x/api/modules.html</li>
<li>More about modules:
https://medium.com/better-programming/node-js-modules-basics-to-advanced-2464001229b6</li>
<li>(extra read)
https://www.sitepoint.com/beginners-guide-node-package-manager/</li><br>

<strong>Express tutorials:</strong>
<li>https://www.youtube.com/watch?v=L72fhGm1tfE</li>
<li>https://expressjs.com/en/starter/hello-world.html</li>
Continue the tutorial using the “next” button in the bottom of the page
<li>https://expressjs.com/en/guide/writing-middleware.html</li>
<li>https://expressjs.com/en/guide/using-middleware.html</li>
<li>Express API: https://expressjs.com/en/4x/api.html</li><br>

<strong>Learn how to fetch()</strong>
<li>https://javascript.info/fetch</li>
<br>
1. Build readWrite.js which gets two arguments “file to read from” and “file to write to”.
<br>a. It reads the first file and writes the opposite text (char by char) to the output file
<br>b. So
<br>i.>node readWrite a.txt b.txt
<br>ii.
should read a.txt and write the reversed text to b.txt
<br>2. Develop a WebServer using express.js
<br>a. Build a calc.js module that allows starting a web-based calculator app which supports the
following routes:
<br>i.POST /start zerofiy the shared variable M (M = 0)
<br>ii.POST /calc/add/:num sets M+= :num . It returns the new M
<br>iii.POST /calc/sub/:num sets M -= :num. It returns the new M
<br>iv. PUT /calc/multiply/:num sets M=:num * M. it returns the new M
<br>v. PUT /calc/divide/:num sets M=M/:num. It returns the new M
<br>vi. GET /calc/M returns M
<br>vii. POST /calc/reset sets M=0 and returns 0
<br>viii. DELETE /calc/del delete the session
<br>ix.Upon unknown request. You should return 404 (HTTP Status)
<br>x.Upon requests that throw exceptions, you should return 500 (HTTP Status)
<br>xi.Develop a calcTest.js (stand-alone process) which tests all the calc.js functionality
using node-fetch to make requests to your server. calcTest should print what it
tests and what was the result (OK/FAILURE)
<br>https://www.npmjs.com/package/node-fetch
<br>b. myExpress.js module that registers the following endpoints:
<br>i.GET /calc.html return an HTML page that allow running calculation via HTTP
request to the calc.js module on the backend
<br>ii. GET /readme.html return EX1’s readme
<br>iii. GET /test.html returns EX1’s test.html (that should work, including importing the
js files needed)
<br> c. Create a webServer.js requires myExpress and calc and actually starts listen to the
network


<br>Shahzaib