const http = require('http');

const server = http.createServer((req, res) =>{
  console.log(req);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server runing on port adress http://localhost:${PORT}`)
});