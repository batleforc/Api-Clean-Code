/**
 * * Module that agregate the validator
 */
module.exports = {
    
    /**
     * * Validator that allow the user to know if the parameter is not null, undefined
     * @param {Object} toTreat 
     * @returns {Bool} return if totreat is not null or undefined
     */
    notNullOrUndefined : (toTreat) => toTreat!==null&&toTreat!==undefined,
    /**
     * * Validator that allow the user to know if the string  parameter is not null, undefined or empty
     * @param {String} toTreat 
     * @returns {Bool} return if  toTreat is not null, not undefined and not empty or filled with a space
     */
    notNullUndefinedOrEmptyString : (toTreat) =>module.exports.notNullOrUndefined(toTreat)&&toTreat!==""&&toTreat!==" "&&typeof toTreat ==="string",
    /**
     * * Validator that allow the user to know if the parameter is not null, undefined or not a number
     * @param {Number} toTreat 
     * @returns {Bool} return if toTreat is not null or undefined and is an integer
     */
    notNullOrUndefinedOranInteger : (toTreat) => module.exports.notNullOrUndefined(toTreat)&&(Number.isInteger(toTreat)||!isNaN(parseInt(toTreat)))
}