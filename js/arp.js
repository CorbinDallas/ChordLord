var metronomeCounter = 0,
	midi,
	styles = {},
	metronome,
	timingEvents = [],
	midiKeyStates = {},
	inputEvents = {},
    midiMiddleC = 60,
    arpAllMethods = {
    	play: [],
    	stop: []
    },
    pipes = {
        outputs: {},
        inputs: {}      
    },
    msg = {
        on: 0x90,
        off: 0x80,
        pitchBend: 0xE0,
        programChange: 0xC0,
        volume: 0xB0
    },
    arpCss = {
		container: 'arp',
		item: 'arpItem',
		title: 'arpTitle',
		input: 'arpInput'
	},
	methods = {},
	timeSignature = [4, 4],
	tempo = 120,
	timings = {
		"1/128": 128,
		"1/64": 64,
		"1/48": 48,
		"1/32": 32,
		"1/24": 24,
		"1/16": 16,
		"1/12": 12,
		"1/8": 16,
		"1/6": 6,
		"1/4": 4,
		"1/3": 3,
		"1/2": 2,
		"1/1": 1,
		"1 measures": 0,
		"2 measures": 0,
		"3 measures": 0,
		"4 measures": 0,
		"5 measures": 0,
		"6 measures": 0,
		"7 measures": 0,
		"8 measures": 0
	},
	masterControls = {
		sigMeasure: {
			title: '',
			type: 'select',
			options: [1, 2, 3, 4, 5, 6, 7, 8,
				9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
			defaultIndex: 3
		},
		sigBeat: {
			title: '/',
			type: 'select',
			options: [2, 4, 8, 16, 32],
			defaultIndex: 1
		},
		tempo: {
			title: 'Tempo',
			type: 'range',
			min: 20,
			max: 999,
			defaultValue: 120
		},
		addArp: {
			type: 'button',
			title: 'Add Arpeggiator'
		},
		playAll: {
			type: 'button',
			title: 'Play'
		},
		stopAll: {
			type: 'button',
			title: 'Stop'
		},
		save: {
			type: 'button',
			title: 'Save'
		},
		list: {
			title: 'Patterns',
			type: 'select',
			options: []
		},
		load: {
			type: 'button',
			title: 'Load'
		},
		exportArps: {
			type: 'button',
			title: 'Export'
		}
	},
	arpControls = {
		device: {
			title: 'Device',
			type: 'select',
			defaultIndex: 7,
			options: []
		},
		channel: {
			title: 'Channel',
			type: 'select',
			options: [
				[1, 0],
				[2, 1],
				[3, 2],
				[4, 3],
				[5, 4],
				[6, 5],
				[7, 6],
				[8, 7],
				[9, 8],
				[10, 9],
				[11, 10],
				[12, 11],
				[13, 12],
				[14, 13],
				[15, 14],
				[16, 15]
			],
			defaultIndex: 0
		},
		message: {
			title: 'Message Type',
			type: 'select',
			options: ['Note On/Off', 'Controller']
		},
		key: {
			title: 'Key',
			type: 'select',
			options: noteNames
		},
		transpose: {
			title: 'Transpose',
			type: 'select',
			defaultIndex: 44,
			options: []
		},
		scale: {
			title: 'Scale',
			type: 'select',
			options: [],
			defaultIndex: 1389
		},
		intervals: {
			title: 'Intervals',
			type: 'checkboxrange'
		},
		style: {
			title: 'Style',
			type: 'select'
		},
		rate: {
			title: 'Rate',
			type: 'select',
			options: Object.keys(timings),
			defaultIndex: 9
		},
		step: {
			title: 'Step',
			type: 'range',
			min: 0,
			max: 10,
			defaultValue: 0
		},
		distance: {
			title: 'Distance',
			type: 'range',
			min: -48,
			max: 48,
			defaultValue: 0
		},
		offset: {
			title: 'Offset',
			type: 'range',
			min: -12,
			max: 12,
			defaultValue: 0
		},
		sustain: {
			title: 'Sustain %',
			type: 'range',
			min: 1,
			max: 400,
			defaultValue: 50
		},
		retrigger: {
			title: 'Retrigger',
			type: 'select',
			options: ['off', 'beat', 'note'],
			defaultIndex: 0
		},
		retriggerOn: {
			title: 'Retrigger On',
			type: 'select',
			options: ['1/16', '1/8', '3/16', '1/4', '3/8', '1/2', '3/4', '7/8', '1', '9/8', '5/4', '1.5', '2', '3'],
			defaultIndex: 0
		},
		repeat: {
			title: 'Repeat',
			type: 'select',
			options: [Infinity, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
			defaultIndex: 0
		},
		play: {
			title: 'Play',
			type: 'button'
		},
		stop: {
			title: 'Stop',
			type: 'button'
		},
		duplicate: {
			title: 'Duplicate',
			type: 'button'
		},
		piano: {
			title: 'Piano',
			type: 'piano'
		}
	};
function removeTimingEvent(callback){
	timingEvents.splice(timingEvents.indexOf(callback), 1);
}
function addTimingEvent(callback){
	timingEvents.push(callback);
}
function fireTimingEvent(drift, microseconds) {
	timingEvents.forEach(function (p) {
		p(drift, microseconds);
	});
}
function midiKeysToSet() {
    return;
    var intervals = {},
        output = [];
    Object.keys(midiKeyStates).forEach(function (i) {
        if (midiKeyStates[i] === null) { return; }
        i = parseInt(i, 10);
        intervals[i % 12] = true;
    });
    output = Object.keys(intervals).map(function(i) {
        return parseInt(i, 10);
    }).filter(function(i) { return i !== 0; });
    output.unshift(0);
    document.body.innerHTML = '<h2>' + JSON.stringify(getChordFromSet(output)) + '</h2>';
}
function readMessage(e) {
    if (e.data[0] === 254) { return; }
    if (e.data[0] === 144) {
        midiKeyStates[e.data[1]] = e.data[2];
        //midiKeysToSet();
    } else if (e.data[0] === 128) {
        midiKeyStates[e.data[1]] = null;
        //midiKeysToSet();
    }
}
function sendMessage(message, deviceId, channel, note, velocity, time) {
    var o = pipes.outputs[deviceId];
    o.value.open();
    o.value.send([msg[message] + channel, note, velocity], time);
}
function playNote(note, duration, deviceId, channel, time){
	if (note > 128) { note = 128; }
    sendMessage('on', deviceId, channel, note, 64, time);
    sendMessage('off', deviceId, channel, note, 64, time + duration);
}
function init() {
	// prepare form schema with dynamic values
	Object.keys(pipes.outputs).forEach(function (key){
		var o = pipes.outputs[key];
		arpControls.device.options.push([o.value.name, o.value.id]);
	});
	generatedSets.forEach(function (set) {
		arpControls.scale.options.push([set.set + ' - ' + set.family + ' - ' + set.name, set.chord]);
	});
	for(var x = -44; x < 44; x++){
		arpControls.transpose.options.push(x);
	}
	arpControls.style.options = Object.keys(styles);
	// create master tempo
	pe(createForm({}, masterControls, { container: 'master' }), document.body);
	// create the first arp
	pe(createForm({}, arpControls, arpCss), document.body);

}
function createOffsetArray(n, max){
	var ca = 0, cb = n, a = [];
	for(var x = 0; x < max; x++){
		a.push(ca++);
		a.push(cb++);
	}
	return a;
}

function arp(args) {
	// TEMPO
	// TIME [0, 1]
	// RATE 1/4
	// START TIME MS
	var notes = [],
		noteCounter = 0,
		stepCounter = 0,
		queueLength = 500,
		timerLength = 100,
		rateKey = args.rate,
		rate = timings[rateKey],
		offset = args.offset,
		intervals = args.intervals,
		style = styles[args.style](intervals, offset),
		key = args.key,
		transpose = args.transpose,
		step = args.step,
		distance = args.distance,
		retrigger = args.retrigger,
		retriggerOn = args.retriggerOn,
		repeat = args.repeat,
		timer,
		x,
		base = args.base || midiMiddleC,
		atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]),
		beat = (atom * 128) / (4 / timeSignature[1]),
		bar = beat * timeSignature[0],
		rateNoteLength = beat / rate,
		counter = performance.now() + queueLength;
	// get in sync
	counter = counter + (counter % beat);
	function play(note, t) {
		playNote(
			note,
			rateNoteLength * args.sustainPct,
			args.device,
			args.channel,
			t
		);
	};
	function checkQueue() {
		var noteNumber,
			n,
			r,
			x,
			s;
		while(counter < performance.now() + queueLength) {
			s = style(args);
			if (s.end){
				if (stepCounter === step) {
					intervals = args.intervals;
					stepCounter = 0;
				} else if (step > 0) {
					stepCounter++;
					for(x = 0; x < distance; x++){
						r = intervals.shift();
						r.note += 12;
						intervals.push(r);
					}
				}
			}
			n = toCommand(intervals[s.number % intervals.length]);
			noteCounter++;
			if (n.type === 'normal') {
				play(base + key + transpose + n.note, counter);
			} else if (n.command === 't') {
				for(x = 0; x < 3; x++) {
					play(base + key + transpose + n.note, counter + ((rateNoteLength / 3) * x));
				}
			}
			counter += rateNoteLength;
		}
	}
	function toCommand(arg) {
		var note = parseInt(arg[0], 10),
			command = arg[1];
		if (command === 't') {
			return {
				command: 't',
				note: note
			}
		}
		return {
			note: parseInt(arg, 10),
			type: 'normal'
		}
	}
	timer = setInterval(checkQueue, timerLength);
	return function (){
		clearTimeout(timer);
	}
}


