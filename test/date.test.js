const date = require('../helper/date')

test('Test getDayOfTheYear',()=>{
    expect(date.getDayOfTheYear(new Date(1582971102000))).toBe("060")
    expect(date.getDayOfTheYear(new Date(1609409502000))).toBe("366")
    expect(date.getDayOfTheYear(new Date(1577873502000))).toBe("001")
    expect(()=>date.getDayOfTheYear("string")).toThrow()
})

test('Test getstringDateFormat',()=>{
    expect(date.getStringDateFormatAJHMS(new Date(1582971102000))).toBe("2020060111142")
    expect(date.getStringDateFormatAJHMS(new Date(1609409502000))).toBe("2020366111142")
    expect(date.getStringDateFormatAJHMS(new Date(1577873502000))).toBe("2020001111142")
    expect(()=>date.getStringDateFormatAJHMS("string")).toThrow()
})