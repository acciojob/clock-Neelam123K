//your JS code here. If required.
let data = document.getElementById("timer")
function updateclock() {
	const date = new Date();
	const formatedate = date.toLocaleString();
	data.innerHTML = formatedate;
	
}
updateclock();
setInterval(updateClock, 1000);