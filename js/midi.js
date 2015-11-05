/*jslint browser: true*/
/*globals performance: false, requestAnimationFrame: false*/
define([], function () {
    'use strict';
    var self,
        pipes = {},
        midi = {},
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
        };
    function sendMessage(message, deviceId, channel, value, value2, time) {
        var m, o;
        value = Math.min(value, 127);
        value2 = Math.min(value2, 127);
        value = Math.max(value, 0);
        value2 = Math.max(value2, 0);
        m = [parseInt(message + channel.toString(16), 16), value, value2];
        o = pipes.outputs[deviceId];
        o.value.open();
        o.value.send(m, time);
    }
    self = {
        pipes: pipes,
        msg: msg,
        messageTypes: ['Note On/Off', 'Controller Change'],
        middleC: 60,
        timings: {
            // 1/128
            "a": 128,
            // 1/64
            "f": 64,
            // 1/32
            "i": 32,
            // 1/16
            "s": 16,
            // 1/8
            "e": 8,
            // 1/4
            "q": 4,
            // 1/2
            "h": 2,
            // 1/1
            "w": 1,
            // 2
            "2": 0.5,
            // 3
            "3": 0.33,
            // 4
            "4": 0.25,
            // 5
            "5": 0.2,
            // 6
            "6": 0.16666666666666666667,
            // 7
            "7": 0.1428571428571429,
            // 8
            "8": 0.125
        },
        channel: [
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
        init: function (callback) {
            function f() {
                function readMessage() {
                    return;
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
                                    i.value.onmidimessage = readMessage;
                                }
                            }
                        }
                    }
                    ['inputs', 'outputs'].forEach(getPipes);
                    self.pipes = pipes;
                    callback(pipes, midi);
                });
            }
            if (document.readyState === "complete"
                    || document.readyState === "loaded"
                    || document.readyState === "interactive") {
                return f();
            }
            document.addEventListener('DOMContentLoaded', f);
        },
        sendMessage: sendMessage,
        playNote: function (note, velocity, duration, deviceId, channel, time) {
            sendMessage(msg.on, deviceId, channel, note, velocity, time);
            sendMessage(msg.off, deviceId, channel, note, velocity, time + duration);
        }
    };
    return self;

});
