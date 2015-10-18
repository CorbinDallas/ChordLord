/*jslint browser: true*/
/*globals performance: false, requestAnimationFrame: false*/
'use strict';
var msg = {
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
};
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

