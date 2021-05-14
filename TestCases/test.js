/******************************************************************************
 *  Execution       : default node          : cmd> nodemon test.js
 *
 *  @description
 *
 *  @file           : test.js
 *  @overview       : write all the test cases
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-may-2021
 *
 ******************************************************************************/
/**
 * Required files
 */
const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');


/**
 * @param {function()}
 */
describe('Numeric Problems on single API', () => {

    /***************************************************************************************************************/
    /**
    * @purpose : That route is valid or not
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('Invalid Route', done => {
        request('http://localhost:4000')
            .post('/ertyu')
            .send({
                "problem": 4,
                "pattern": 3
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.status).to.equal(404);
                // expect(res.body).to.deep.equal("Register successfull")
                done(err);
            });
    });





    /***************************************************************************************************************/
    /**
    * @purpose : That route is valid or not
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('Valid Route', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 1,
                "pattern": [1, 0, 0, 0, 3, 0, 0, 5, 0]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.status).to.equal(200);
                done(err);
            });
    });




    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : first problem with data
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with value', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 1,
                "pattern": [1, 0, 5, 98, 1, 3, 6, 54]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.message).deep.to.equal([0, 6, 54, 98, 1, 1, 3, 5]);
                done(err);
            });
    });



    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : first problem with error
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with inputs', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 1,
                "pattern": [1, "0", 5, 98, 1, 3, 6, 54]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.status).to.equal(400);
                done(err);
            });
    });




    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : second problem with data
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with value', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 2,
                "pattern": [1, 0, 0, 0, 5, 0, 0, 98, 1, 3, 6, 54, 0, 0]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.message).deep.to.equal([1, 0, 5, 0, 98, 1, 3, 6, 54, 0]);
                done(err);
            });
    });



    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : second problem with error
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with inputs', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 1,
                "pattern": [1, 2, 5, 98.55, 1, 3, 6, 54]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.status).to.equal(400);
                done(err);
            });
    });




    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : third problem with data
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with value', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 3,
                "pattern": [1, 0, 0, 11, 9, 0, 0, 0, 28, 0, 0, 0, 7, 1, 2, 78, 0, 0.]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.message).deep.to.equal([1, 1, 2, 7, 9, 11, 28, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                done(err);
            });
    });



    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : third problem with error
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with inputs', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 3,
                "pattern": [1, true, 5, 98, 1, 3, 6, 54]
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.status).to.equal(400);
                done(err);
            });
    });




    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : forth problem with data
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('First Numeric test with value', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 4,
                "pattern": 4
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.message).deep.to.equal("0000100, NO");
                done(err);
            });
    });



    // /***************************************************************************************************************/
    /***************************************************************************************************************/
    /**
    * @purpose : first problem with error
    * @property {request} request has do request for server
    * @property {post} post has post the function to the given path
    * @property {send} send has send the parameter to the mutation
    * @property {expect} expect has pass the ok means all are fine
    * @returns {error} error
    */
    it('forth Numeric test with inputs', done => {
        request('http://localhost:4000')
            .post('/api')
            .send({
                "problem": 4,
                "pattern": "23"
            })
            .end((err, res) => {

                //if any error the return error
                if (err) {
                    return done(err);
                }
                //otherwise return success data
                expect(res.body.status).to.equal(400);
                done(err);
            });
    });
})
