/**
 *  * Module that agregate the multiple string format
 */
module.exports = {
    /**
     *  * Function that combine String
     *  @param {string / number}
     */
    agregateString :(...theArgs)=>{
        if(theArgs.length===0) return ""
        return theArgs.reduce((previous,current)=>`${previous}${current.toString()}`)
    }
}