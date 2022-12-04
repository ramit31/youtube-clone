// Total number of views count format
const formatViewsCount = (count, withAbbr = false, decimals = 2) => {
    const COUNT_ABBRS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
    const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if (withAbbr) {
        result += `${COUNT_ABBRS[i]}`;
    }
    return result;
};

// Uploaded message format time
const timeFormat = (durString) => {
    const timeStringArr = durString.slice(2,durString.length-1).split('M');
    if(Number(timeStringArr[1])<10) {
        timeStringArr[1] = "0" + Number(timeStringArr[1]);
    }
    if(Number(timeStringArr[0])>59){
        const tmpTime = timeStringArr[0];
        timeStringArr[0] = String(tmpTime%60)<10?"0"+String(tmpTime%60):String(tmpTime%60);
        timeStringArr.unshift(Math.floor(tmpTime/60)); 
    }
    return timeStringArr.join(':');
};

// Uploaded message format days
const dayFormat = (dateString) => {
    const TIME_ABBRS = ['second','minute', 'hour', 'day', 'month', 'year'];
    const dateObj = new Date(dateString.split("T")[0]);
    const curDateObj = new Date();
    let elapsedTime = (curDateObj.getTime() - dateObj.getTime())/1000;
    if(elapsedTime<60) {
        return `${Math.floor(elapsedTime).toString()} ${Math.floor(elapsedTime)===1?TIME_ABBRS[0]:TIME_ABBRS[0]+"s"} ago`;
    }
    else if((elapsedTime/60)<60) {
        return `${Math.floor(elapsedTime/60).toString()} ${Math.floor(elapsedTime/60)===1?TIME_ABBRS[1]:TIME_ABBRS[1]+"s"} ago`;
    }
    else if((elapsedTime/(60*60))<24) {
        return `${Math.floor(elapsedTime/(60*60)).toString()} ${Math.floor(elapsedTime/(60*60))===1?TIME_ABBRS[2]:TIME_ABBRS[2]+"s"} ago`;
    }
    else if((elapsedTime/(60*60*24))<30) {
        return `${Math.floor(elapsedTime/(60*60*24)).toString()} ${Math.floor(elapsedTime/(60*60*24))===1?TIME_ABBRS[3]:TIME_ABBRS[3]+"s"} ago`;
    }
    else if((elapsedTime/(60*60*24*30))<12) {
        return `${Math.floor(elapsedTime/(60*60*24*30)).toString()} ${Math.floor(elapsedTime/(60*60*24*30))===1?TIME_ABBRS[4]:TIME_ABBRS[4]+"s"} ago`;
    }
    else {
        return `${Math.floor(elapsedTime/(60*60*24*30*12)).toString()} ${Math.floor(elapsedTime/(60*60*24*30*12))===1?TIME_ABBRS[5]:TIME_ABBRS[5]+"s"} ago`;
    }
}

// Remove newline from description
const singleLineDescription =(descriptionString)=>{
    const outDescription = descriptionString.replace(/\n+/g, ' ');
    return outDescription
}

// Get Id
const getId = (videoLink)=>{
    let linkArr = videoLink.split("/");
    return linkArr[linkArr.length-1];
}

export {formatViewsCount, timeFormat, dayFormat, singleLineDescription, getId};