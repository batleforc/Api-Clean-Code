const validator = require('../helper/validator')

test('Test not null or undefined or an integer',()=>{
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