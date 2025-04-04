//Express Module
const express = require('express');

// Local Module
const requestHandler = require('./user');

const app = express();

app.get("/",(req, res, next) => {middleware
  console.log("Came in first ", req.url, req.method);
//  res.send("<p>Came from frst Middleware</p>");
  next();
});

app.post("/submit-details",(req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to complete coding Node.js series !</p>");
});


app.use("/",(req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Came from another Middleware</p>");
});






const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server runing on port adress http://localhost:${PORT}`)
});