//your JS code here. If required.
function updateclock() {
	const date = new.date();
	const formatedate = now.toLocalString();
	document.getElementById("timer").textContent = formatedate;
	
}
updateclock();
setInterval(updateClock, 1000);