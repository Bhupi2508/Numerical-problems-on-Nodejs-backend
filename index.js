/******************************************************************************
 *  Execution       : default node          : cmd> nodemon index.js
 * 
 *  @description    : Create A Single API for multiple numericals problems   
 * 
 *  @file           : Numericals Problem
 *  @overview       : Get the solution based on inputs
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-may-2021
 *
 ******************************************************************************/
/*
required files
*/
const express = require('express');
const app = express();
const route = require('./Route/route')

// create server on express
const server = require('http').createServer(app)

// provide env instance on globally
require('dotenv').config();

/*
Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(express.json());

// route middlewares
app.use('/', route);

const port = process.env.port
// Server will be running on given port
server.listen(port, () => {
    console.log(`servere is running on port => ${port}`)
});

