const app = require('../app')
const request = require('supertest')
const {Base64,DateHandler} = require('../helper')
const Api = new app()
const get_request_validate = ()=> request(Api.getApp()).post('/client/scanner/validation').set('content-type', 'application/json')
const get_request_generate = ()=> request(Api.getApp()).post('/client/scanner/generate').set('content-type', 'application/json')

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

test('Call of the /client/scanner/validate  with scanner,user,date and an empty idtraitement ',done =>{
    get_request_validate()
        .send({
            user:Base64.stringToBase64("jojo"),
            scanner:"10",
            date:DateHandler.getStringDateFormatAJHMS(new Date()),
            idtraitement:""
        })
        .then(response=>{
            expect(response.statusCode).toBe(400);
            done();
        })
})
test('Call of the /client/scanner/validate with scanner,user,date and a wrong id traitement',done =>{
    get_request_validate()
        .send({
            user:Base64.stringToBase64("jojo"),
            scanner:"10",
            date:DateHandler.getStringDateFormatAJHMS(new Date()),
            idtraitement:"Je suis une chaine de charactére qui meme en étant tester ne passera pas"
        })
        .then(response=>{
            expect(response.statusCode).toBe(200);
            expect(response.body.result).toBe(false)
            done();
        })
        .catch(err=>done(err))
})

test('Call of the /clients/scanner/validate and /clients/scanner/validate cross validation',done =>{
    var user = Base64.stringToBase64("MoshiMoshi")
    var scanner ="10"

    get_request_generate()
        .send({
            user:user,
            scanner:"10"
        })
        .then((response)=>{
            expect(response.statusCode).toBe(200) //13
            var date = Base64.base64ToString(response.body.result).replace("MoshiMoshi","").replace(scanner,"")
            get_request_validate()
                .send({
                    user:user,
                    scanner:scanner,
                    date:date,
                    idtraitement:response.body.result
                })
                .then(response2=>{
                    expect(response2.statusCode).toBe(200)
                    expect(response2.body.result).toBe(true)
                    done()
                })
                .catch(err=>done(err))
        })

}) 