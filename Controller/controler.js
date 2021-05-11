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
const { check, body, validationResult } = require('express-validator');


// single api
module.exports.api = (req, res) => {
    console.log("req came in cotroller => ", req.body);

    // when the request has invalid parameters or when the request has missing required parameters
    if (req.body.problem === undefined || req.body.pattern === undefined) {
        console.log("no");
        const errors = validationResult(req);
        return res.status(400).json({ errors: errors.array() });
    } else {
        console.log("yes");
        // check('problem', 'Please provide numeric value').isNumeric().isLength({ min: 1 }).isArray();
        // check('pattern', 'Please provide valid pattern').isNumeric().isLength({ min: 1 });
        const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.array() })
        //   }


        switch (req.body.pattern) {
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
    }
};


// first problem
function first(req, res, errors) {
    console.log("1");
    let odd = [];
    let even = [];

    var response = {};
    if (errors) {
        console.log("errohai");
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        let arrayData = req.body.problem;
        arrayData.array.forEach(element => {
            console.log("element ", element);
        });
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
function defaultVal(req, res, errors) {
    console.log("default");
    // create a object which will attached all the values
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    }


    response.success = false;
    response.withMessage = 'Please provide one valid problem statements (Eg => 1,2,3 or 4)'
    return res.status(422).send(response);

}