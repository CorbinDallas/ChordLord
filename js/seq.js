/*jslint browser: true */
/*globals Worker: false, setList: false, performance: false, define:false */
define(['setList', 'piano', 'main', '12tone'], function (setListObject, piano, main, tt) {
    'use strict';
    function sequencer(mainArgs) {
        var setList = setListObject.list,
            quantizeTime = 'q',
            defaultScale = '0,3,4,6,7,9,11',
            idPrefix,
            mag = 10000,
            tempo = 120,
            midiMiddleC = 60,
            trackLength,
            timeSignature = [4, 4],
            styles = {},
            timings = {
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
            noEditInputs = /^(pianoInput|index\S*|timeMismatch|stop|remove|items|id|play|createPhrase|pause|schedule|rhythmTimes|unhighlight|highlight|msTime|msLength)$/,
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
                intervals: defaultScale,
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
            tracks = {},
            timer;
        function getById(id) {
            return document.getElementById(idPrefix + id);
        }
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
        function playNote(note, velocity, duration, deviceId, channel, time) {
            sendMessage(msg.on, deviceId, channel, note, velocity, time);
            sendMessage(msg.off, deviceId, channel, note, velocity, time + duration);
        }
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
            if (elements[cacheId]) {
                e = elements[cacheId];
            } else {
                if (typeof tag !== 'string') {
                    e = tag;
                } else {
                    e = document.createElement(tag);
                }
                elements[cacheId] = e;
            }
            e.id = idPrefix + cacheId;
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
        function numMap(i) {
            return parseInt(i, 10);
        }
        function formatChordName(strIntervals) {
            var chordNames = main.getChordNames(strIntervals.split(',').map(numMap));
            return chordNames.map(function (i) {
                return i.sibling.chordSymbol;
            }).join('<br>');
        }
        function cid() {
            return Math.floor(Math.random() * 1000000);
        }
        function add(a, b) {
            return (Math.ceil(a * mag) + Math.ceil(b * mag)) / mag;
        }
        function playAll() {
            Object.keys(tracks).forEach(function (tracksKey) {
                tracks[tracksKey].play();
            });
        }
        function pauseAll() {
            Object.keys(tracks).forEach(function (tracksKey) {
                tracks[tracksKey].pause();
            });
        }
        function stopAll() {
            Object.keys(tracks).forEach(function (tracksKey) {
                tracks[tracksKey].stop();
            });
        }
        function formatPhraseInfo(phrase) {
            var chords = formatChordName(phrase.intervals);
            return tt.noteNames[(phrase.key + phrase.transpose) % tt.noteNames.length]
                + ' ' + chords;
        }
        function createTrack(trackArgs) {
            trackArgs = trackArgs || {};
            var self = {
                    channel: trackArgs.channel || '0',
                    items: {},
                    deviceId: trackArgs.deviceId || '1',
                    id: cid()
                },
                atom,
                bar,
                beat,
                playing = false,
                startTime,
                time;
            function toRhythm(r) {
                var x,
                    y,
                    timing,
                    total = 0,
                    initialTiming,
                    timingString,
                    dotCount,
                    ties;
                // increase the value of the note by taking into
                // account the ties "^" and dots "."
                timingString = r.trim();
                ties = timingString.split('^');
                dotCount = 0;
                for (x = 0; x < ties.length; x += 1) {
                    console.log('timing', ties[x]);
                    timing = timings[ties[x][0]];
                    // if there was no match, ignore this note
                    if (!timing) {
                        return 0;
                    }
                    // if there was a match, turn it into time
                    timing = initialTiming = (bar / timing);
                    if (ties[x][1] === 'r') {
                        return timing;
                    }
                    for (y = 0; y < ties[x].length; y += 1) {
                        if (ties[x][y] === '.') {
                            dotCount += 1;
                            timing += (initialTiming * (0.5 / dotCount));
                        }
                    }
                    total += timing;
                }
                return total;
            }
            function getIntervals(phrase) {
                return phrase.intervals.split(',').map(numMap);
            }
            function quantizedStart() {
                var q = toRhythm(quantizeTime);
                startTime = performance.now();
                return startTime - (startTime % q) + q;
            }
            function updateRhythmTimes() {
                // this function creates an array of rhythmTimes that get used
                // by the schedule function to create the actual notes played
                atom = ((60000 / tempo) / 32) * (4 / timeSignature[1]);
                bar = (atom * 128);
                beat = bar / timeSignature[1];
                var scheduledTime = 0;
                Object.keys(self.items).forEach(function (itemKey) {
                    var l,
                        x = 0,
                        phraseTime = 0,
                        phrase = self.items[itemKey],
                        intervals = getIntervals(phrase),
                        offset = parseInt(phrase.offset, 10),
                        gate = parseInt(phrase.gate, 10),
                        chordNames = main.getChordNames(intervals),
                        rhythm = phrase.rhythm.split(',');
                    phrase.rhythmTimes = [];
                    phrase.msTime = scheduledTime;
                    phrase.msLength = toRhythm(phrase.length, beat);
                    phrase.timeMismatch = 'no-mismatch';
                    phrase.track = self;
                    phrase.styleFn = styles[phrase.style](intervals, offset);
                    phrase.stepStyleFn = styles[phrase.stepStyle](intervals, offset);
                    phrase.index = parseInt(phrase.index, 10);
                    phrase.indexRest = parseInt(phrase.indexRest, 10);
                    phrase.indexStep = parseInt(phrase.indexStep, 10);
                    phrase.indexNote = parseInt(phrase.indexNote, 10);
                    phrase.chordNames = chordNames;
                    while (phraseTime < phrase.msLength) {
                        l = toRhythm(rhythm[x % rhythm.length], beat);
                        if (phraseTime + l > phrase.msLength) {
                            phrase.timeMismatch = 'mismatch';
                        }
                        phrase.rhythmTimes.push({
                            time: scheduledTime,
                            length: l * (gate / 100)
                        });
                        x += 1;
                        phraseTime += l;
                        scheduledTime += l;
                    }
                });
            }
            function getTrackLength() {
                var i = 0;
                Object.keys(self.items).forEach(function (item) {
                    i = add(i, self.items[item].msLength);
                });
                return i;
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
            function getParamsAt(pos) {
                var r, lx, ly, y, x, phrase, keys = Object.keys(self.items);
                for (y = 0, ly = keys.length; y < ly; y += 1) {
                    phrase = self.items[keys[y]];
                    if (phrase.msTime <= pos
                            && phrase.msTime + phrase.msLength >= pos) {
                        for (x = 0, lx = phrase.rhythmTimes.length; x < lx; x += 1) {
                            r = phrase.rhythmTimes[x];
                            if (r.time === pos) {
                                return phrase;
                            }
                        }
                    }
                }
            }
            function updatePlaybackUI(phrase, pos, trackLength, intervals, intervalIndex, noteLength, midiNoteValue, velocity) {
                var i = getById(phrase.track.id + 'info'),
                    pi = getById(phrase.id + 'info'),
                    phrasePct = (pos / trackLength) * 100,
                    trackPct = ((pos - phrase.msTime) / phrase.msLength) * 100;
                if (phrase.timeMismatch === 'mismatch') {
                    i.classList.add('seq-track-mismatch');
                    pi.classList.add('seq-phrase-mismatch');
                } else {
                    pi.classList.remove('seq-phrase-mismatch');
                }
                i.innerHTML = intervals.map(function (v, i) {
                    if (i === intervalIndex) {
                        return '<b>' + v + '</b>';
                    }
                    return v;
                }).join(', ');
                phrase.track.pianoInput.keys[midiNoteValue - 24].highlight(velocity);
                phrase.highlight();
                setTimeout(function () {
                    phrase.track.pianoInput.keys[midiNoteValue - 24].unhighlight();
                    phrase.unhighlight();
                }, noteLength - 10);
            }
            function resetIndexes() {
                Object.keys(self.items).forEach(function (item) {
                    self.items[item].index = 0;
                    self.items[item].indexRest = 0;
                    self.items[item].indexNote = 0;
                    self.items[item].indexStep = 0;
                });
            }
            self.schedule = function () {
                // this function is the main timing/scheduling function
                // this function calls updateRhythmTimes to get times to be played
                // it figures out if a given time will be played by invoking getParamsAt()
                var tie, trill, pos, phrase, rest, rMod, vMod, ly, y, x, lx, style, interval,
                    stepStyle, intervals, rhythmStrings, rhythmString, velocities, chord, intervalIndex,
                    key, transpose, step, midiNoteValue;
                while (time < performance.now() + queueLength && playing) {
                    pos = time % trackLength;
                    phrase = getParamsAt(pos);
                    if (phrase) {
                        key = parseInt(phrase.key, 10);
                        step = parseInt(phrase.step, 10);
                        transpose = parseInt(phrase.transpose, 10);
                        chord = JSON.parse('{"n":[' + phrase.chords + ']}').n;
                        intervals = getIntervals(phrase);
                        rhythmStrings = phrase.rhythm.split(',');
                        velocities = phrase.velocities.split(',').map(numMap);
                        rMod = phrase.index % phrase.rhythmTimes.length;
                        vMod = phrase.index % velocities.length;
                        rhythmString = rhythmStrings[phrase.indexRest % rhythmStrings.length];
                        x = phrase.index % chord.length;
                        rest = /r/.test(rhythmString);
                        trill = /!/.test(rhythmString);
                        style = phrase.styleFn(phrase);
                        if (style.end) {
                            console.log('end');
                            if (step === 0) {
                                intervals = getIntervals(phrase);
                                phrase.indexStep = 0;
                            } else {
                                stepStyle = phrase.stepStyleFn(phrase);
                                if (stepStyle.end) {
                                    for (x = 0; x < stepStyle.number; x += 1) {
                                        intervals.push(intervals.shift() + 12);
                                    }
                                } else {
                                    for (x = 0; x < Math.abs(stepStyle.number); x += 1) {
                                        intervals.unshift(intervals.pop() - 12);
                                    }
                                }
                            }
                        }
                        if (rest) {
                            console.log('rest');
                            phrase.index -= 1;
                            phrase.indexNote  -= 1;
                            phrase.indexStep  -= 1;
                        } else {
                            for (y = 0, ly = chord[phrase.index % chord.length].length; y < ly; y += 1) {
                                intervalIndex = (style.number + chord[x][y] - 1) % intervals.length;
                                interval = intervals[intervalIndex];
                                midiNoteValue = transpose + key + interval;
                                scheduleNote(
                                    midiNoteValue,
                                    phrase.velocities[vMod],
                                    time,
                                    phrase.rhythmTimes[rMod].length
                                );
                            }
                            setTimeout(
                                updatePlaybackUI,
                                time - performance.now(),
                                phrase,
                                pos,
                                trackLength,
                                intervals,
                                intervalIndex,
                                phrase.rhythmTimes[rMod].length,
                                midiNoteValue,
                                phrase.velocities[vMod]
                            );
                        }
                        phrase.index += 1;
                        phrase.indexRest += 1;
                        phrase.indexNote += 1;
                    }
                    time = add(time, atom);
                }
            };
            self.play = function () {
                // the order of these methods is crucial 
                updateRhythmTimes();
                time = quantizedStart();
                trackLength = getTrackLength();
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
            function trackInit() {
                tracks[self.id] = self;
                if (trackArgs.items) {
                    Object.keys(trackArgs.items).forEach(function (itemKey) {
                        var temp,
                            item = trackArgs.items[itemKey];
                        // use the serailizer to clone the item vars
                        // prevent the cicular refrence from the track ref
                        temp = item.track;
                        item.track = undefined;
                        self.createPhrase(JSON.parse(JSON.stringify(item)));
                        item.track = temp;
                    });
                }
                ui.redraw();
            }
            trackInit();
            return self;
        }
        function createInputs(e, args, ctrlType) {
            Object.keys(args).forEach(function (key) {
                var v, c, label, input;
                function bindData() {
                    input.innerHTML = scalesSelect.innerHTML;
                    input.removeEventListener('mousedown', bindData);
                }
                function update(value) {
                    args[key] = value === undefined ? input.value : value;
                    pauseAll();
                    playAll();
                }
                if (!noEditInputs.test(key)) {
                    v = ctrlType === 'phrase' ? itemParams[key] : trackParams[key];
                    c = ce('div', e, 'seq-input-continer', undefined, args.id + 'continer' + key);
                    if (key === 'deviceId') {
                        args[key] = Object.keys(pipes.outputs)[0];
                    }
                    label = ce('label', c, 'seq-input-label', key, args.id + 'label' + key);
                    if (key === 'scales') {
                        input = ce('select', c, 'seq-input', key, args.id + 'input' + key);
                        input.value = defaultScale;
                        input.addEventListener('mousedown', bindData);
                        input.addEventListener('change', function () {
                            args.intervals = this.value;
                            getById(args.id + 'inputintervals').value = this.value;
                            getById(args.id + 'inputintervals').change();
                        });
                        input.className = 'seq-input';
                        if (!input.parentNode) {
                            c.appendChild(input);
                        }
                        input.value = v;
                    } else {
                        input = ce('input', c, 'seq-input', key, args.id + 'input' + key);
                        label.setAttribute('for',  args.id + 'input' + key);
                    }
                    // post input creation
                    if (key === 'intervals') {
                        input.change = function () {
                            args.intervals = this.value;
                            getById(args.id + 'info').innerHTML = formatPhraseInfo(args);
                        };
                        input.addEventListener('change', input.change);
                    }
                    input.update = update;
                    input.addEventListener('change', function () {
                        update();
                    });
                    input.value = args[key] || v;
                }
            });
        }
        function saveSet() {
            var errMsg = 'ENTER A NAME HERE',
                setsString = localStorage.getItem('chord-lord-seq-sets') || '{}',
                name = getById('name'),
                sets = JSON.parse(setsString);
            if (name.value.length === 0 || name.value === errMsg) {
                name.value = errMsg;
                return;
            }
            sets[name.value] = {
                tempo: getById('tempo').value,
                timeSignature: [getById('timesigTop').value,
                    getById('timesigBottom').value,
                    ],
                tracks: tracks
            };
            localStorage.setItem('chord-lord-seq-sets', JSON.stringify(sets));
            refreshSetSelect();
        }
        function loadSetFromSelect() {
            stopAll();
            var data,
                loadSelect = getById('loadSelect'),
                setsString = localStorage.getItem('chord-lord-seq-sets'),
                targetName,
                targetSet;
            // I am so lazy, this should be a for loop at the very least
            // LAZY is that a thing?
            if (setsString && loadSelect.value) {
                data = JSON.parse(setsString);
                Object.keys(data).forEach(function (name) {
                    if (loadSelect.value === name) {
                        targetName = name;
                        targetSet = data[name];
                    }
                });
            }
            getById('name').value = targetName;
            getById('tempo').value = targetSet.tempo;
            getById('timesigTop').value = targetSet.timeSignature[0];
            getById('timesigBottom').value = targetSet.timeSignature[1];
            Object.keys(targetSet.tracks).forEach(function (trackKey) {
                createTrack({
                    items: targetSet.tracks[trackKey].items
                });
            });
            ui.redraw();
        }
        function clearAll() {
            getById('tempo').value = '120';
            getById('timesigTop').value = '4';
            getById('timesigBottom').value = '4';
            tracks = {};
            ui.redraw();
        }
        function refreshSetSelect() {
            var data,
                loadSelect = getById('loadSelect'),
                setsString = localStorage.getItem('chord-lord-seq-sets');
            if (setsString) {
                data = JSON.parse(setsString);
                Object.keys(data).forEach(function (name) {
                    var set = data[name],
                        o = document.createElement('option');
                    o.innerHTML = name;
                    o.value = name;
                    loadSelect.appendChild(o);
                });
            }
        }
        function createUI() {
            var container = ce('div', parentNode, 'seq-list', undefined, 'phraseList');
            function redraw() {
                var trackAdd, play, pause, stop, tempoInput, timesigTop, timesigBottom,
                    newSet, pianoViewState = true, trackViewState = false, save, load;
                newSet = ce('button', container, 'seq-track-new', 'New', 'newSet', 'Create New Set');
                trackAdd = ce('button', container, 'seq-track-add', 'Add', 'addTrack', 'Add Track');
                play = ce('button', container, 'seq-track-play', '►', 'playTrack', 'Play');
                pause = ce('button', container, 'seq-track-pause', '❙❙', 'pauseTrack', 'Pause');
                stop = ce('button', container, 'seq-track-stop', '■', 'stopTrack', 'Stop');
                save = ce('button', container, 'seq-track-save', 'Save', 'save', 'Save Set');
                load = ce('button', container, 'seq-track-load', 'Load', 'load', 'Load Set');
                ce('input', container, 'seq-track-name', 'Name', 'name', 'Name');
                tempoInput = ce('input', container, 'seq-track-tempo', undefined, 'tempo', 'Tempo');
                timesigTop = ce('input', container, 'seq-track-timesig-top', undefined, 'timesigTop', 'Beats');
                timesigBottom = ce('input', container, 'seq-track-timesig-bottom', undefined, 'timesigBottom', 'Value');
                ce('select', container, 'seq-track-load-select', 'Load', 'loadSelect', 'Select set to load');
                refreshSetSelect();
                tempoInput.value = tempo;
                timesigTop.value = timeSignature[0];
                timesigBottom.value = timeSignature[1];
                load.addEventListener('click', loadSetFromSelect);
                save.addEventListener('click', saveSet);
                newSet.addEventListener('click', clearAll);
                Object.keys(tracks).forEach(function (tracksKey) {
                    var t = tracks[tracksKey],
                        track = ce('div', container, 'seq-track', undefined, t.id + 'track'),
                        trackControl = ce('div', container, 'seq-track-control', null, t.id + 'trackcontrol'),
                        pianoContainer,
                        trackPlay,
                        trackPause,
                        togglePiano,
                        trackRemove,
                        trackDuplicate,
                        phraseAdd;
                    ce('div', trackControl, 'seq-track-info', t.info, t.id + 'info');
                    createInputs(trackControl, t, 'track');
                    pianoContainer = ce('div', container, 'seq-track-piano-container', null, t.id + 'pianoContainer');
                    trackPlay = ce('button', trackControl, 'seq-track-play', '►',  t.id + 'trackPlay', 'Play Track');
                    trackPause = ce('button', trackControl, 'seq-track-pause', '❙❙',  t.id + 'trackPause', 'Pause Track');
                    togglePiano = ce('button', trackControl, 'seq-track-piano-toggle', 'Piano',  t.id + 'pianoToggle', 'Toggle Piano');
                    trackRemove = ce('button', trackControl, 'seq-track-delete', 'Remove',  t.id + 'trackRemove', 'Remove');
                    trackDuplicate = ce('button', trackControl, 'seq-track-duplicate', 'Duplicate', t.id + 'tracktrackDuplicate');
                    phraseAdd = ce('button', trackControl, 'seq-phrase-add', 'Add', t.id + 'phraseadd', 'Add Phrase');
                    if (!t.pianoInput) {
                        t.pianoInput = piano({
                            parentNode: pianoContainer,
                            range: 8
                        });
                    }
                    phraseAdd.onclick = function () {
                        t.createPhrase();
                        redraw();
                    };
                    track.addEventListener('click', function () {
                        if (trackViewState) {
                            trackViewState = false;
                            track.classList.remove('seq-track-open');
                        } else {
                            trackViewState = true;
                            track.classList.add('seq-track-open');
                        }
                    }, false);
                    document.body.addEventListener('click', function () {
                        trackViewState = false;
                        track.classList.remove('seq-track-open');
                    }, true);
                    togglePiano.onclick = function () {
                        if (pianoViewState) {
                            pianoViewState = false;
                            pianoContainer.style.height = '0px';
                        } else {
                            pianoViewState = true;
                            pianoContainer.style.height = '200px';
                        }
                    };
                    trackPlay.onclick = function () {
                        t.play();
                    };
                    trackPause.onclick = function () {
                        t.pause();
                    };
                    trackRemove.onclick = function () {
                        console.log('no workey');
                    };
                    trackDuplicate.onclick = function () {
                        createTrack(t);
                    };
                    Object.keys(t.items).forEach(function (phraseKey) {
                        var phrase, phraseContainer, phraseDuplicate, phraseMoveUp, phraseMoveDown, phraseRemove;
                        phrase = t.items[phraseKey];
                        phraseContainer = ce('div', track, 'seq-phrase', undefined, phrase.id + 'phraseitem');
                        phraseRemove = ce('button', phraseContainer, 'seq-phrase-remove', 'Remove', phrase.id + 'phraseRemove', 'Remove Phrase');
                        phraseDuplicate = ce('button', phraseContainer, 'seq-phrase-duplicate', 'Duplicate', phrase.id + 'phraseDuplicate', 'Duplicate Phrase');
                        phraseMoveUp = ce('button', phraseContainer, 'seq-phrase-moveup', '→', phrase.id + 'phraseUp', 'Move Up');
                        phraseMoveDown = ce('button', phraseContainer, 'seq-phrase-movedown', '←', phrase.id + 'phraseDown', 'Move Down');
                        ce('span', phraseContainer, 'seq-phrase-info', formatPhraseInfo(phrase), phrase.id + 'info');
                        createInputs(phraseContainer, phrase, 'phrase');
                        phraseContainer.addEventListener('click', function (e) {
                            if (trackViewState) {
                                e.stopPropagation();
                            }
                        }, true);
                        phraseMoveDown.onclick = function () {
                            console.log('no workey');
                        };
                        phraseMoveUp.onclick = function () {
                            console.log('no workey');
                        };
                        phraseRemove.onclick = function () {
                            phrase.remove();
                            phraseContainer.parentNode.removeChild(phraseContainer);
                        };
                        phraseDuplicate.onclick = function () {
                            t.createPhrase(phrase);
                            redraw();
                        };
                        phrase.highlight = function () {
                            phraseContainer.classList.add('seq-phrase-highlight');
                        };
                        phrase.unhighlight = function () {
                            phraseContainer.classList.remove('seq-phrase-highlight');
                        };
                    });
                });
                trackAdd.onclick = function () {
                    createTrack();
                    redraw();
                };
                play.onclick = function () {
                    playAll();
                };
                pause.onclick = function () {
                    pauseAll();
                };
                stop.onclick = function () {
                    stopAll();
                };
            }
            return {
                redraw: redraw
            };
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
        styles.Up = function (intervals, offset) {
            var count = -1 + offset;
            return function () {
                count += 1;
                return {
                    number: count,
                    end: count % intervals.length === 0 && count > 0
                };
            };
        };
        styles.Down = function (intervals, offset) {
            var count = offset;
            return function () {
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
                };
            };
        };
        styles['Up Down'] = function (intervals, offset) {
            var up = true,
                end,
                count = offset;
            return function () {
                end = false;
                if (count === intervals.length - 1) {
                    end = true;
                    up = false;
                }
                if (count === 0) {
                    up = true;
                }
                if (up) {
                    count += 1;
                    return {
                        number: count,
                        end: end
                    };
                }
                count -= 1;
                return {
                    number: count,
                    end: end
                };
            };
        };
        styles['Down Up'] = function (intervals, offset) {
            var up,
                end,
                count = intervals.length + offset;
            return function () {
                if (count === intervals.length - 1) {
                    end = true;
                    up = false;
                }
                if (count === 0) {
                    up = true;
                }
                if (up) {
                    count += 1;
                    return {
                        number: count,
                        end: end
                    };
                }
                count -= 1;
                return {
                    number: count,
                    end: end
                };
            };
        };
        styles["3rds Cycle"] = function (intervals, offset) {
            var count = offset;
            return function () {
                count += 2;
                return {
                    number: count,
                    end: count % intervals.length
                };
            };
        };
        styles["4ths Cycle"] = function (intervals, offset) {
            var count = offset;
            return function () {
                count += 3;
                return {
                    number: count,
                    end: count % intervals.length
                };
            };
        };
        styles["5ths Cycle"] = function (intervals, offset) {
            var count = offset;
            return function () {
                count += 4;
                return {
                    number: count,
                    end: count % intervals.length
                };
            };
        };
        styles["6ths Cycle"] = function (intervals, offset) {
            var count = offset;
            return function () {
                count += 5;
                return {
                    number: count,
                    end: count % intervals.length
                };
            };
        };
        styles["3rds Sequence"] = function (intervals, offset) {
            var count = offset,
                a = createOffsetArray(2, intervals.length * 2);
            return function () {
                count += 1;
                var i = a[count % a.length];
                if (count === Math.floor(intervals.length + (intervals.length * 0.5))) {
                    count = 0;
                }
                return {
                    number: i,
                    end: i % (intervals.length * 2)
                };
            };
        };
        styles["4ths Sequence"] = function (intervals, offset) {
            var count = offset,
                a = createOffsetArray(3, intervals.length * 3);
            return function () {
                count += 1;
                var i = a[count % a.length];
                if (count === Math.floor(intervals.length + (intervals.length * 0.33333333))) {
                    count = 0;
                }
                return {
                    number: i,
                    end: i % (intervals.length * 3)
                };
            };
        };
        styles["5ths Sequence"] = function (intervals, offset) {
            var count = offset,
                a = createOffsetArray(4, intervals.length * 4);
            return function () {
                count += 1;
                var i = a[count % a.length];
                if (count === Math.floor(intervals.length + (intervals.length * 0.25))) {
                    count = 0;
                }
                return {
                    number: i,
                    end: i % (intervals.length * 4)
                };
            };
        };
        styles["6ths"] = function (intervals, offset) {
            var count = offset,
                a = createOffsetArray(5, intervals.length * 5);
            return function () {
                count += 1;
                var i = a[count % a.length];
                if (count === Math.floor(intervals.length + (intervals.length * 0.1725))) {
                    count = 0;
                }
                return {
                    number: i,
                    end: i % (intervals.length * 5)
                };
            };
        };
        function init() {
            idPrefix = cid();
            timer = new Worker("js/seqTimer.js");
            timer.postMessage(250);
            timer.onmessage = function (e) {
                Object.keys(tracks).forEach(function (tracksKey) {
                    tracks[tracksKey].schedule(e);
                });
            };
            createScaleSelectArray();
            ui = createUI();
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
                        // if (pipe === 'inputs') {
                        //     i.value.onmidimessage = readMidiMessage(i, pipe);
                        // }
                    }
                }
            }
            ['inputs', 'outputs'].forEach(getPipes);
            requestAnimationFrame(init);
        });
    }
    sequencer({
        parentNode: document.body
    });
});