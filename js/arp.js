/*jslint browser: true */
/*gobals setList: false, window, document, performance */
// use something like http://www.tobias-erichsen.de/software/loopmidi.html if you don't have
// the required hardware
'use strict';
var queueTimer,
    timeLineItemId = 0,
    metronomeCounter = 0,
    midi,
    masterForm,
    deviceId,
    forms = [],
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
        off: "0x8",
        on: "0x9",
        polyphonicAftertouch: "0xa",
        controllerChange: "0xb",
        programChange: "0xc",
        channelAftertouch: "0xd",
        pitchBendChange: "0xe",
        systemExclusive: "0xf",
        midiTimeCodeQtrFrame: "0xf1",
        songPositionPointer: "0xf2",
        songSelect: "0xf3",
        tuneRequest: "0xf6",
        endOfSysEx: "0xf7",
        timingClock: "0xf8",
        start: "0xfa",
        "continue": "0xfb",
        stop: "0xfc",
        activeSensing: "0xfe",
        systemReset: "0xff"
    },
    masterCss = {
        container: 'master',
        item: 'masterItem'
    },
    arpCss = {
        container: 'arp',
        item: 'arpItem',
        title: 'arpTitle',
        input: 'arpInput',
        select: 'arpSelect'
    },
    methods = {},
    timeSignature = [4, 4],
    tempo = 120,
    timings = {
        "a: 1/128": 128,
        "ft: 1/96": 96,
        "f: 1/64": 64,
        "it: 1/48": 48,
        "i: 1/32": 32,
        "st: 1/24": 24,
        "s: 1/16": 16,
        "et: 1/12": 12,
        "e: 1/8": 8,
        "qt: 1/6": 6,
        "q: 1/4": 4,
        "ht: 1/3": 3,
        "h: 1/2": 2,
        "w: 1/1": 1,
        "2: measures": 0.5,
        "3: measures": 0.33,
        "4: measures": 0.25,
        "5: measures": 0.2,
        "6: measures": 0.16666666666666666667,
        "7: measures": 0.1428571428571429,
        "8: measures": 0.125
    },
    masterControls = {
        title: {
            title: 'Master',
            type: 'text',
            defaultValue: ''
        },
        sigMeasure: {
            title: '',
            type: 'select',
            options: [1, 2, 3, 4, 5, 6, 7, 8,
                9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            defaultIndex: 3
        },
        sigBeat: {
            title: '',
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
        device: {
            title: 'Device',
            type: 'select',
            defaultValueByTitle: 'loopmidi',
            options: []
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
        exportArps: {
            type: 'button',
            title: 'Export'
        },
        help: {
            type: 'button',
            title: 'Help'
        }
    },
    arpControls = {
        title: {
            title: 'Arpeggiator',
            type: 'text',
            defaultValue: ''
        },
        arpList: {
            title: 'Patterns',
            type: 'select',
            options: []
        },
        arpDelete: {
            title: 'Delete',
            type: 'button'
        },
        inputFrom: {
            title: 'Input',
            type: 'select',
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
        messageType: {
            title: 'Type',
            type: 'select',
            options: ['Note On/Off', 'Controller Change']
        },
        controllerNumber: {
            title: 'CC#',
            type: 'select',
            options: []
        },
        key: {
            title: 'Key',
            type: 'select',
            options: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
        },
        transpose: {
            title: 'Transpose',
            type: 'select',
            defaultIndex: 36,
            options: []
        },
        scale: {
            title: 'Scale',
            type: 'select',
            options: [],
            defaultValueByTitle: 'Harmonic Minor - a'
        },
        intervals: {
            title: 'Intervals[]',
            type: 'text'
        },
        rhythm: {
            title: 'Rhythm[]',
            type: 'text',
            defaultValue: 'q'
        },
        chord: {
            title: 'Chord[]',
            type: 'text',
            defaultValue: '1'
        },
        velocity: {
            title: 'Velocity[]',
            type: 'text',
            defaultValue: '64'
        },
        pedal: {
            title: 'Sus. Pedal[]',
            type: 'text',
            defaultValue: ''
        },
        style: {
            title: 'Style',
            type: 'select'
        },
        rate: {
            title: 'Rate',
            type: 'select',
            options: Object.keys(timings),
            defaultIndex: 10
        },
        step: {
            title: 'Step',
            type: 'range',
            min: 0,
            max: 88,
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
        gate: {
            title: 'Gate',
            type: 'range',
            min: 1,
            max: 400,
            defaultValue: 50
        },
        pedalGate: {
            title: 'Pedal Gate',
            type: 'range',
            min: 1,
            max: 99,
            defaultValue: 50
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
        deleteArp: {
            title: 'Delete',
            type: 'button'
        },
        saveArp: {
            title: 'Save',
            type: 'button'
        },
        reset: {
            title: 'Reset',
            type: 'button'
        },
        timeline: {
            title: 'Timeline',
            type: 'timeline'
        },
        piano: {
            title: 'Piano',
            type: 'piano'
        }
    };
function removeTimingEvent(callback) {
    timingEvents.splice(timingEvents.indexOf(callback), 1);
}
function addTimingEvent(callback) {
    timingEvents.push(callback);
}
function fireTimingEvent(drift, microseconds) {
    timingEvents.forEach(function (p) {
        p(drift, microseconds);
    });
}
function midiKeysToSet() {
    var intervals = {},
        output = [];
    Object.keys(midiKeyStates).forEach(function (i) {
        if (midiKeyStates[i] === null) { return; }
        i = parseInt(i, 10);
        intervals[i % 12] = true;
    });
    output = Object.keys(intervals).map(function (i) {
        return parseInt(i, 10);
    }).filter(function (i) { return i !== 0; });
    output.unshift(0);
    //document.body.innerHTML = '<h2>' + JSON.stringify(getChordFromSet(output)) + '</h2>';
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
function sendMessage(message, deviceId, channel, value, value2, time) {
    if (value > 127) {
        console.error('message over limit on channel', channel);
        value = 127;
    }
    var msg = [parseInt(message + channel.toString(16), 16), value, value2],
        o = pipes.outputs[deviceId];
    o.value.open();
    o.value.send(msg, time);
}
function playNote(note, velocity, duration, deviceId, channel, time) {
    sendMessage(msg.on, deviceId, channel, note, velocity, time);
    sendMessage(msg.off, deviceId, channel, note, velocity, time + duration);
}
function init() {
    // prepare form schema with dynamic values
    var x;
    Object.keys(pipes.outputs).forEach(function (key) {
        var o = pipes.outputs[key];
        masterControls.device.options.push([o.value.name, o.value.id]);
    });
    Object.keys(setList).forEach(function (xad) {
        Object.keys(setList[xad]).forEach(function (family) {
            Object.keys(setList[xad][family]).forEach(function (set) {
                arpControls.scale.options.push([xad + ' - ' + family + ' - ' + set, setList[xad][family][set].set.join(',')]);
            });
        });
    });
    for (x = -36; x <= 36; x += 1) {
        arpControls.transpose.options.push(x);
    }
    for (x = 0; x < 128; x += 1) {
        arpControls.controllerNumber.options.push(x);
    }
    arpControls.style.options = Object.keys(styles);
    // create master tempo
    masterForm = createForm({}, masterControls, masterCss);
    pe(masterForm, document.body);
    // create the first arp
    pe(createForm({}, arpControls, arpCss), document.body);
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) {
            e.preventDefault();
            var playing = false;
            for (x = 1; x < forms.length; x += 1) {
                if (forms[x].methods.playing) {
                    playing = true;
                    break;
                }
            }
            if (!playing) {
                return playAll();
            }
            stopAll();
            return false;
        }
    });
}
function createOffsetArray(n, max) {
    var x, ca = 0, cb = n, a = [];
    for (x = 0; x < max; x += 1) {
        ca += 1;
        cb += 1;
        a.push(ca);
        a.push(cb);
    }
    return a;
}
function createTimeline(args) {
    var container = pe('div', args.parentNode),
        self = {
            items = {}
        };
    function createTimeLineItem(intervals, rhythm) {
        var s = {
            intervals: intervals,
            rhythm: rhythm,
            id: timeLineItemId++
        };
        self.items[s.id] = s;
        return s;
    }
    function redrawTimeline() {
        container.innerHTML = '';
        Object.keys(self.items).forEach(function (key){
            var i = self.items[key],
                d = pe('div', container, null, null, 'timeLineItem'),
                scalesSelect = pe('select', d),
                intervalsText = pe('input', d),
                rhythm = pe('input', d),
                deleteButton = pe('button', d, 'Delete');
            deleteButton.onclick = function () {
                delete self.items[i.id];
                redrawTimeline();
            };
            intervalsText.value = i.intervals.join(',');
            rhythm.value = i.rhythm.join(',');
        });
        var add = pe('div', container, null, null, 'timeLineItem');
        add.innerHTML = 'Add';
        add.onclick = function () {
            createTimeLineItem([0,1,3,4,6,8,9], ['q']);
            redrawTimeline();
        };
    }
    createTimeLineItem([0,1,3,4,6,8,9], ['q']);
    redrawTimeline();
    container.className = 'timeLine';
    return self;
}
function toRhythm(r) {
    r = r.replace(/\!\*/, '');
    var x, timingKey = Object.keys(timings);
    for (x = 0; x < timingKey.length; x += 1) {
        if (timingKey[x].split(':')[0] === r) {
            return timings[timingKey[x]];
        }
    }
}
function numMap(i) {
    return parseInt(i, 10);
}
function arp(args) {
    // TEMPO
    // TIME [0, 1]
    // RATE 1/4
    // START TIME MS
    var now = Math.floor(performance.now() / 100) * 100,
        notes = [],
        noteCounter = 0,
        sustainGateCounter = 0,
        sustainRateCounter = 0,
        retriggerCounter = 0,
        stepCounter = 0,
        inputFrom = getArpFromIndex(args.inputFrom),
        queueLength = 100,
        timerLength = 50,
        rateKey = args.rate,
        rate = timings[rateKey],
        offset = args.offset,
        intervals = getIntervals(),
        rhythm = args.rhythm.slice(),
        style = styles[args.style](intervals, offset),
        key = args.key,
        pedal = args.pedal,
        velocity = args.velocity,
        messageType = args.messageType,
        controllerNumber = args.controllerNumber,
        transpose = args.transpose,
        step = args.step,
        chord = args.chord,
        distance = args.distance,
        timer,
        x,
        base = args.base || midiMiddleC,
        atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]),
        beat = (atom * 128) / (4 / timeSignature[1]),
        bar = beat * timeSignature[0],
        rateNoteLength,
        counter = now + queueLength;
        sustainRateCounter = now + queueLength;
    // reset cutoff notes etc.
    sendMessage(msg.controllerChange, deviceId, args.channel, 64, 127, 0);
    sendMessage(msg.controllerChange, deviceId, args.channel, 64, 0, counter);
    function play(note, v, t, r) {
        if (args.onplay) {
            args.onplay(note, t, r * args.gatePct, v, args.device, args.channel);
        }
        playNote(
            note,
            v,
            r * args.gatePct,
            deviceId,
            args.channel,
            t
        );
    }
    function message(value, v, t, r) {
        if (args.oncc) {
            args.oncc(value, t, deviceId, args.channel);
        }
        sendMessage(controllerNumber, deviceId, args.channel, value, v, t);
    }
    function getIntervals() {
        if (inputFrom !== undefined) {
            return inputFrom.methods.keys.slice().map(function(i) { return i - midiMiddleC; });
        }
        return args.intervals.slice();
    }
    function checkQueue() {
        var noteNumber,
            baseNote,
            octive,
            targetNote,
            addTime = 0,
            addV = 0,
            ca,
            ni,
            ry,
            n,
            p,
            c,
            v,
            r,
            x,
            s;
        while(sustainRateCounter < performance.now() + queueLength) {
            p = toRhythm(pedal[sustainGateCounter % pedal.length]);
            if (p !== undefined) {
                p = beat / p;
                sendMessage(msg['controllerChange'], deviceId, args.channel, 64, 127, sustainRateCounter);
                sendMessage(msg['controllerChange'], deviceId, args.channel, 64, 0,
                    sustainRateCounter + (p * args.pedalGatePct));
            }
            sustainRateCounter += p;
            sustainGateCounter++;
        }
        while (counter < performance.now() + queueLength) {
            s = style(args);
            if (s.end) {
                if (stepCounter >= step) {
                    intervals = getIntervals();
                    console.log('end', intervals);
                    stepCounter = 0;
                } else if (step > 0) {
                    stepCounter += 1;
                    if (distance > 0) {
                        for (x = 0; x < distance; x += 1) {
                            intervals.push(intervals.shift() + 12);
                        }
                    } else {
                        for (x = 0; x < Math.abs(distance); x += 1) {
                            intervals.unshift(intervals.pop() - 12);
                        }
                    }
                }
            }
            n = intervals[s.number % intervals.length];
            ry = rhythm[noteCounter % rhythm.length].trim();
            ca = ry.indexOf('!') !== -1;
            ni = ry.indexOf('*') !== -1;
            r = toRhythm(ry);
            v = velocity[noteCounter % velocity.length];
            c = chord[noteCounter % chord.length].map(numMap);
            if (r === undefined) {
                r = rate;
            }
            r = beat / r;
            if (!isNaN(c[0])) {
                for (x = 0; x < c.length; x += 1) {
                    if (messageType === 'Controller Change') {
                        sendMessage(msg.controllerChange, deviceId, args.channel,
                            parseInt(args.controllerNumber, 10), intervals[(s.number +
                            (c[x] % intervals.length) - 1) % intervals.length], r);
                    } else {
                        baseNote = intervals[(s.number + c[x] - 1) % intervals.length];
                        octive = Math.ceil(c[x] / intervals.length);
                        targetNote = baseNote + ((octive - 1) * 12);
                        addTime = 0;
                        if (ca) {
                            addTime += (r / (x + 1));
                        }
                        play(base + key + transpose + targetNote, addV + v, counter + addTime, r + addTime);
                    }
                }
            }
            noteCounter += 1;
            counter += r;
        }
    }
    timer = setInterval(checkQueue, timerLength);
    return function () {
        clearTimeout(timer);
    };
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
        if (count % intervals.length === 0) {
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
styles["4ths Cycle"] = function (intervals, offset) {
    var count = 0 + offset;
    return function (args) {
        count += 3;
        return {
            number: count,
            end: count % intervals.length
        };
    }
}
styles["5ths Cycle"] = function (intervals, offset) {
    var count = 0 + offset;
    return function (args) {
        count += 4;
        return {
            number: count,
            end: count % intervals.length
        };
    }
}
styles["6ths Cycle"] = function (intervals, offset) {
    var count = 0 + offset;
    return function (args) {
        count += 5;
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
styles["4ths Sequence"] = function (intervals, offset) {
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
styles["5ths Sequence"] = function (intervals, offset) {
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
function refreshSaveMenus(menu, store) {
    var x, d = localStorage.getItem(store) || "{}",
        d = JSON.parse(d);
    if (Object.keys(d).length === 0) {
        localStorage.setItem(store, JSON.stringify(d));
    }
    while(menu.options.length > 0) {
        menu.remove(0);
    }
    Object.keys(d).forEach(function (o) {
        pe('option', menu, o, o);
    });
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
inputEvents.stopAll = [{
    event: 'click',
    method: function () {
        methods.stopAll = stopAll;
        return stopAll; 
    }
}];
inputEvents.playAll = [{
    event: 'click',
    method: function (e, inputs, methods) {
        methods.playAll = playAll;
        return playAll;
    }
}];
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
        return function () {
            timeSignature[0] = parseInt(e.value, 10);
        }
    }
}];
inputEvents.sigBeat = [{
    event: 'change',
    method: function (e, inputs, methods) {
        return function () {
            timeSignature[1] = parseInt(e.value, 10);
        }
    }
}];
inputEvents.stop = [{
    event: 'click',
    method: function (e, inputs, methods) {
        return function () {
            methods.stopEvent();
        }
    }
}];
inputEvents.rate = [{
    event: 'change',
    method: function (i, inputs) {
        return function () {
            inputs.rhythm.value = this.value.split(':')[0];
        }
    },
}];
inputEvents.scale = [{
    event: 'change',
    method: function (e, inputs, methods) {
        setTimeout(function () {
            inputs.intervals.value = inputs.intervals.value === 'undefined' ?
                toIntervals(inputs.scale.value) : inputs.intervals.value;
        }, 0);
        return function () {
            if (inputs.stopEvent) {
                inputs.stopEvent();
            }
            inputEvents.play[0].method(e, inputs, methods);
            inputs.intervals.value = toIntervals(inputs.scale.value);
            console.log(inputs.scale.selectedIndex);
        }
    }
}];
inputEvents.play = [{
    event: 'click',
    method: function (e, inputs, methods) {
        var a;
        function stop () {
            if (a) {
                methods.playing = false;
                a();
            }
        }
        function play () {
            if (methods.stopEvent) {
                methods.stopEvent();
            }
            methods.playing = true;
            a = arp({
                inputFrom: parseInt(inputs.inputFrom.value, 10),
                channel: parseInt(inputs.channel.value, 10),
                pedal: inputs.pedal.value.split(','),
                style: inputs.style.value,
                rate: inputs.rate.value,
                rhythm: inputs.rhythm.value.split(','),
                key: inputs.key.selectedIndex,
                transpose: parseInt(inputs.transpose.value, 10),
                offset: parseInt(inputs.offset.value, 10),
                velocity: inputs.velocity.value.split(',').map(numMap),
                messageType: inputs.messageType.value,
                controllerNumber: inputs.controllerNumber.value,
                intervals: inputs.intervals.value.split(',').map(numMap),
                gatePct: parseInt(inputs.gate.value, 10) / 100,
                pedalGatePct: parseInt(inputs.pedalGate.value, 10) / 100,
                chord: parseChordsFromInput(inputs.chord.value),
                distance: parseInt(inputs.distance.value, 10),
                step: parseInt(inputs.step.value, 10),
                onplay: methods.updatePiano
            });
            methods.stopEvent = a;
        }
        methods.playEvent = play;
        arpAllMethods.play.push(play);
        arpAllMethods.stop.push(stop);
        return play;
    }
}];
function getArpList() {
    var x = 0,
        i = [];
    forms.forEach(function (f) {
        if (x !== 0) {
            i.push(f);
        }
        x += 1;
    });
    return i;
}
function parseChordsFromInput(v){
    if(/\]/.test(v)) {
        // parse the 2d array
        var i = JSON.parse('{"n": [' + v + ']}');
        return i.n;
    } else {
        // parse the 1d array
        return [v.split(',')];
    }
}
inputEvents.addArp = [{
    event: 'click', 
    method: function () {
        return function () {
            pe(createForm({}, arpControls, arpCss), document.body);
        };
    }
}];
inputEvents.duplicate = [{
    event: 'click',
    method: function (e, inputs) {
        return function () {
            var args = serializeInputs(inputs, arpControls);
            console.log(args);
            pe(createForm(args, arpControls, arpCss), document.body);
        }
    }
}];
inputEvents.piano = [{
    event: 'load',
    method: function (e, inputs, methods) {
        methods.keys = [];
        setTimeout(function () {
            inputs.piano.parentNode.style.marginLeft = '4px';
            inputs.piano.parentNode.style.width = '1123px';
            inputs.piano.parentNode.style.overflow = 'hidden';
        }, 0);
        methods.updatePiano = function (note, time, length, velocity, device, channel) {
            var n = note - 24;
            if (n > 83 || n < 0) {
                return; 
            }
            //i.select(inputs.intervals.value.split(',').map(numMap));
            setTimeout(function () {
                if (!isNaN(note) && inputs.piano.keys[note - 24]){
                    methods.keys.push(note);
                    inputs.piano.keys[note - 24].highlight(velocity);
                    setTimeout(function () {
                        methods.keys.splice(methods.keys.indexOf(note), 1);
                        inputs.piano.keys[note - 24].unhighlight();
                    }, time - performance.now() + length);
                }
            }, time - performance.now());
        }
        return function () {

        }
    }
}];
inputEvents.device = [{
    event: 'change',
    method: function () {
        setTimeout(function () { deviceId = masterForm.inputs.device.value; }, 0);
        return function () {
            deviceId = this.value;
        }
    }
}];
function getArpFromIndex(index) {
    index = parseInt(index, 10);
    var list = getArpList(),
        x = 0;
    for(x = 0; x < list.length; x++){
        if (x  === index - 1) { return list[x]; }
    }
}
function createArpSelectList(input) {
    return function () {
        var list = getArpList(),
            x = 1;
        input.innerHTML = '';
        pe('option', input, 'None', 0);
        list.forEach(function (i) {
            pe('option', input, 'Arpeggeator ' + x, x);
            x++;
        });
    }
}
inputEvents.inputFrom = [{
    event: 'mousedown',
    method: function (input, inputs) {
        setTimeout(function () { 
            createArpSelectList(input)();
        }, 0);
        return createArpSelectList(input);
    }
}];
inputEvents.help = [{
    event: 'click',
    method: function () {
        return function () {
            window.open('arphelp.html', '_blank');
        }
    }
}];
inputEvents.tempo = [{
    event: 'change',
    method: function () {
        return function () {
            tempo = this.value;
        }
    }
}];
inputEvents.list = [{
    event: 'change',
    method: function (e, inputs, methods) {
        setTimeout(function() {
            refreshSaveMenus(inputs.list, 'masters');
        }, 0);
        return function () {
            var key = this.value, x, masters = JSON.parse(localStorage.getItem('masters'));
            forms.forEach(function (f) {
                f.remove();
            });
            forms = [];
            for(x = 0; x < masters[key].length; x++){
                if (x === 0) {
                    pe(createForm(masters[key][x], masterControls, masterCss), document.body);  
                }
                pe(createForm(masters[key][x], arpControls, arpCss), document.body);
            }
        }
    }
}];
inputEvents.arpList = [{
    event: 'change',
    method: function (e, inputs, methods) {
        setTimeout(function() {
            refreshSaveMenus(inputs.arpList, 'arps');
        }, 0);
        return function () {
            var arps = JSON.parse(localStorage.getItem('arps'));
            methods.deleteForm();
            pe(createForm(arps[inputs.arpList.value], arpControls, arpCss), document.body);
        }
    }
}];
inputEvents.clear = [{
    event: 'click',
    method: function (e, inputs, methods) {
        return function () {
            methods.deleteForm();
        }
    }
}];
inputEvents.deleteArp = [{
    event: 'click',
    method: function (e, inputs, methods) {
        return function () {
            methods.deleteForm();
        }
    }
}];
inputEvents.arpSave = [{
    event: 'click',
    method: function (e, inputs, methods) {
        return function () {
            var sinputs = serializeInputs(inputs, arpControls),
                arps = localStorage.getItem('arps') || "{}";
            arps = JSON.parse(arps);
            arps[sinputs.title] = sinputs;
            localStorage.setItem('arps', JSON.stringify(arps));
        }
    }
}];
inputEvents.save = [{
    event: 'click',
    method: function (e, inputs, methods) {
        return function () {
            var fs = [], x;
            for(x = 0; x < forms.length; x++){
                if (x === 0) {
                    fs.push(serializeInputs(forms[x].inputs, masterControls));
                } else {
                    fs.push(serializeInputs(forms[x].inputs, arpControls));
                }
            }
            var masters = localStorage.getItem('masters') || "{}";
            masters = JSON.parse(masters);
            masters[fs[0].title] = fs;
            localStorage.setItem('masters', JSON.stringify(masters));
            refreshSaveMenus(inputs.list, 'masters');
        }
    }
}];
methods.fireTimingEvent = fireTimingEvent;
methods.log = function () {
    console.log.apply(console, arguments);
};
function serializeInputs(inputs, controlSet) {
    var o = {};
    Object.keys(inputs).forEach(function (f) {
        if(/select|text|range/.test(controlSet[f].type)) {
            o[f] = controlSet[f].type === 'select' ? inputs[f].selectedIndex : inputs[f].value;
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
        if(!/select/.test(ctrl.type)) {
            i.type = ctrl.type;    
        }
        if (ctrl.type === 'select') {
            c2.className = args.select;
            ctrl.options.forEach(function (o) {
                var op, r, title = o, value = o;
                if (Array.isArray(o)) {
                    title = o[0];
                    value = o[1];
                };
                op = pe('option', i, title, value);
                if (ctrl.defaultValueByTitle !== undefined) {
                    r = new RegExp(ctrl.defaultValueByTitle, "i");
                    if (r.test(title)){
                        op.setAttribute('selected', true);
                    }
                }
            });
            if (ctrl.defaultValueByTitle === undefined) {
                i.selectedIndex = arg || ctrl.defaultIndex || 0;
            }
            
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
        } else if (ctrl.type === 'timeline') {
            var timeline;
            c2.removeChild(i);
            r.removeChild(c1);
            c2.setAttribute('colspan', 2);
            timeline = pe('div', c2);
            i = createTimeline({
                parentNode: timeline
            });
        } else if (ctrl.type === 'piano') {
            function noteon(midiNoteNumber, instance) {
                if(!instance.mousedown) { return; }
                sendMessage(msg['on'], deviceId, parseInt(inputs.channel.value, 10), midiNoteNumber, 64, 0);
                i.keys[midiNoteNumber - 24].highlight();
                document.body.addEventListener('mouseup', function () {
                    instance.mousedown = false;
                    i.keys[midiNoteNumber - 24].unhighlight();
                    noteoff(midiNoteNumber, instance);
                });
            }
            function noteoff(midiNoteNumber, instance) {
                sendMessage(msg['off'], deviceId, parseInt(inputs.channel.value, 10), midiNoteNumber, 64, 0);
                document.body.removeEventListener('mouseup', noteoff);
            }
            c2.removeChild(i);
            r.removeChild(c1);
            c2.setAttribute('colspan', 2);
            var pianoControl = pe('div', c2);
            r.className = 'pianoControl';
            i = createPiano({
                parentNode: pianoControl,
                pitchClass: 0,
                range: 7,
                keyMouseDown: function (midiNoteNumber, instance) {
                    instance.mousedown = true;
                    i.keys[midiNoteNumber - 24].highlight();
                    noteon(midiNoteNumber, instance);
                },
                keyMouseOver: noteon,
                keyDblClick: function (midiNoteNumber, instance){
                    var i = inputs.intervals.value.split(',');
                    i.push(midiNoteNumber);
                    inputs.intervals.value = i.join();
                }
            });
        } else if (ctrl.type === 'button') {
            r.removeChild(c1);
            c2.setAttribute('colspan', 2);
            i.innerHTML = ctrl.title;
        } else {
            i.value = arg || ctrl.defaultValue;
        }
        if (i.addEventListener) {
            i.addEventListener('change', function () {
                if (methods.stopEvent) {
                    methods.stopEvent();
                }
                if (methods.stopAll) {
                    methods.stopAll();
                }
                if (methods.playAll) {
                    methods.playAll();
                }
                if (methods.playEvent) {
                    methods.playEvent();
                }
            });
        }
        if (v) {
            v.value = i.value;
        }
        if (inputEvents[f]) {
            inputEvents[f].forEach(function (ev) {
                if (i.addEventListener) {
                    i.addEventListener(ev.event, ev.method.apply(null, [i, inputs, methods]));
                } else {
                    // if this isn't an event hanlding object, then just invoke
                    ev.method.apply(null, [i, inputs, methods]);
                }
            });
        }
        inputs[f] = i;
    });
    // whenever anything changes toggle play
    container.inputs = inputs;
    container.methods = methods;
    forms.push(container);
    methods.deleteForm = function () {
        if (methods.stopEvent) {
            methods.stopEvent();
        }
        forms.splice(forms.indexOf(container), 1);
        container.parentNode.removeChild(container);
    };
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
