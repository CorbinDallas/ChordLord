onmessage = function(e) {
	timer(e.data);
}
function timer(len) {
	postMessage(performance.now());
	setTimeout(timer, len, len);
} 