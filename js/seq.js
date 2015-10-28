function sequencer(mainArgs) {
   'use strict';
    var mag = 10000,
        tempo = 120,
        midiMiddleC = 60,
        timeLineLength,
        timeLineLength,
        timeSignature = [4, 4],
        styles = {},
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
        noEditInputs = /^(index.*|stop|remove|items|id|play|createPhrase|pause|schedule|rhythmTimes|unhighlight|highlight|msTime|msLength)$/,
        //noEditInputs = /blah/,
        scalesSelect,
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
            deviceId: '1'
        },
        itemParams = {
            name: '',
            key: '0',
            index: '0',
            indexRest: '0',
            indexNote: '0',
            indexStep: '0',
            transpose: midiMiddleC.toString(),
            scales: 'Harmonic Minor',
            intervals: '0,1,3,4,6,8,9',
            rhythm: 'q',
            chords: '[1]',
            velocities: '64',
            style: 'Up',
            step: '0',
            stepStyle: 'Up',
            offset: '0',
            gate: '50',
            length: '4'
        },
        queueLength = 500,
        timeLines = {},
        timer = new Worker("js/seqTimer.js");
    timer.postMessage(250);
    createScaleSelectArray();
    timer.onmessage = function (e) {
        Object.keys(timeLines).forEach(function (timeLinesKey) {
            timeLines[timeLinesKey].schedule(e);
        });
    };
    function createScaleSelectArray() {
        scalesSelect = document.createElement('select');
        Object.keys(setList).forEach(function (xad) {
            Object.keys(setList[xad]).forEach(function (family) {
                Object.keys(setList[xad][family]).forEach(function (set) {
                    var o = document.createElement('option');
                    o.value = setList[xad][family][set].set.join(',');
                    o.innerHTML = xad + ' - ' + family + ' - ' + set;
                    scalesSelect.appendChild(o);
                });
            });
        });
    }
    function ce(tag, parentNode, className, html, cacheId, title) {
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
        if (title) {
            e.title = title;
        }
        if (html) {
            e.innerHTML = html;
        }
        return e;
    }
    function cid() {
        return Math.floor(performance.now() * 1000);
    }
    function add(a, b){
        return (Math.ceil(a * mag) + Math.ceil(b * mag)) / mag;
    }
    function subtract(a, b){
        return (Math.ceil(a * mag) - Math.ceil(b * mag)) / mag;
    }
    function playAll() {
        Object.keys(timeLines).forEach(function (timeLinesKey) {
            timeLines[timeLinesKey].play();
        });
    }
    function pauseAll() {
        Object.keys(timeLines).forEach(function (timeLinesKey) {
            timeLines[timeLinesKey].pause();
        });
    }
    function stopAll() {
        Object.keys(timeLines).forEach(function (timeLinesKey) {
            timeLines[timeLinesKey].stop();
        });
    }
    function createTimeLine() {
        var self = {
                channel: '0',
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
            return startTime - (startTime % beat);
        }
        self.play = function () {
            time = quantizedStart();
            updateRhythmTimes();
            timeLineLength = getTimeLineLength();
            playing = true;
        };
        self.stop = function () {
            playing = false;
            resetIndexes();
        };
        self.createPhrase = function (args) {
            args = args || {};
            var phrase = {};
            phrase.id = self.id + '_' + cid();
            self.items[phrase.id] = phrase;
            Object.keys(itemParams).forEach(function (key) {
                phrase[key] = args[key] === undefined ? itemParams[key] : args[key];
            });
            phrase.remove = function () {
                delete self.items[phrase.id];
            };
            return phrase;
        };
        self.pause = function () {
            playing = false;
        };
        function resetIndexes() {
            Object.keys(self.items).forEach(function (item){
                self.items[item].index = 0;
                self.items[item].indexRest = 0;
                self.items[item].indexNote = 0;
                self.items[item].indexStep = 0;
            });
        }
        function unhighlightAll() {
            Object.keys(self.items).forEach(function (item){
                self.items[item].unhighlight();
            });
        }
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
                var l = 0,
                    x = 0,
                    phraseTime = 0,
                    phrase = self.items[itemKey],
                    intervals = phrase.intervals.split(',')
                        .map(function (i) { return parseInt(i, 10);}),
                    rhythm = phrase.rhythm.split(','),
                    phrase = self.items[itemKey];
                phrase.rhythmTimes = [];
                phrase.msTime = scheduledTime;
                phrase.msLength = beat / toRhythm(phrase.length);
                phrase.timeMismatch = 'no-mismatch';
                phrase.track = self;
                while(phraseTime < phrase.msLength) {
                    l = beat / toRhythm(rhythm[x++ % rhythm.length]);
                    if (phraseTime + l > phrase.msLength) {
                        phrase.timeMismatch = 'mismatch';
                    }
                    phrase.rhythmTimes.push({
                        time: scheduledTime,
                        length: l * (phrase.gate / 100)
                    });
                    phraseTime += l;[]
                    scheduledTime += l;
                }
            });
        }
        function toRhythm(r) {
            r = r.replace(/\!/, '')
                .replace(/r/, '');
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
                i = add(i, self.items[item].msLength);
            });
            return i;
        }
        function getParamsAt(pos){
            var r, lx, ly, y, x, phrase, keys = Object.keys(self.items);
            for(y = 0, ly = keys.length; y < ly; y += 1) {
                phrase = self.items[keys[y]];
                if (phrase.msTime <= pos
                        && phrase.msTime + phrase.msLength >= pos) {
                    for(x = 0, lx = phrase.rhythmTimes.length; x < lx; x += 1) {
                        r = phrase.rhythmTimes[x];
                        if(r.time === pos){ 
                            return phrase;
                        }
                    }
                }
            }
        }
        function getStyle() {

        }
        function updatePlaybackUI(phrase, pos, timeLineLength) {
            var i = document.getElementById(phrase.track.id + 'info'),
                pi = document.getElementById(phrase.id + 'info'),
                phrasePct = ((pos) / timeLineLength) * 100,
                trackPct = ((pos - phrase.msTime) / phrase.msLength) * 100;
            pi.innerHTML = '<progress max=90 value=' + trackPct + '>'
                + trackPct.toFixed(2) + '</progress>';
            i.innerHTML = '<progress max=90 value=' + phrasePct + '>'
                + phrasePct.toFixed(2) + '</progress>';
            unhighlightAll();
            phrase.highlight();
        }
        self.schedule = function (e) {
            while(time < performance.now() + queueLength && playing) {
                var pos, phrase, rest, rMod, vMod, trill, ly, y, x, style, stepStyle,
                    intervals, rhythmStrings, rhythmString, velocities, chord, rhythm;
                pos = time % timeLineLength;
                phrase = getParamsAt(pos);
                if (phrase) {
                    chord = JSON.parse('{"n":[' + phrase.chords + ']}').n;
                    intervals = phrase.intervals.split(',').map(function (i) { return parseInt(i, 10);});
                    style = styles[phrase.style](intervals, phrase.offset);
                    rhythmStrings = phrase.rhythm.split(',');
                    velocities = phrase.velocities.split(',').map(function (i) { return parseInt(i, 10);});
                    rMod = phrase.index % phrase.rhythmTimes.length;
                    vMod = phrase.index % velocities.length;
                    rhythmString = rhythmStrings[phrase.indexRest % rhythmStrings.length];
                    rhythm = rhythmStrings.map(function (i) { return parseInt(i, 10);});
                    x = phrase.index % chord.length;
                    rest = /r/.test(rhythmString);
                    trill = /!/.test(rhythmString);
                    if (style.end) {
                        if (phrase.step === 0) {
                            intervals = getIntervals();
                            phrase.indexStep = 0;
                        } else {
                            stepStyle = styles[phrase.stepStyle](intervals, phrase.offset);
                            if (stepStyle.end) {
                                for (x = 0; x < phrase.distance; x += 1) {
                                    intervals.push(intervals.shift() + 12);
                                }
                            } else {
                                for (x = 0; x < Math.abs(phrase.distance); x += 1) {
                                    intervals.unshift(intervals.pop() - 12);
                                }
                            }
                        }
                    }
                    if (rest) {
                        phrase.index --;
                        phrase.indexNote --;
                        phrase.indexStep --;
                    } else {
                        for(y = 0, ly = chord[x].length; y < ly; y += 1) {
                            scheduleNote(
                                parseInt(phrase.transpose, 10) +
                                parseInt(phrase.key, 10) +
                                intervals[(phrase.index + chord[x][y] - 1) % intervals.length],
                                phrase.velocities[vMod],
                                time,
                                phrase.rhythmTimes[rMod].length
                            );
                        }
                        setTimeout(
                            updatePlaybackUI,
                            performance.now() - time - phrase.rhythm.length,
                            phrase,
                            pos,
                            timeLineLength
                        );
                    }
                    phrase.index ++;
                    phrase.indexRest ++;
                    phrase.indexNote ++;
                }
                time = add(time, atom);
            }
        };
        return self;
    }
    function createInputs(e, args, ctrlType) {
        Object.keys(args).forEach(function (key) {
            if (!noEditInputs.test(key)) {
                var v, c, label, sSelect, input;
                v = ctrlType === 'phrase' ? itemParams[key] : trackParams[key];
                c = ce('div', e, 'seq-input-continer', undefined, args.id + 'continer' + key);
                if (key === 'scales') {
                    input = ce('select', c, 'seq-input', key, args.id + 'input' + key);
                    function bindData() {
                        input.innerHTML = scalesSelect.innerHTML;
                        input.removeEventListener('mousedown', bindData);
                    }
                    input.addEventListener('mousedown', bindData);
                    input.addEventListener('change', function () {
                        args.intervals = this.value;
                        document.getElementById(args.id + 'inputintervals').value = this.value;
                    });
                    input.className = 'seq-input';
                    if (!input.parentNode) {
                        c.appendChild(input);
                    }
                } else {
                    label = ce('label', c, 'seq-input-label', key, args.id + 'label' + key);
                    input = ce('input', c, 'seq-input', key, args.id + 'input' + key);
                    label.setAttribute('for',  args.id + 'input' + key);
                }
                function update(value) {
                    args[key] = value === undefined ? input.value: value;
                    pauseAll();
                    playAll();
                }
                input.update = update;
                input.onchange = function () {
                    update();
                };
                if (ctrlType === 'phrase') {
                    input.value = args[key] || v;
                } else if (ctrlType === 'track') {
                    input.value = args[key] || v;
                }
            }
        });
    }
    function createUI() {
        var self = {},
            container = ce('div', parentNode, 'seq-list', undefined, 'phraseList');
        self.redraw = function () {
            var trackAdd, play, pause, stop, trackDelete, tempoInput, timesigTop, timesigBottom;
            trackAdd = ce('button', container, 'seq-track-add', '+', 'addTrack', 'Add Track');
            play = ce('button', container, 'seq-track-play', '►', 'playTrack', 'Play');
            pause = ce('button', container, 'seq-track-pause', '||', 'pauseTrack', 'Pause');
            stop = ce('button', container, 'seq-track-stop', '■', 'stopTrack', 'Stop');
            tempoInput = ce('input', container, 'seq-track-tempo', undefined, 'tempoTrack', 'Tempo');
            timesigTop = ce('input', container, 'seq-track-timesig-top', undefined, 'timesigTopTrack', 'Beats');
            timesigBottom = ce('input', container, 'seq-track-timesig-bottom', undefined, 'timesigBottomTrack', 'Value');
            tempoInput.value = tempo;
            timesigTop.value = timeSignature[0];
            timesigBottom.value = timeSignature[1];
            Object.keys(timeLines).forEach(function (timeLinesKey) {
                var t = timeLines[timeLinesKey],
                    track = ce('div', container, 'seq-track', undefined, t.id + 'timeline'),
                    trackControl = ce('div', track, 'seq-track-control', null, t.id + 'trackcontrol'),
                    trackRemove,
                    trackDelete = ce('button', trackControl, 'seq-track-delete', 'X', 'trackDelete', 'Delete'),
                    phraseAdd = ce('button', trackControl, 'seq-phrase-add', '+', t.id + 'phraseadd', 'Add Phrase'),
                    trackInfo = ce('div', trackControl, 'seq-track-info', t.info, t.id + 'info');
                phraseAdd.onclick = function () {
                    t.createPhrase();
                    self.redraw();
                }
                trackDelete.onclick = function () {
                    alert('no workey');
                }
                createInputs(trackControl, t, 'track');
                Object.keys(t.items).forEach(function (phraseKey) {
                    var s, phrase, phraseDuplicate, phraseMoveUp, phraseMoveDown, phraseRemove, phraseInfo;
                    s = t.items[phraseKey];
                    phrase = ce('div', track, 'seq-phrase', undefined, s.id + 'phraseitem'),
                    phraseInfo = ce('div', phrase, 'seq-phrase-info', undefined, s.id + 'info');
                    phraseRemove = ce('button', phrase, 'seq-phrase-remove', 'X', s.id + 'phraseDelete', 'Delete Phrase');
                    phraseDuplicate = ce('button', phrase, 'seq-phrase-duplicate', '⇉', s.id + 'phraseDuplicate', 'Duplicate Phrase');
                    phraseMoveUp = ce('button', phrase, 'seq-phrase-moveup', '→', s.id + 'phraseUp', 'Move Up');
                    phraseMoveDown = ce('button', phrase, 'seq-phrase-movedown', '←', s.id + 'phraseDown', 'Move Down');
                    createInputs(phrase, s, 'phrase');
                    phraseRemove.onclick = function () {
                        s.remove();
                        phrase.parentNode.removeChild(phrase);
                    };
                    phraseDuplicate.onclick = function () {
                        t.createPhrase(s);
                        self.redraw();
                    };
                    s.highlight = function () {
                        phrase.classList.add('seq-phrase-highlight');
                    };
                    s.unhighlight = function () {
                        phrase.classList.remove('seq-phrase-highlight');
                    };
                });
            });
            trackAdd.onclick = function () {
                var timeLine = createTimeLine();
                timeLines[timeLine.id] = timeLine;
                timeLine.createPhrase();
                self.redraw();
            }
            play.onclick = function () {
                playAll();
            }
            pause.onclick = function () {
                pauseAll();
            }
            stop.onclick = function () {
                stopAll();
            }
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
        timeLine.createPhrase();
        ui = createUI(),
        ui.redraw();
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