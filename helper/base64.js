/**
 *  * Module that help parse base64 thing
 */
module.exports = {
    /**
     *  * Function that encode to base64 a string
     */
    stringToBase64 :(toTreat)=>(Buffer.from(toTreat)).toString("base64"),
    /**
     *  * Function that decode to base64 a string
     */
    base64ToString :(toTreat)=>(Buffer.from(toTreat,"base64")).toString("utf8")
}