/**
 *  * Module that help parse base64 thing
 */
module.exports = {
    /**
     *  * Function that encode to base64 a string
     */
    stringToBase64 :(toTreat)=>(Buffer.from(toTreat,"utf-8")).toString("base64"),
    /**
     *  * Function that decode to base64 a string
     */
    base64ToString :(toTreat)=>(Buffer.from(toTreat,"base64")).toString("utf-8")
}