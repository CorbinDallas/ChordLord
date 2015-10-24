/*jslint browser: true*/
function sequencer(mainArgs) {
   'use strict';
    var tempo = 120,
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
        itemParams = {
            name: '',
            index: 0,
            channel: 1,
            messageType: 0,
            controllerNumber: 0,
            key: 0,
            transpose: 0,
            intervals: [0,1,3,4,6,8,9],
            rhythm: 'q',
            chord: [1],
            velocity: [64],
            style: 'Up',
            step: 0,
            stepStyle: 'Up',
            offset: 0,
            gate: 50
        },
        queueLength = 100,
        timeLines = {},
        timer = new Worker("js/seqTimer.js");
    timer.postMessage(2000);
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
                channel: 0,
                type: 0,
                controllerNumber: 0,
                items: {},
                id: cid()
            },
            atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]),
            beat = (atom * 128) / (4 / timeSignature[1]),
            bar = beat * timeSignature[0],
            playing = false,
            time;
        function quuantizedStart () {
            return Math.floor((performance.now() * atom) / atom);
        }
        self.play = function () {
            playing = true;
            time = quuantizedStart();
            // create time array from rhythm for use later
            Object.keys(self.items).forEach(function (itemKey){
                var item = self.items[itemKey];
                item.rhythmTimes = item.rhythm.split(',').map(function (i) {
                    return beat / toRhythm(i);
                });
            });
        };
        self.createSequence = function (args) {
            var seqItem = {};
            seqItem.id = self.id + '_' + cid();
            self.items[seqItem.id] = seqItem;
            Object.keys(itemParams).forEach(function (itemPramKeys) {
                seqItem[itemPramKeys] = itemParams[itemParams];
            });
            return seqItem;
        };
        self.pause = function () {
            playing = false;
        };
        function scheduleNote(note, v, t, r) {
            playNote(
                note,
                v,
                r * args.gatePct,
                deviceId,
                args.channel,
                t
            );
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
                i += getSeqLength(item);
            });
            return i;
        }
        function getSeqLength(item) {
            return item.rhythmTimes.reduce(function (previousValue, currentValue, index) {
                return previousValue + currentValue;
            }, 0);
        }

        function getNotesAt(t){

        }
        function getSeq(t){
            var timeLineLength = getTimeLineLength(),
                pos = t % timeLineLength,
                r = getRhythmAt(pos, timeLineLength)
            return {

            }
        }
        self.schedule = function (e) {
            while(time < performance.now() + queueLength && playing) {
                var seq = getSeq(time);
                time 
                scheduleNote();
                time += atom;
            }
        };
        return self;
    }
    function createSeqInputs(e, args) {
        Object.keys(args).forEach(function (key) {
            var c = ce('div', e, 'seq-input-continer', undefined, args.id + 'continer' + key),
                label = ce('label', c, 'seq-input-label', key, args.id + 'label' + key),
                input = ce('input', c, 'seq-input', key, args.id + 'input' + key);
            label.setAttribute('for',  args.id + 'input' + key);
            input.value = itemParams[key];
        });
    }
    function createUI() {
        var self = {},
            container = ce('div', parentNode, 'seq-list', undefined, 'seqList'),
            items = {};
        self.redraw = function () {
            var trackAdd;
            Object.keys(timeLines).forEach(function (timeLinesKey) {
                var t = timeLines[timeLinesKey],
                    track = ce('div', container, 'seq-track', undefined, t.id + 'timeline'),
                    seqAdd;
                Object.keys(t.items).forEach(function (seqKey) {
                    var s = t.items[seqKey],
                        seq = ce('div', track, 'seq-seq-item', s.id, s.id + 'seqitem');
                    createSeqInputs(seq, s);
                });
                seqAdd = ce('div', track, 'seq-seq-item-add', 'Add Seq', t.id + 'seqadd');
                track.insertBefore(seqAdd, track.firstChild);
                seqAdd.onclick = function () {
                    t.createSequence();
                    self.redraw();
                }
            });
            trackAdd = ce('div', container, 'seq-track-add', 'Add Track', 'addTrack');
            trackAdd.onclick = function () {
                var timeLine = createTimeLine();
                timeLines[timeLine.id] = timeLine;
                timeLine.createSequence();
                self.redraw();
            }
            container.insertBefore(container.firstChild, trackAdd);
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
            o = window.pipes.outputs[deviceId];
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