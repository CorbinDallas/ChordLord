/*jslint browser: true*/
function sequencer(mainArgs) {
   'use strict';
    var mag = 1000,
        res = .01,
        tempo = 120,
        midiMiddleC = 60,
        timeSignature = [4, 4],
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
        ui,
        midi,
        pipes,
        parentNode = mainArgs.parentNode,
        elements = {},
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
        trackParams = {
            name: '',
            channel: '1',
            messageType: '0',
            deviceId: '1'
        },
        itemParams = {
            name: '',
            controllerNumber: '0',
            key: '0',
            index: '0',
            transpose: '0',
            intervals: '0,1,3,4,6,8,9',
            rhythm: 'q',
            chords: '1',
            velocities: '64',
            style: 'Up',
            step: '0',
            stepStyle: 'Up',
            offset: '0',
            gate: '50',
            length: 'q'
        },
        queueLength = 500,
        timeLines = {},
        timer = new Worker("js/seqTimer.js");
    timer.postMessage(250);
    timer.onmessage = function (e) {
        Object.keys(timeLines).forEach(function (timeLinesKey) {
            timeLines[timeLinesKey].schedule(e);
        });
    };
    function ce(tag, parentNode, className, html, cacheId) {
        var e;
        if (elements[cacheId]){ 
            e = elements[cacheId];
        } else {
            if (typeof tag !== 'string'){
                e = tag;
            } else {
                e = document.createElement(tag);
            }
            elements[cacheId] = e;
        }
        e.id = cacheId;
        if (e.parentNode === undefined
            || e.parentNode !== parentNode) {
            parentNode.appendChild(e);
        }
        if (className) {
            e.className = className;
        }
        if (html) {
            e.innerHTML = html;
        }
        return e;
    }
    function cid() {
        return Math.floor(performance.now() * 1000);
    }
    function createTimeLine() {
        var self = {
                channel: '0',
                messageType: '0',
                items: {},
                deviceId: '1',
                id: cid()
            },
            atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]),
            beat = (atom * 128) / (4 / timeSignature[1]),
            bar = beat * timeSignature[0],
            playing = false,
            startTime,
            time;
        console.log('beat:', beat, '-atom:', atom, '-bar:', bar);
        function quantizedStart () {
            startTime = performance.now();
            return startTime;
        }
        self.play = function () {
            time = quantizedStart();
            updateRhythmTimes();
            playing = true;
        };
        self.createSequence = function (args) {
            var seqItem = {};
            seqItem.id = self.id + '_' + cid();
            self.items[seqItem.id] = seqItem;
            Object.keys(itemParams).forEach(function (itemPramKeys) {
                seqItem[itemPramKeys] = itemParams[itemPramKeys];
            });
            seqItem.updateInfo = function (msg) {
                seqItem.info = msg;
                ui.redraw();
            };
            seqItem.remove = function () {
                delete self.items[seqItem.id];
            };
            return seqItem;
        };
        self.pause = function () {
            playing = false;
        };
        function scheduleNote(note, v, t, r) {
            playNote(
                note,
                v,
                r,
                self.deviceId,
                self.channel,
                t
            );
        }
        function updateRhythmTimes() {
            // create time array from rhythm for use later
            var scheduledTime = 0;
            Object.keys(self.items).forEach(function (itemKey){
                var l,
                    x,
                    xl,
                    seq = self.items[itemKey],
                    intervals = seq.intervals.split(',')
                        .map(function (i) { return parseInt(i, 10);}),
                    rhythm = seq.rhythm.split(','),
                    seq = self.items[itemKey];
                seq.rhythmTimes = [];
                for(x = 0, xl = intervals.length; x < xl; x += 1) {
                    l = beat / toRhythm(rhythm[x % rhythm.length]);
                    seq.rhythmTimes.push({
                        time: scheduledTime,
                        length: l
                    });
                    scheduledTime += l;
                }
            });
            console.log('updated rhythmTimes');
            console.log(JSON.stringify(self.items));
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
        function getTimeLineLength() {
            var i = 0;
            Object.keys(self.items).forEach(function (item){
                i += (beat / toRhythm(self.items[item].length));
            });
            return i;
        }
        function getParams(seq, pos) {
            var intervals = seq.intervals.split(',')
                    .map(function (i) { return parseInt(i, 10);}),
                velocities = seq.velocities.split(',')
                    .map(function (i) { return parseInt(i, 10);}),
                chords = seq.chords.split(',')
                    .map(function (i) { return parseInt(i, 10);});
            return {
                sequence: seq,
                interval: intervals[seq.index % intervals.length],
                rhythm: seq.rhythmTimes[seq.index % seq.rhythmTimes.length],
                velocity: velocities[seq.index % velocities.length],
                chords: chords[seq.index % chords.length]
            }
        }
        function getParamsAt(pos){
            var r, lx, ly, y, x, seq, keys = Object.keys(self.items);
            for(y = 0, ly = keys.length; y < ly; y += 1) {
                seq = self.items[keys[y]];
                //console.log('checking for', pos, 'in', JSON.stringify(seq.rhythmTimes));
                for(x = 0, lx = seq.rhythmTimes.length; x < lx; x += 1){
                    var r = seq.rhythmTimes[x];
                    if(r.time + res > pos
                        && r.time - res < pos){ 
                        seq.index ++;
                        console.log('got pram from ' + seq.id);
                        return getParams(seq, x);
                    }
                }
            }
        }
        self.schedule = function (e) {
            while(time < performance.now() + queueLength && playing) {
                var offsetTime = time - startTime,
                    timeLineLength = getTimeLineLength(),
                    pos = offsetTime % timeLineLength,
                    seq = getParamsAt(pos);
                if (seq) {
                    scheduleNote(
                        midiMiddleC + seq.interval,
                        seq.velocity,
                        time,
                        seq.rhythm.length
                    );
                    setTimeout(function (seq) {
                        seq.sequence.updateInfo("playing note:" + seq.interval +
                            " time:" + time);
                    }, performance.now() - time, seq);
                } else {
                    console.log('t', pos);
                }
                time += atom;
            }
        };
        return self;
    }
    function createInputs(e, args, ctrlType) {
        Object.keys(args).forEach(function (key) {
            if (!/remove|items|id|play|createSequence|pause|schedule|rhythmTimes|updateInfo/.test(key)) {
                var c = ce('div', e, 'seq-input-continer', undefined, args.id + 'continer' + key),
                    label = ce('label', c, 'seq-input-label', key, args.id + 'label' + key),
                    input = ce('input', c, 'seq-input', key, args.id + 'input' + key);
                function update(value) {
                    args[key] = value === undefined ? input.value: value;
                }
                input.update = update;
                input.onchange = function () {
                    update();
                };
                label.setAttribute('for',  args.id + 'input' + key);
                if (ctrlType === 'seq') {
                    input.value = args[key] || itemParams[key];
                } else if (ctrlType === 'track') {
                    input.value = args[key] || trackParams[key];
                }
            }
        });
    }
    function createUI() {
        var self = {},
            container = ce('div', parentNode, 'seq-list', undefined, 'seqList');
        self.redraw = function () {
            var trackAdd;
            Object.keys(timeLines).forEach(function (timeLinesKey) {
                var t = timeLines[timeLinesKey],
                    seqAdd,
                    trackPlay,
                    trackPause,
                    trackInfo,
                    trackRemove,
                    track = ce('div', container, 'seq-track', undefined, t.id + 'timeline'),
                    trackControl = ce('div', track, 'seq-track-control', null, t.id + 'trackcontrol');
                createInputs(trackControl, t, 'track');
                Object.keys(t.items).forEach(function (seqKey) {
                    var s = t.items[seqKey],
                        seq = ce('div', track, 'seq-seq-item', s.id, s.id + 'seqitem'),
                        seqRemove;
                    createInputs(seq, s, 'seq');
                    seqRemove = ce('button', seq, 'seq-item-delete', 'Delete', s.id + 'seqDelete');
                    seqRemove.onclick = function () {
                        s.remove();
                        self.redraw();
                    };
                });
                seqAdd = ce('button', trackControl, 'seq-track-item-add', 'Add Sequence', t.id + 'seqadd');
                trackPlay = ce('button', trackControl, 'seq-track-play', 'Play', t.id + 'seqplay');
                trackPause = ce('button', trackControl, 'seq-seq-item-pause', 'Pause', t.id + 'seqpause');
                trackInfo = ce('div', trackControl, 'seq-seq-item-info', t.info, t.id + 'seqinfo');
                track.insertBefore(trackControl, track.firstChild);
                trackPause.onclick = function () {
                    t.pause();
                }
                trackPlay.onclick = function () {
                    t.play();
                }
                seqAdd.onclick = function () {
                    t.createSequence();
                    self.redraw();
                }
            });
            trackAdd = ce('button', container, 'seq-track-add', 'Add Track', 'addTrack');
            trackAdd.onclick = function () {
                var timeLine = createTimeLine();
                timeLines[timeLine.id] = timeLine;
                timeLine.createSequence();
                self.redraw();
            }
            container.insertBefore(trackAdd, container.firstChild);
        }
        return self;
    }
    function readMidiMessage(i, pipe) {
        return function () {

        };
    }
    function sendMessage(message, deviceId, channel, value, value2, time) {
        value = Math.min(value, 127);
        value2 = Math.min(value2, 127);
        value = Math.max(value, 0);
        value2 = Math.max(value2, 0);
        var msg = [parseInt(message + channel.toString(16), 16), value, value2],
            o = pipes.outputs[deviceId];
        o.value.open();
        o.value.send(msg, time);
    }
    function playNote(note, velocity, duration, deviceId, channel, time) {
        sendMessage(msg['on'], deviceId, channel, note, velocity, time);
        sendMessage(msg['off'], deviceId, channel, note, velocity, time + duration);
    }
    function init(){
        var timeLine = createTimeLine();
        timeLines[timeLine.id] = timeLine;
        timeLine.createSequence();
        ui = createUI(),
        ui.redraw();
    }
    window.navigator.requestMIDIAccess({
        sysex: false
    }).then(function (e) {
        midi = e;
        pipes = { inputs: {}, outputs: {} };
        function getPipes(pipe) {
            var i, s = midi[pipe].values();
            for (i = s.next(); i && !i.done; i = s.next()) {
                if (i && i.value) {
                    pipes[pipe][i.value.id] = i;
                    if (pipe === 'inputs') {
                        i.value.onmidimessage = readMidiMessage(i, pipe);
                    }
                }
            }
        }
        ['inputs', 'outputs'].forEach(getPipes);
        init();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    sequencer({
        parentNode: document.body
    });
});