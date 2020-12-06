const base64 = require('../helper/base64')

test('Test encode to base 64',()=>{
    expect(base64.stringToBase64("Bonjours")).toBe("Qm9uam91cnM=")
})