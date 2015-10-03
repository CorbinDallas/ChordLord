var tempo = 120,
	counter = 0,
	timeSignature = [4, 4],
	stopTimer,
	methods = {},
	timings = {
		"1/128": 1,
		"1/64": 2,
		"1/48": 3,
		"1/32": 4,
		"1/24": 6,
		"1/16": 8,
		"1/12": 12,
		"1/8": 16,
		"1/6": 24,
		"1/4": 32,
		"1/3": 48,
		"1/2": 64,
		"1/1": 128,
		"1 measures": 0,
		"2 measures": 0,
		"3 measures": 0,
		"4 measures": 0,
		"5 measures": 0,
		"6 measures": 0,
		"7 measures": 0,
		"8 measures": 0
	};
onmessage = function(e) {
	methods[e.data.method].apply(null, e.data.arguments);
}
function intervalTimer(duration, callback){
	var stop,
		drift = 0,
		offset = 0,
		counter = 1;
	function tick() {
		if (stop) { return; }
		setTimeout(function () {
			counter++;
			var target = counter * duration,
				now = performance.now(),
				delta = now - target;
			drift += delta;
			tick();
			callback(drift);
			offset = Math.floor(drift);
			drift = drift % 1;
			dlog('tick ' + counter + ' now ' + now + ' target ' + target + ' delta ' + delta +
			' offsetting ' + offset + ' remaining sub millisecond ' + drift);
		}, duration - offset);
	}
	tick();
	return function () {
		stop = true;
	}
}
function dlog() {
	post('log', [arguments[0]]);
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
	var beats = 0,
		microseconds;
	if (stopTimer) {
		stopTimer();
	}
	function tick(drift) {
		post('fireTimingEvent', [drift, microseconds]);
	}
	var atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]) * 128,
		microseconds = atom % 1,
		tickTime = Math.floor(atom);
	log('tempo ' + tempo + ', tick every ' + tickTime + 'ms, schedu]le add ' + (microseconds * 1000) + " microseconds");
	stopTimer = intervalTimer(tickTime, tick);
	methods.stop = stopTimer;
}
function setTempo(t) {
	log('tempo ' + t);
	tempo = t;
	counter = 0;
	startTimer();
}
function init() {
	setTempo(tempo);
}
function setTimeSignature(a, b) {
	timeSignature = [a, b];
	startTimer();
}
methods.setTimeSignature = setTimeSignature;
methods.setTempo = setTempo;
methods.stop = stopTimer;
methods.play = startTimer;
init();