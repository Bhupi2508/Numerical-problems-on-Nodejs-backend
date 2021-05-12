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
        return res.status(400).json({ message: "invalid parameters" });
    } else {
        console.log("yes");

        // if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.array() })
        //   }


        switch (req.body.pattern) {
            case 1:
                first(req, res);
                break;
            case 2:
                second(req, res);
                break;
            case 3:
                third(req, res);
                break;
            case 4:
                forth(req, res);
                break;
            default:
                defaultVal(req, res);
                break;
        }
    }
};


// check validation
function inputValidation(req, res) {
    check('problem', 'Please provide numeric value').isNumeric().isLength({ min: 1 }).isArray();
    check('pattern', 'Please provide valid pattern').isNumeric().isLength({ min: 1 });

    const errors = validationResult(req);
    return errors;
}


// first problem
function first(req, res) {
    const errors = inputValidation(req, res);
    console.log("1");
    let odd = [];
    let even = [];

    var response = {};
    if (!errors.isEmpty()) {
        console.log("errohai");
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        let arrayData = req.body.problem;
        arrayData.map(element => {
            // console.log("element ", element);
            if (element % 2 !== 0 || element === 1) {
                odd.push(element);
            } else {
                even.push(element);
            }
        });

        for (let i = 0; i < odd.length; i++) {
            let oddSort;
            oddSort = odd[i];

        }
        console.log(`${odd} and ${even}`);
        return true
    }
}


// second problem
function second(req, res) {
    const errors = inputValidation(req, res);
    console.log("2");
    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        console.log("ok");
    }
}


// third problem
function third(req, res) {
    const errors = inputValidation(req, res);
    console.log("3");
    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        console.log("ok");
    }
}


// forth problem
function forth(req, res) {
    const errors = inputValidation(req, res);
    let number = req.body.problem;
    console.log("sdf", typeof (number));

    // check the input typ
    if (!Number.isInteger(number) && Number.isInteger(req.body.pattern)) {
        return res.status(422).send({
            message: "Please provide only number"
        });
    }
    let response = {};

    // error handle
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        let arr = [];
        let i = 0;
        let revbinary = "";
        /*
        Condition for Binary element
        */
        while (number > 0) {
            arr[i] = number % 2;
            revbinary = arr[i] + revbinary;
            number = Math.floor(number / 2);
            i++
        } while (revbinary.length < 7) {
            revbinary = '0' + revbinary;
        }

        // check palindrome
        let palCheck = palindrome(revbinary);
        const result = `${revbinary}, ${palCheck ? 'Yes' : 'NO'}`;
        return res.status(200).send({
            message: result
        });
    }
}

// check palindrome
function palindrome(number) {

    let len = number.length;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        if (number[i] !== number[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


// default
function defaultVal(req, res) {
    const errors = inputValidation(req, res);
    console.log("default");
    // create a object which will attached all the values
    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    }

    response.success = false;
    response.withMessage = 'Please provide one valid problem statements in numeric format (Eg => 1,2,3 or 4)'
    return res.status(422).send(response);

}