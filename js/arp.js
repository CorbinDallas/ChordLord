var midiWorker = new Worker("js/midi.js"),
	midi,
	timingEvents = {},
	midiKeyStates = {},
	inputEvents = {},
    midiMiddleC = 60,
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
	methods = {},
	timeSignature = [4, 4],
	tempo = 120,
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
	],
	masterControls = {
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
		rate: {
			title: 'Rate',
			type: 'select',
			options: timings,
			defaultIndex: 9
		},
		cycle: {
			title: 'Cycle',
			type: 'select',
			options: []
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
			min: 0,
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
		}
	};
midiWorker.onmessage = function (e) {
	methods[e.data.method].apply(null, e.data.arguments);
}
function removeTimingEvent(timing, callback){
	timingEvents[timing].splice(timingEvents[timing].indexOf(callback), 1);
}
function addTimingEvent(timing, callback){
	timingEvents[timing].push(callback);
}
function fireTimingEvent(timing) {
	timingEvents[timing].forEach(function (p) {
		p(timing);
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
function setTimeSignature() {
	timings.forEach(function (timingKey){
		if (/measure/.test(timingKey)){
			
		}
	});
}
function sendMessage(message, deviceId, channel, note, velocity, duration) {
    var o = pipes.outputs[deviceId];
    o.value.open();
    o.value.send([msg[message] + channel, note, velocity], 0);
}
function playNote(note, duration, deviceId, channel){
    sendMessage('on', deviceId, channel, note, 64, 0);
    setTimeout(function (x) {
        sendMessage('off', deviceId, channel, note, 64, 0);
    }, duration);
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
	// create master tempo
	pe(createForm({}, masterControls, 'master'), document.body);
	// create the first arp
	pe(createForm({}, arpControls, 'arp'), document.body);
	// setup timings event array
	timings.forEach(function(item){
		timingEvents[item[0]] = [];
	});
	inputEvents.playAll[0].method();
}
function pe(tag, parentNode, innerHTML, value){
	var i;
	if (typeof tag === 'string') {
		i = document.createElement(tag);
	} else {
		i = tag;
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
	midiWorker.postMessage({
		method: 'play'
	});
}
function stopAll(){
	midiWorker.postMessage({
		method: 'stop'
	});
}
inputEvents.stopAll = [{ event: 'click', method: stopAll }];
inputEvents.playAll = [{ event: 'click', method: playAll }];
function toIntervals(s) {
	return s.split(',').map(function (i) {
		return midiMiddleC + parseInt(i, 10);
	});
}
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
	method: function (e, inputs) {
		if (inputs.stopEvent) {
			inputs.stopEvent();
		}
		inputEvents.play[0].method(e, inputs);
		inputs.intervals.value = toIntervals(inputs.scale.value);
		console.log(inputs.scale.selectedIndex);
	}
}];
inputEvents.play = [{
	event: 'click',
	method: function (e, inputs, methods) {
		if (methods.stopEvent) {
			methods.stopEvent();
		}
		var rateKey = inputs.rate.selectedOptions[0].label,
			rate = parseInt(inputs.rate.value, 10),
			counter = parseInt(inputs.offset.value, 10),
			intervals = toIntervals(inputs.scale.value),
			atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]);
		function p() {
			var sustainPct = (parseInt(inputs.sustain.value, 10) / 100),
				duration = atom * rate * sustainPct,
				last = 
			playNote(
				intervals[counter % intervals.length],
				duration,
				inputs.device.value,
				parseInt(inputs.channel.value, 10)
			);
			counter++;
		}
		methods.stopEvent = function () {
			removeTimingEvent(rateKey, p);
		}
		addTimingEvent(rateKey, p);
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
		pe(createForm(args, arpControls, 'arp'), document.body);
	}
}];
inputEvents.tempo = [{
	event: 'click',
	method: function () {
		midiWorker.postMessage({
			method: 'setTempo',
			arguments: [tempo]
		});
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
function createForm(args, controls, className) {
	var container = pe('div'),
		methods = {},
		inputs = {};
	container.className = className;
	Object.keys(controls).forEach(function (f){
		var ctrl = controls[f],
			arg = args[f],
			r = pe('div', container),
			c1 = pe('div', r),
			c2 = pe('div', r),
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
					ev.init(i, inputs);
				}
				i.addEventListener(ev.event, function (e) {
					ev.method.apply(this, [e, inputs, methods]);
				});
			});
		}
		// don't restart on some control changes
		if (['sustain'].indexOf(f) === -1){
			i.addEventListener('change', function () {
				inputEvents.play[0].method(null, inputs, methods);
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
	    sysex: false
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