styles["Up"] = function (intervals, offset) {
	var count = -1 + offset;
	return function (args) {
		count++;
		return {
			number: count,
			end: count % intervals.length === 0 && count > 0
		}
	}
}
styles["Down"] = function (intervals, offset) {
	var count = 0 + offset;
	return function (args) {
		if (count === 0) {
			count = intervals.length - 1;
			return {
				number: count,
				end: true
			};
		}
		count += (intervals.length - 1);
		return {
			number: count,
			end: false
		}
	}
}
styles['Up Down'] = function (intervals, offset) {
	var up = true,
		end,
		count = 0 + offset;
	return function (args) {
		end = false;
		if (count === intervals.length -1) {
			end = true;
			up = false;
		}
		if (count === 0) {
			up = true;
		}
		if (up) {
			return {
				number: ++count,
				end: end
			};
		}
		return {
			number: --count,
			end: end
		};
	}
}
styles['Down Up'] = function (intervals, offset) {
	var up,
		end,
		count = intervals.length + offset;
	return function (args) {
		if (count === intervals.length -1) {
			end = true
			up = false;
		}
		if (count === 0) {
			up = true;
		}
		if (up) {
			return {
				number: ++count,
				end: end
			};
		}
		return {
			number: --count,
			end: end
		};
	}
}
styles["3rds Cycle"] = function (intervals, offset) {
	var count = 0 + offset;
	return function (args) {
		count += 2;
		return {
			number: count,
			end: count % intervals.length
		};
	}
}
styles["3rds Sequence"] = function (intervals, offset) {
	var count = 0 + offset,
		a = createOffsetArray(2, intervals.length * 2);
	return function (args) {
		var i = a[count++ % a.length];
		if (count === Math.floor(intervals.length + (intervals.length * .5))) {
			count = 0;
		}
		return {
			number: i,
			end: i % (intervals.length * 2)
		};
	}
}
styles["4ths"] = function (intervals, offset) {
	var count = 0 + offset,
		a = createOffsetArray(3, intervals.length * 3);
	return function (args) {
		var i = a[count++ % a.length];
		if (count === Math.floor(intervals.length + (intervals.length * .33333333))) {
			count = 0;
		}
		return {
			number: i,
			end: i % (intervals.length * 3)
		};;
	}
}
styles["5ths"] = function (intervals, offset) {
	var count = 0 + offset,
		a = createOffsetArray(4, intervals.length * 4);
	return function (args) {
		var i = a[count++ % a.length];
		if (count === Math.floor(intervals.length + (intervals.length * .25))) {
			count = 0;
		}
		return {
			number: i,
			end: i % (intervals.length * 4)
		};
	}
}
styles["6ths"] = function (intervals, offset) {
	var count = 0 + offset,
		a = createOffsetArray(5, intervals.length * 5);
	return function (args) {
		var i = a[count++ % a.length];
		if (count === Math.floor(intervals.length + (intervals.length * .1725))) {
			count = 0;
		}
		return {
			number: i,
			end: i % (intervals.length * 5)
		};
	}
}
function restartMetronome() {
	stopMetronome();
	startMetronome();
}
function metronomeQuarterEvent() {
	metronome.className = 'metronome ' +
		(metronomeCounter % 2 === 0 ? 'tick' : 'tock');
	metronomeCounter++;
}
function metronomeBeatEvent() {
	metronome.className = 'metronome beat';
}
function startMetronome() {
	addTimingEvent(metronomeQuarterEvent);
	addTimingEvent(metronomeBeatEvent);
}
function stopMetronome() {
	removeTimingEvent(metronomeQuarterEvent);
	removeTimingEvent(metronomeBeatEvent);
}
function pe(tag, parentNode, innerHTML, value, className){
	var i;
	if (typeof tag === 'string') {
		i = document.createElement(tag);
	} else {
		i = tag;
	}
	if (className) {
		i.className = className;
	}	
	if (parentNode) {
		parentNode.appendChild(i);
	}
	if (innerHTML !== undefined) {
		i.innerHTML = innerHTML;
	}
	if (value !== undefined) {
		i.value = value;
	}
	return i;
}
function playAll(){
	arpAllMethods.play.forEach(function (i) {
		i();
	});
}
function stopAll(){
	arpAllMethods.stop.forEach(function (i) {
		i();
	});
}
inputEvents.stopAll = [{ event: 'click', method: stopAll }];
inputEvents.playAll = [{ event: 'click', method: playAll }];
function toIntervals(s) {
	return s.split(',').map(function (i) {
		if (i.length > 1) {
			return parseInt(i, 10);
		} else {
			return i;
		}
	});
}

