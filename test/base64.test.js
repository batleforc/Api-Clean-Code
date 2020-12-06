const base64 = require('../helper/base64')

test('Test encode to base 64',()=>{
    expect(base64.stringToBase64("Bonjours")).toBe("Qm9uam91cnM=")
    expect(base64.stringToBase64('Jojo')).toBe("Sm9qbw==")
    expect(base64.stringToBase64("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")).toBe("SmUgc3VpcyB1bmUgY2hhaW5lIGRlIGNoYXJhY3TDqXJlIHZyYWltZW50IGRpZmZpY2lsZSBldCBqZSB2YWlzIHRlIHBvc2VyIHVuZSBxdWVzdGlvbiA/IQ==")
})

test('Test decode to base 64',()=>{
    expect(base64.base64ToString("Qm9uam91cnM=")).toBe("Bonjours")
    expect(base64.base64ToString('Sm9qbw==')).toBe("Jojo")
    expect(base64.base64ToString("SmUgc3VpcyB1bmUgY2hhaW5lIGRlIGNoYXJhY3TDqXJlIHZyYWltZW50IGRpZmZpY2lsZSBldCBqZSB2YWlzIHRlIHBvc2VyIHVuZSBxdWVzdGlvbiA/IQ==")).toBe("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")
})

test('Cross test between encore to decode in base 64',()=>{
    expect(base64.base64ToString(base64.stringToBase64("Bonjours"))).toBe("Bonjours")
    expect(base64.base64ToString(base64.stringToBase64('Jojo'))).toBe("Jojo")
    expect(base64.base64ToString(base64.stringToBase64("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!"))).toBe("Je suis une chaine de charactére vraiment difficile et je vais te poser une question ?!")
})

test('Lets break it !!!',()=>{
    expect(()=>base64.base64ToString(null)).toThrow()
    expect(()=>base64.stringToBase64(null)).toThrow()
    expect(()=>base64.base64ToString(undefined)).toThrow()
    expect(()=>base64.stringToBase64(undefined)).toThrow()
    expect(()=>base64.base64ToString(12)).toThrow()
    expect(()=>base64.stringToBase64(12)).toThrow()
})