const FormatString = require('../helper/formatString')

test('Test agregator of string',()=>{
    expect(FormatString.agregateString()).toBe("")
    expect(FormatString.agregateString(["","a"])).toStrictEqual(["","a"])
    expect(FormatString.agregateString(1)).toBe(1)
    expect(FormatString.agregateString("")).toBe("")
    expect(FormatString.agregateString("&","&")).toBe("&&")
    expect(FormatString.agregateString("&")).toBe("&")
})