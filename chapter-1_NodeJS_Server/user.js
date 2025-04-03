const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter your details:</h1>');

    res.write('<form action="/submit-details" method="POST">');


    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');

    res.write('<label for="male">Male</label>');
    res.write(' <input type="radio" id="male" name="gender" value="male"><br>');

    res.write('<label for="female">Female</label>');
    res.write(' <input type="radio" id="female" name="gender" value="female"><br><br>');

    res.write(' <input type="submit" value="Submit">');

    res.write('</form>');
    res.write('</body>')
    res.write('</html>');
    return res.end();

  } else if(req.url.toLowerCase() === '/submit-details' && req.method === "POST"){

    

    fs.writeFileSync('user.txt', 'Diksha Gupta');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }

  res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>404</h1></body>');
    res.write('</html>');
    res.end();
});



const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server runing on port adress http://localhost:${PORT}`)
});
