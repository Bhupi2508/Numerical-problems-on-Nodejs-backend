/******************************************************************************
 *  Execution       : default node          : cmd> nodemon route.js
 *
 *  @file           : route.js
 *  @overview       : routes
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-may-2021
 *
 ******************************************************************************/
/*
required files
*/
const express = require('express');
const router = express.Router();
const mailControler = require('../Controller/controler');


// find the route and then sent to the controller
router.post('/api', mailControler.api)


// export the router
module.exports = router;