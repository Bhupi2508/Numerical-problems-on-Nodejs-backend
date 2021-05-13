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

    // when the request has invalid parameters or when the request has missing required parameters
    if (req.body.problem === undefined || req.body.pattern === undefined) {
        return res.status(400).json({ message: "invalid parameters" });

    } else {
        switch (req.body.problem) {
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


// Odd vs. even
function inputValidation(req, res) {
    body('problem', 'Email is not valid').isEmail();
    body('pattern', 'Email is not valid').isEmail();
    const errors = validationResult(req);
    return errors;
}


// Odd vs. even
function first(req, res) {
    const errors = inputValidation(req, res);
    let arrayData = req.body.pattern;
    let odd = [];
    let even = [];

    // check the input validation
    if (!Array.isArray(arrayData) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Input type should be an array",
            status: 400
        });
    }

    // array validation
    arrayValidation(res, arrayData)

    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        arrayData.map(element => {
            // console.log("element ", element);
            if (element % 2 !== 0 || element === 1) {
                odd.push(element);
            } else {
                even.push(element);
            }
        });

        // Calling sorting logic
        const oddSort = sortingData(odd);
        const evenSort = sortingData(even);
        const final = evenSort.concat(oddSort)
        return res.status(400).send({
            message: final,
            status: 200
        });
    }
}


// Playing with Os and 1s
function second(req, res) {
    const errors = inputValidation(req, res);
    let data = req.body.pattern;
    let array = [];

    // check the input validation
    if (!Array.isArray(data) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Input type should be an array",
            status: 400
        });
    }

    // array validation
    arrayValidation(res, data)

    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {

        for (let i = 0; i < data.length; i++) {
            for (let j = 1; j > i; j++) {
                if (data[i] === 0 && data[j] !== 0) {
                    console.log(data[i]);
                    console.log(data[j]);
                    data.shift();
                    array.push(data[i]);
                    // data[i] = data[i + 1]
                }
                // else {
                //     data[i] = data[i + 1]
                // }
            }
        }
        console.log("final : =>", array);
    }
}


// An interesting sort.
function third(req, res) {
    let zeros = [];
    let nonZeros = [];
    const errors = inputValidation(req, res);
    let data = req.body.pattern;

    // check the input validation
    if (!Array.isArray(data) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Input type should be an array",
            status: 400
        });
    }

    // array validation
    arrayValidation(res, data)

    // create object
    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(500).send(response);
    } else {
        data.forEach(element => {
            if (element === 0) {
                zeros.push(0)
            } else {
                nonZeros.push(element)
            }
        });

        // Calling sorting logic
        const afterSort = sortingData(nonZeros)
        console.log(afterSort);


        // sort the non zeros element and then concat with zeros
        const finalResult = afterSort.concat(zeros);
        return res.status(200).send({
            message: finalResult,
            status: 200
        });
    }
}


// Binay form & Palindrome or not
function forth(req, res) {
    const errors = inputValidation(req, res);
    let number = req.body.pattern;

    // check the input validations
    if (!Number.isInteger(number) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Please provide only number not in array",
            status: 400
        });
    }
    let response = {};

    // error handle
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        // return res.status(422).send(response);
        res.status(500).json({ errors: errors.array()[0].msg })
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
            message: result,
            status: 200
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


// sorting data
function sortingData(nonZeros) {
    var temp;
    for (var i = 0; i < nonZeros.length; i++) {
        for (var j = i; j > 0; j--) {
            /*
             if arr1[j] < arr1[j - 1], then swapping
            */
            if (nonZeros[j] < nonZeros[j - 1]) {
                temp = nonZeros[j];
                nonZeros[j] = nonZeros[j - 1];
                nonZeros[j - 1] = temp;
            }
        }
    }
    return nonZeros;
}


// array validation function
function arrayValidation(res, data) {
    // input array contain value validation
    for (let i = 0; i < data.length; i++) {
        if (!Number.isInteger(data[i])) {
            return res.status(400).send({
                message: "Please provide only numbers in array"
            })
        }
    }
}


// default pattern
function defaultVal(req, res) {
    const errors = inputValidation(req, res);
    console.log("default");
    // create a object which will attached all the values
    var response = {};
    if (!errors.isEmpty()) {
        response.success = false;
        response.error = errors;
        return res.status(500).send(response);
    }

    response.status = 200;
    response.success = false;
    response.withMessage = 'Please provide one valid problem statements in numeric format (Eg => 1,2,3 or 4)'
    return res.status(200).send(response);
}