/**
 *  * Module that agregate the multiple string format
 */
module.exports = {
    /**
     *  * Function that combine String
     */
    agregateString :(...theArgs)=>theArgs.reduce((previous,current)=>`${previous}${current}`)
}