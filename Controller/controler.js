/******************************************************************************
 *  Execution       : default node          : cmd> nodemon controler.js
 * 
 *  @description    
 * 
 *  @file           : controler.js
 *  @overview       : control the flow of api
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-may-2021
 *
 ******************************************************************************/
/*
required files
*/
const { body, validationResult } = require('express-validator');


// single api
module.exports.api = (req, res) => {
    console.log("req came in cotroller => ", req.body);
    body('problem', 'Please provide value').isLength({ min: 1 });
    body('password', 'password is not valid').isLength({ min: 4 });
    const errors = validationResult(req);

    switch (req.body.problem) {
        case 1:
            first(req, res, errors);
            break;
        case 2:
            second(req, res, errors);
            break;
        case 3:
            third(req, res, errors);
            break;
        case 4:
            forth(req, res, errors);
            break;
        default:
            defaultVal(req, res, errors);
            break;
    }

};


// first problem
function first(req, res, errors) {
    console.log("1");
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        console.log("ok");
    }
}


// second problem
function second(req, res, errors) {
    console.log("2");
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        console.log("ok");
    }
}


// third problem
function third(req, res, errors) {
    console.log("3");
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        console.log("ok");
    }
}


// forth problem
function forth(req, res, errors) {
    console.log("4");
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        console.log("ok");
    }
}


// default
function defaultVal(req, res) {

}