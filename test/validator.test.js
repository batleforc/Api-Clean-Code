const validator = require('../helper/validator')

test('Test  not null or undefined (true mode) ',()=>{
    expect(validator.notNullOrUndefined("10")).toBe(true)
    expect(validator.notNullOrUndefined("1")).toBe(true)
    expect(validator.notNullOrUndefined("0")).toBe(true)
    expect(validator.notNullOrUndefined("-1")).toBe(true)
    expect(validator.notNullOrUndefined("Bonjour")).toBe(true)
    expect(validator.notNullOrUndefined("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")).toBe(true)
    expect(validator.notNullOrUndefined(-1)).toBe(true)
    expect(validator.notNullOrUndefined(0)).toBe(true)
    expect(validator.notNullOrUndefined(NaN)).toBe(true)
    expect(validator.notNullOrUndefined([])).toBe(true)
    expect(validator.notNullOrUndefined({})).toBe(true)
    expect(validator.notNullOrUndefined(()=>{})).toBe(true)
    expect(validator.notNullOrUndefined("")).toBe(true)
    expect(validator.notNullOrUndefined(" ")).toBe(true)
})

test('Test  not null or undefined (false mode) ',()=>{
    expect(validator.notNullOrUndefined(null)).toBe(false)
    expect(validator.notNullOrUndefined(undefined)).toBe(false)
    expect(validator.notNullOrUndefined()).toBe(false)
})

test('Test not null or undefined of an integer (true mode)',()=>{
    expect(validator.notNullOrUndefinedOranInteger(10)).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger("10")).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger(1)).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger("1")).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger(0)).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger("0")).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger(-1)).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger("-1")).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger(Math.PI)).toBe(true)
    expect(validator.notNullOrUndefinedOranInteger(`${Math.PI}`)).toBe(true)
})

test('Test  not null or undefined of an integer (false mode) ',()=>{
    expect(validator.notNullOrUndefinedOranInteger(null)).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger(undefined)).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger(NaN)).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger([])).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger({})).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger()).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger(()=>{})).toBe(false)
    expect(validator.notNullOrUndefinedOranInteger("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")).toBe(false)

})

test('Test not null or undefined of an string (true mode)',()=>{
    expect(validator.notNullUndefinedOrEmptyString("10")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyString("1")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyString("0")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyString("-1")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyString("Bonjour")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyString("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")).toBe(true)
})

test('Test  not null or undefined of an string (false mode) ',()=>{
    expect(validator.notNullUndefinedOrEmptyString(-1)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString(0)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString(null)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString(undefined)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString(NaN)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString([])).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString({})).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString()).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString(()=>{})).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString("")).toBe(false)
    expect(validator.notNullUndefinedOrEmptyString(" ")).toBe(false)
})


test('Test not null or undefined of an array of string (true mode)',()=>{
    expect(validator.notNullUndefinedOrEmptyStringS("10")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyStringS("1")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyStringS("0")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyStringS("-1")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyStringS("Bonjour")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyStringS("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")).toBe(true)
    expect(validator.notNullUndefinedOrEmptyStringS("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!","test","plop")).toBe(true)
    
})

test('Test  not null or undefined of an array of  string (false mode) ',()=>{
    expect(validator.notNullUndefinedOrEmptyStringS(-1)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS(0)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS(null)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS(undefined)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS(NaN)).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS([])).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS({})).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS()).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS(()=>{})).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS("")).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS(" ")).toBe(false)
    expect(validator.notNullUndefinedOrEmptyStringS("test"," ")).toBe(false)
})