inputEvents.sigMeasure = [{
	event: 'change',
	method: function (e, inputs, methods) {
		timeSignature[0] = parseInt(e.value, 10);
	}
}];
inputEvents.sigBeat = [{
	event: 'change',
	method: function (e, inputs, methods) {
		timeSignature[1] = parseInt(e.value, 10);	
	}
}];
inputEvents.stop = [{
	event: 'click',
	method: function (e, inputs, methods) {
		methods.stopEvent();
	}
}];
inputEvents.scale = [{
	init: function (i, inputs) {
		setTimeout(function (){
			inputs.intervals.value = toIntervals(i.value);
		}, 0);
	},
	event: 'change',
	method: function (e, inputs, methods) {
		if (inputs.stopEvent) {
			inputs.stopEvent();
		}
		inputEvents.play[0].method(e, inputs, methods);
		inputs.intervals.value = toIntervals(inputs.scale.value);
		console.log(inputs.scale.selectedIndex);
	}
}];
inputEvents.play = [{
	event: 'click',
	init: function () {

	},
	method: function (e, inputs, methods) {
		function stop () {
			methods.stopEvent();
		}
		function play () {
			if (methods.stopEvent) {
				methods.stopEvent();
				arpAllMethods.play.splice(play, 1);
				arpAllMethods.stop.push(methods.stopEvent);
			}
			methods.playEvent = play;
			methods.stopEvent = arp({
				device: inputs.device.value,
				channel: parseInt(inputs.channel.value, 10),
				style: inputs.style.value,
				rate: inputs.rate.value,
				key: inputs.key.selectedIndex,
				transpose: parseInt(inputs.transpose.value, 10),
				offset: parseInt(inputs.offset.value, 10),
				intervals: inputs.intervals.value.split(','),
				sustainPct: parseInt(inputs.sustain.value, 10) / 100,
				distance: parseInt(inputs.distance.value, 10),
				step: parseInt(inputs.step.value, 10),
				repeat: parseInt(inputs.repeat.value, 10)
			});		
		}
		play();
		arpAllMethods.play.push(play);
		arpAllMethods.stop.push(stop);
	}
}];
inputEvents.addArp = [{
	event: 'click', 
	method: function () {
		pe(createForm({}, arpControls, 'arp'), document.body);
	}
}];
inputEvents.duplicate = [{
	event: 'click',
	method: function (e, inputs) {
		var args = seralizeInputs(inputs);
		console.log(args);
		pe(createForm(args, arpControls, arpCss), document.body);
	}
}];
inputEvents.piano = [{
	init: function (i, inputs, methods) {

	}
}];
inputEvents.tempo = [{
	event: 'change',
	method: function () {
		console.log("tempo change " + this.value);
	}
}];
methods.fireTimingEvent = fireTimingEvent;
methods.log = function () {
	console.log.apply(console, arguments);
};
function seralizeInputs(inputs) {
	var o = {};
	Object.keys(inputs).forEach(function (f) {
		if(/select|text|range/.test(arpControls[f].type)) {
			o[f] = arpControls[f].type === 'select' ? inputs[f].selectedIndex : inputs[f].value;
		}
	});
	return o;
}
function createForm(args, controls, classNames) {
	var container = pe('div'),
		methods = {},
		inputs = {};
	container.className = classNames.container;
	Object.keys(controls).forEach(function (f){
		var ctrl = controls[f],
			arg = args[f],
			r = pe('div', container, undefined, undefined, classNames.item),
			c1 = pe('div', r, undefined, undefined, classNames.title),
			c2 = pe('div', r, undefined, undefined, classNames.input),
			h = pe('span', c1, ctrl.title),
			i = pe(/select|button/.test(ctrl.type) ? ctrl.type : 'input', c2),
			v,
			x,
			c;
		i.type = ctrl.type;
		if (ctrl.type === 'select') {
			ctrl.options.forEach(function (o) {
				var title = o, value = o;
				if (Array.isArray(o)) {
					title = o[0];
					value = o[1];
				};
				pe('option', i, title, value);
			});
			i.selectedIndex = arg || ctrl.defaultIndex || 0;
		} else if (ctrl.type === 'range') {
			i.min = ctrl.min;
			i.max = ctrl.max;
			i.value = arg || ctrl.defaultValue || 0;
			v = pe('input', c2);
			v.className = 'rangeInput';
			v.onkeyup = function () {
				if (parseInt(this.value, 10) > ctrl.max) {
					this.value = ctrl.max;
				}
				if (parseInt(this.value, 10) < ctrl.min) {
					this.value = ctrl.min;
				}
				i.value = this.value;
			}
			i.oninput = function () {
				v.value = this.value;
			}
		} else if (ctrl.type === 'checkboxrange') {
			for(x = 0; x < 12; x++){
				var c = pe('input');
			}
		} else if (ctrl.type === 'piano') {
			c2.removeChild(i);
			r.removeChild(c1);
			c2.setAttribute('colspan', 2);
			var pianoControl = pe('div', c2);
			r.className = 'pianoControl';
			i = createPiano(pianoControl, 0, 7);
		} else if (ctrl.type === 'button') {
			r.removeChild(c1);
			c2.setAttribute('colspan', 2);
			i.innerHTML = ctrl.title;
		} else {
			i.value = arg || ctrl.defaultValue;
		}
		if (v) {
			v.value = i.value;
		}
		if (inputEvents[f]) {
			inputEvents[f].forEach(function (ev) {
				if (ev.init) {
					return ev.init(i, inputs, methods);
				}
				i.addEventListener(ev.event, function (e) {
					ev.method.apply(this, [e, inputs, methods]);
				});
			});
		}
		inputs[f] = i;
	});
	// whenever anything changes toggle play
	container.inputs = inputs;
	return container;
}
document.addEventListener('DOMContentLoaded', function () {
	navigator.requestMIDIAccess({
	    sysex: true
	}).then(function (e){
	    midi = e;
	    function getPipes(pipe) {
	        var i, s = midi[pipe].values();
	        for (i = s.next(); i && !i.done; i = s.next()){
	            if (i && i.value) {
	                pipes[pipe][i.value.id] = i;
	                if (pipe === 'inputs') {
	                    i.value.onmidimessage = readMessage;
	                }
	            }
	        }
	    }
	    ['inputs', 'outputs'].forEach(getPipes);
	    init();
	});	
});
