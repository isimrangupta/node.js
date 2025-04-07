// Core Module
const path = require('path');


// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

// Add Home Form Page
hostRouter.get("/add-home", (req, res, next) => {
   res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
  });
 

// Form Submission Handler
hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))
    }); 
    

module.exports = hostRouter;