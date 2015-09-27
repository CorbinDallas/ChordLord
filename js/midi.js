var tempo = 120,
	counter = 0,
	timeSignature = [4, 4],
	stopTimer,
	methods = {},
	timings = [
		["1/128", 1],
		["1/64", 2],
		["1/48", 3],
		["1/32", 4],
		["1/24", 6],
		["1/16", 8],
		["1/12", 12],
		["1/8", 16],
		["1/6", 24],
		["1/4", 32],
		["1/3", 48],
		["1/2", 64],
		["1/1", 128],
		["1 measures", 0],
		["2 measures", 0],
		["3 measures", 0],
		["4 measures", 0],
		["5 measures", 0],
		["6 measures", 0],
		["7 measures", 0],
		["8 measures", 0]
	];
onmessage = function(e) {
	methods[e.data.method].apply(null, e.data.arguments);
}
function intervalTimer(duration, callback){
	var stop,
		current,
		drift = duration,
		last = performance.now();
	function tick() {
		if (stop) { return; }
		current = performance.now();
		setTimeout(function () {
			callback();
			tick();
			drift = duration - (current - last - duration);
			last = current;
		}, drift);
	}
	tick();
	return function () {
		stop = true;
	}
}
function log() {
	post('log', [arguments[0]]);
}
function post(method, args){
	postMessage({
		method: method,
		arguments: args
	});
}
function startTimer() {
	var beats = 0;
	if (stopTimer) {
		stopTimer();
	}
	function tick() {
		counter ++;
		var i = timeSignature[1] / 4, x;
		timings.forEach(function (item) {
			if (item[1] > 0 &&
				counter % item[1] * i === 0) {
				post('fireTimingEvent', [item[0]]);
			}
		});
		if (counter % 128 * i === 0) {
			beats++;
		}
		// measures
		if (beats % timeSignature[0] === 1) {
			for (x = 1; x < 9; x++) {
				if (beats % (timeSignature[0] * x) === 0) {
					post('fireTimingEvent', [x.toString() + ' measures']);
				}
			}
		}
	}
	var atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]);
	stopTimer = intervalTimer(atom, tick);
}
function setTempo(t) {
	tempo = t;
	counter = 0;
}
function init() {
	setTempo(tempo);
}
methods.setTempo = setTempo;
methods.stop = stopTimer;
methods.play = startTimer;
init();