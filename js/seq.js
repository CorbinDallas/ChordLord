/*jslint browser: true*/
'use strict';
var tempo = 120,
    timeSignature = [4, 4],
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
function ce(tag, parentNode, className, html) {
    var e;
    if (typeof tag !== 'string'){
        e = tag;
    } else {
        e = document.createElement(tag);
    }
    if (parentNode) {
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
function createTimeLine() {
    var self = {},
        atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]),
        beat = (atom * 128) / (4 / timeSignature[1]),
        bar = beat * timeSignature[0],
        playing = false,
        items = {},
        time = performance.now();
    self.id = Math.floor(performance.now() * 1000);
    items[self.id] = self;
    self.play = function () {
        playing = true;
        time = performance.now();
    };
    self.addItem = function (args) {

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
    self.schedule = function (e) {
        while(time < performance.now() + queueLength && playing) {
            scheduleNote();
            time += atom;
        }
    };
}
function ui() {
    var self = {},
        container = ce('div', document.body, 'seq-list'),
        items = {};
    function updateItems() {
        Object.keys(timeLines).forEach(function (timeLinesKey) {
            var t = timeLines[timeLinesKey],
                track = ce('div', container, 'seq-track');
            Object.keys(t.items).forEach(function (seqKey) {
                var s = t.items[seqKey],
                    seq = ce('div', track, 'seq-seqItem');
            });
        });
        timeLines
    }

    addItem('')
    return self;
}
document.addEventListener('DOMContentLoaded', function () {
    function readMessage() {
        return;
    }
    window.navigator.requestMIDIAccess({
        sysex: false
    }).then(function (e) {
        window.midi = e;
        window.pipes = { inputs: {}, outputs: {} };
        function getPipes(pipe) {
            var i, s = window.midi[pipe].values();
            for (i = s.next(); i && !i.done; i = s.next()) {
                if (i && i.value) {
                    window.pipes[pipe][i.value.id] = i;
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

