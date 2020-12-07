/**
 * *  Module that help to handle the use of date
 */
module.exports ={
    /**
     * * Function that return the date with a format AAAAJJJHHMMSS
     * @param {Date} Optional, this parameter allow the user to precise a Date object to parse, otherwise the parsed date is gonna be the current date
     * @returns {String} String contain the date
     */
    getStringDateFormatAJHMS : (date=null) =>{
        var workingdate = date==null? new Date(): date;
        return `${workingdate.getFullYear()}${module.exports.getDayOfTheYear(workingdate)}${workingdate.getHours()}${workingdate.getMinutes()}${workingdate.getSeconds()}`
    },
    /**
     * * Function that return the day of the year
     * @param {Date} the date to processe
     * @returns {Number} the number that represent the day in the year 
     * 
     * This function come from 
     * https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
     * Please be aware of the fact that the considered answer is not the first one because this one seens more correct
     */
    getDayOfTheYear : (date) =>{
        var toreturn = ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000).toString();
        return toreturn.length==3?toreturn:toreturn.length==2?"0"+toreturn:"00"+toreturn;
    },
}