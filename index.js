const currentTime = document.querySelector(".time");
const currentDate = document.querySelector(".day");


function currentDay(date){
   
    const Days =["Sunday", "Monday", "Tuesday", "Wednesday",  "Thursday", "Friday", "Saturday"]
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    return (`Current Day: ${Days[date.getDay()]}, ${Months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`)
}



function Time(date){
    // const date= new Date()
    // let date=date.getfullyear

    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes()
    const seconds = date.getUTCSeconds()
    const mililseconds = date.getUTCMilliseconds()


    return (`Current UTC Time: ${hours12}:${minutes}:${seconds}:${mililseconds}`);
}

setInterval(() => {
    const now = new Date();
    
    currentTime.textContent = Time(now);
    currentDate.textContent = currentDay(now);

    
}, 200)