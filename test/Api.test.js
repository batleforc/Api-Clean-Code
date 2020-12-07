const app = require('../app')
const request = require('supertest')
const Api = new app()
const get_request_generate = ()=> request(Api.getApp()).post('/client/scanner/generate')
test('Call of the /client/scanner/generate without parameter',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/generate without user and scanenr in number',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .send({scanner:10})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/generate without user and scanner in string',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .send({scanner:"10"})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/generate without user and scanner empty',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .send({scanner:""})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/generate without scanner and user number',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .send({user:10})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/generate without scanner and user empty',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .send({user:""})
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})

test('Call of the /client/scanner/generate without scanner and user empty',done =>{
    get_request_generate()
        .set('content-type', 'application/json')
        .send({user:"maxime",scanner:"10"})
        .then(response=>{
            console.log(response.body)
            expect(response.statusCode).toBe(200);
            done();
        })
})