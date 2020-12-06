const validator = require('../helper/validator')

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

})