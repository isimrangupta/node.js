const http = require('http');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome to Complete Coding</h1></body>');
    res.write('</html>');
    res.end();

  } else if(req.url === '/home'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome to Home page!</h1><p>What do you want to see ?</p></body>');
    res.write('</html>');
    return res.end();

  } else if(req.url === '/contact'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Contact:12345678</h1><h3>Email ID :- @simran.com</h3></body>');
    res.write('</html>');
    return res.end();

  } else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>404</h1></body>');
    res.write('</html>');
    res.end();

  }
   
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server runing on port adress http://localhost:${PORT}`)
});
