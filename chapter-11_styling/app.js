// External Module
const express = require('express');

// Core Module
const path = require('path');



// Local Modules
const rootDir = require('./utils/pathUtils');
const homeRouter = require('./router/homeRoute');
const contactRouter = require('./router/contactRoute');

const app = express();


app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);


app.use(express.static(path.join(rootDir, 'public')))


app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 4000;
app.listen(PORT, () =>{
  console.log(`server is runing on http://localhost:${PORT} `)
});
  

