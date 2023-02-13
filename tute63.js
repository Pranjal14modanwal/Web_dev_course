// console.log("Hello World");


// This is a nodejs website's code
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('');   //anything i paste here is not working and giving me the error 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// Node.js REPL

// terminal(neeche black screen mei) mein agar hum node dal de toh neeche 
// agra hum 
// a = 24;
// 34
// c = 34;
//  34
//  a +c
//  68
//  here REPL is working

// .exit is used to exit the terminal
// _ underscore is used to get the previous variable(it can be string, numbers, etc...)
// If we enter the double tab then something get print it is a global variable in node and there is no 
// need to export there are some modules    