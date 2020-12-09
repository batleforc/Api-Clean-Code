const app = require('../app')
const request = require('supertest')
const {Base64} = require('../helper')
const Api = new app()
const get_request_validate = ()=> request(Api.getApp()).post('/client/scanner/validation').set('content-type', 'application/json')
test('Call of the /client/scanner/validate without parameter',done =>{
    get_request_validate()
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/validate without user and scanenr in number',done =>{
    get_request_validate()
        .send({scanner:10})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/validate without user and scanner in string',done =>{
    get_request_validate()
        .send({scanner:"10"})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/validate without user and scanner empty',done =>{
    get_request_validate()
        .send({scanner:""})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/validate without scanner and user number',done =>{
    get_request_validate()
        .send({user:10})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/validate without scanner and user empty',done =>{
    get_request_validate()
        .send({user:""})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/validate with scanner and user',done =>{
    get_request_validate()
        .send({user:Base64.stringToBase64("maxime"),scanner:"10"})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})
test('Call of the /client/scanner/validate with scanner and user',done =>{
    get_request_validate()
        .send({user:Base64.stringToBase64("jojo"),scanner:"10"})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})