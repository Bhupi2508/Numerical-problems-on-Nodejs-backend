/******************************************************************************
 *  Execution       : default node          : cmd> nodemon controler.js
 * 
 *  @description    
 * 
 *  @file           : controler.js
 *  @overview       : control the flow of api
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 15-may-2021
 *
 ******************************************************************************/
// single api
module.exports.api = (req, res) => {

    // when the request has invalid parameters or when the request has missing required parameters
    if (req.body.problem === undefined || req.body.pattern === undefined) {
        return res.status(400).json({ message: "invalid parameters", status: 400 });

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
function first(req, res) {
    let arrayData = req.body.pattern;
    let odd = [];
    let even = [];

    // array validation
    arrayValidation(res, arrayData)

    // check the input validation
    if (!Array.isArray(arrayData) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Input type should be an array",
            status: 400
        });
    } else {
        arrayData.map(element => {
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
        return res.status(200).send({
            message: final,
            status: 200,
            problem: "Odd vs even"
        });
    }
}


// Playing with Os and 1s
function second(req, res) {
    let array = [];
    let data = req.body.pattern;

    // array validation
    arrayValidation(res, data)

    // check the input validation
    if (!Array.isArray(data) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Input type should be an array",
            status: 400
        });
    } else {

        for (let i = 0; i < data.length; i++) {
            for (let j = (i + 1); j <= (i + 1); j++) {
                if (data[i] === 0 && data[j] !== 0) {
                    array.push(data[i])
                }
                else if (data[i] !== 0 && data[j] === 0) {
                    array.push(data[i])
                } else if (data[i] !== 0 && data[j] !== 0) {
                    array.push(data[i])
                }
            };
        }
    }
    return res.status(200).send({
        message: array,
        status: 200,
        problem: "Playing with Os and 1s"
    });

}


// An interesting sort.
function third(req, res) {
    let zeros = [];
    let nonZeros = [];
    let data = req.body.pattern;

    // array validation
    arrayValidation(res, data)

    // check the input validation
    if (!Array.isArray(data) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Input type should be an array",
            status: 400
        });
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

        // sort the non zeros element and then concat with zeros
        const finalResult = afterSort.concat(zeros);
        return res.status(200).send({
            message: finalResult,
            status: 200,
            problem: "An interesting sort"
        });
    }
}


// Binay form & Palindrome or not
function forth(req, res) {
    let number = req.body.pattern;

    // check the input validations
    if (!Number.isInteger(number) && Number.isInteger(req.body.problem)) {
        return res.status(400).send({
            message: "Pattern should be Number",
            status: 400
        });
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
            i++;
        } while (revbinary.length < 7) {
            revbinary = '0' + revbinary;
        }

        // check palindrome
        let palCheck = palindrome(revbinary);
        const result = `${revbinary}, ${palCheck ? 'Yes' : 'NO'}`;
        return res.status(200).send({
            message: result,
            status: 200,
            problem: "Binay form & Palindrome or not"
        });
    }
}



// default pattern
function defaultVal(req, res) {
    let response = {};
    response.status = 200;
    response.success = false;
    response.withMessage = 'Please provide one valid problem statements in numeric format (Eg => 1,2,3 or 4)'
    return res.status(200).send(response);
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
    let temp;
    for (let i = 0; i < nonZeros.length; i++) {
        for (let j = i; j > 0; j--) {
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
                message: "Please provide only numbers in array",
                status: 400
            })
        }
    }
}