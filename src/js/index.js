import dayjs from 'dayjs'

var hourFormat = 'hh'

function displayTime() {
    const dateString = dayjs().format(`${hourFormat}:mm:ss A`)
    document.getElementById("time").textContent = dateString;
}

setInterval(displayTime, 100);
displayTime()