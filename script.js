//your JS code here. If required.
let data = document.getElementById("timer");

function updateClock() {
    const date = new Date();
    const formattedDate = date.toLocaleString();
    data.innerHTML = formattedDate;
 }

updateClock();
setInterval(updateClock, 1000);