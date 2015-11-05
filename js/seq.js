/*jslint browser: true, plusplus: true, unparam: false*/
/*globals Worker: false, setList: false, performance: false, define:false */
define(['setList', 'piano', 'main', '12tone', 'midi'], function (setListObject, piano, main, tt, midi) {
    'use strict';
    function sequencer(mainArgs) {
        var atom,
            bar,
            beat,
            setList = setListObject.list,
            quantizeTime = 'q',
            defaultScale = '0,3,4,6,7,9,11',
            idPrefix,
            mag = 10000,
            tempo = 120,
            midiMiddleC = 60,
            trackLength,
            rhythmPatterns = {
                "Breakbeat 4/4 1/1": "e,e,e,s,s,s,s,e,e,s,s",
                "Almost a march 4/4 1/1": "q,e,s,s,q,e,s,s",
                "Skittles a 4/4 1/1": "q,s,e.,q,s,e.",
                "Skittles b 4/4 1/1": "q,s,e.,q,s,e,s",
                "Terminator": "s,e,s,sr,s,e",
                "Fake Triplet": "q.q.q"
            },
            timeSignature = [4, 4],
            timings = midi.timings,
            noEditInputs = /^(phraseTime|phraseCounter|pianoInput|index\S*|timeMismatch|stop|remove|items|id|play|createPhrase|pause|schedule|rhythmTimes|unhighlight|highlight|msTime|msLength)$/,
            //noEditInputs = /blah/,
            scalesSelect,
            ui,
            pipes,
            parentNode = mainArgs.parentNode,
            elements = {},
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
                indexNote: '-1',
                indexStep: '0',
                transpose: midiMiddleC.toString(),
                scales: 'Harmonic Minor',
                intervals: defaultScale,
                rhythm: 'q',
                chords: '[1]',
                velocities: '64',
                style: 'Up',
                step: '1',
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
                    id: cid(),
                    phraseTime: 0,
                    phraseCounter: 0
                },
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
                startTime = startTime - (startTime % q) + q;
                return startTime;
            }
            function createStyles() {
                var styles = {};
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
                styles.Up = function (offset, mod) {
                    var count = -1 + offset;
                    return function (args) {
                        count += 1;
                        return {
                            index: count % mod,
                            end: count % mod === 0 && count > 0
                        };
                    };
                };
                styles.Down = function (offset, mod) {
                    var count = offset;
                    return function (args) {
                        if (count % mod === 0) {
                            count = mod - 1;
                            return {
                                index: count % mod,
                                end: true
                            };
                        }
                        count += (mod - 1);
                        return {
                            index: count % mod,
                            end: false
                        };
                    };
                };
                styles['Up Down'] = function (offset, mod) {
                    var up = true,
                        first = true,
                        end,
                        count = offset;
                    return function (args) {
                        end = false;
                        if (count === mod - 1) {
                            up = false;
                            first = true;
                        }
                        if (count === 0) {
                            if (!first) {
                                end = true;
                            }
                            first = false;
                            up = true;
                        }
                        if (up) {
                            return {
                                index: ++count,
                                end: end
                            };
                        }
                        return {
                            index: --count,
                            end: end
                        };
                    };
                };
                styles['Down Up'] = function (offset, mod) {
                    var up,
                        end,
                        count = mod + offset;
                    return function (args) {
                        if (count === mod - 1) {
                            end = true;
                            up = false;
                        }
                        if (count === 0) {
                            up = true;
                        }
                        if (up) {
                            return {
                                index: ++count % mod,
                                end: end
                            };
                        }
                        return {
                            index: --count % mod,
                            end: end
                        };
                    };
                };
                styles["3rds Cycle"] = function (offset, mod) {
                    var count = offset;
                    return function (args) {
                        count += 2;
                        return {
                            index: count % mod,
                            end: count % mod
                        };
                    };
                };
                styles["4ths Cycle"] = function (offset, mod) {
                    var count = offset;
                    return function (args) {
                        count += 3;
                        return {
                            index: count % mod,
                            end: count % mod
                        };
                    };
                };
                styles["5ths Cycle"] = function (offset, mod) {
                    var count = offset;
                    return function (args) {
                        count += 4;
                        return {
                            index: count % mod,
                            end: count % mod
                        };
                    };
                };
                styles["6ths Cycle"] = function (offset, mod) {
                    var count = offset;
                    return function (args) {
                        count += 5;
                        return {
                            index: count % mod,
                            end: count % mod
                        };
                    };
                };
                styles["3rds Sequence"] = function (offset, mod) {
                    var count = offset,
                        a = createOffsetArray(2, mod * 2);
                    return function (args) {
                        var i = a[count++ % a.length];
                        if (count === Math.floor(mod + (mod * 0.5))) {
                            count = 0;
                        }
                        return {
                            index: i,
                            end: i % (mod * 2)
                        };
                    };
                };
                styles["4ths Sequence"] = function (offset, mod) {
                    var count = offset,
                        a = createOffsetArray(3, mod * 3);
                    return function (args) {
                        var i = a[count++ % a.length];
                        if (count === Math.floor(mod + (mod * 0.33333333))) {
                            count = 0;
                        }
                        return {
                            index: i % mod,
                            end: i % (mod * 3)
                        };
                    };
                };
                styles["5ths Sequence"] = function (offset, mod) {
                    var count = offset,
                        a = createOffsetArray(4, mod * 4);
                    return function (args) {
                        var i = a[count++ % a.length];
                        if (count === Math.floor(mod + (mod * 0.25))) {
                            count = 0;
                        }
                        return {
                            index: i % mod,
                            end: i % (mod * 4)
                        };
                    };
                };
                styles["6ths"] = function (offset, mod) {
                    var count = offset,
                        a = createOffsetArray(5, mod * 5);
                    return function (args) {
                        var i = a[count++ % a.length];
                        if (count === Math.floor(mod + (mod * 0.1725))) {
                            count = 0;
                        }
                        return {
                            index: i % mod,
                            end: i % (mod * 5)
                        };
                    };
                };
                return styles;
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
                        gate = phrase.gate.split(',').map(numMap),
                        step = parseInt(phrase.step, 10),
                        chordNames = main.getChordNames(intervals),
                        rhythm = phrase.rhythm.split(',');
                    phrase.rhythmTimes = [];
                    phrase.msTime = scheduledTime;
                    phrase.msLength = toRhythm(phrase.length);
                    phrase.timeMismatch = false;
                    phrase.track = self;
                    phrase.parsedIntervals = getIntervals(phrase);
                    phrase.index = parseInt(phrase.index, 10);
                    phrase.indexRest = parseInt(phrase.indexRest, 10);
                    phrase.indexStep = parseInt(phrase.indexStep, 10);
                    phrase.indexNote = parseInt(phrase.indexNote, 10);
                    phrase.chordNames = chordNames;
                    phrase.noteStyleFn = createStyles()[phrase.style](offset, phrase.parsedIntervals.length);
                    phrase.stepStyleFn = createStyles()[phrase.stepStyle](1, step);
                    phrase.stylePrams = {
                        note: {},
                        step: {}
                    };
                    while (phraseTime < phrase.msLength) {
                        l = toRhythm(rhythm[x % rhythm.length]);
                        if (phraseTime + l > phrase.msLength) {
                            phrase.timeMismatch = true;
                        }
                        phrase.rhythmTimes.push({
                            time: scheduledTime,
                            length: l * (gate[x % gate.length] / 100)
                        });
                        phrase.patternMismatch = x % rhythm.length;
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
                midi.playNote(
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
                        return phrase;
                    }
                }
            }
            function updatePlaybackUI(phrase, pos, trackLength, intervals, intervalIndex, noteLength, midiNoteValue, velocity) {
                var h,
                    i = getById(phrase.track.id + 'info'),
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
                h = phrase.track.pianoInput.keys[midiNoteValue - 24].highlight;
                if (h) {
                    h();
                }
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
                    // this should be -1 so the style counter gives the
                    // first note to index 0
                    self.items[item].indexNote = -1;
                    self.items[item].indexStep = 0;
                });
            }
            function cycleIntervals(intv, num) {
                var x;
                for (x = 0; x < Math.abs(num); x += 1) {
                    if (num > 0) {
                        intv.push(intv.shift() + 12);
                    } else {
                        intv.push(intv.shift() - 12);
                    }
                }
                return intv;
            }
            self.schedule = function () {
                // this function is the main timing/scheduling function
                // this function calls updateRhythmTimes to get times to be played
                // it figures out if a given time will be played by invoking getParamsAt()
                var tie, phrase, trill, pos, rest, rMod, vMod, ly, y, x, lx, style, interval, offset,
                    stepStyle, intervals, rhythmStrings, rhythmString, velocities, chord, intervalIndex,
                    key, transpose, step, midiNoteValue, rhythmLength, originalIntervals,
                    phraseKeys = Object.keys(self.items);
                while (time < performance.now() + queueLength && playing) {
                    pos = time % trackLength;
                    phrase = self.items[phraseKeys[self.phraseCounter % phraseKeys.length]];
                    pos = time % trackLength;
                    key = parseInt(phrase.key, 10);
                    step = parseInt(phrase.step, 10);
                    offset = parseInt(phrase.offset, 10);
                    transpose = parseInt(phrase.transpose, 10);
                    chord = JSON.parse('{"n":[' + phrase.chords + ']}').n;
                    rhythmStrings = phrase.rhythm.split(',');
                    velocities = phrase.velocities.split(',').map(numMap);
                    rMod = phrase.index % phrase.rhythmTimes.length;
                    vMod = phrase.index % velocities.length;
                    rhythmString = rhythmStrings[phrase.indexRest % rhythmStrings.length];
                    rhythmLength = toRhythm(rhythmString);
                    x = phrase.index % chord.length;
                    rest = /r/.test(rhythmString);
                    trill = /!/.test(rhythmString);
                    style = phrase.noteStyleFn();
                    phrase.indexNote = style.index;
                    if (style.end || time === 0) {
                        stepStyle = phrase.stepStyleFn();
                        console.log('step end', stepStyle.end, 'index', stepStyle.index, 'modded', stepStyle.index % phrase.parsedIntervals.length);
                        phrase.parsedIntervals = cycleIntervals(getIntervals(phrase), stepStyle.index % phrase.parsedIntervals.length);
                        if (stepStyle.end) {
                            phrase.parsedIntervals = getIntervals(phrase);
                            console.log('step reset');
                        }
                    }
                    if (rest) {
                        console.log('rest');
                        phrase.index -= 1;
                        phrase.indexNote  -= 1;
                    } else {
                        for (y = 0, ly = chord[phrase.index % chord.length].length; y < ly; y += 1) {
                            intervalIndex = (style.index + chord[x][y] - 1) % phrase.parsedIntervals.length;
                            interval = phrase.parsedIntervals[intervalIndex];
                            midiNoteValue = transpose + key + interval;
                            scheduleNote(
                                midiNoteValue,
                                parseInt(phrase.velocities[vMod], 10),
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
                            phrase.parsedIntervals,
                            intervalIndex,
                            phrase.rhythmTimes[rMod].length,
                            midiNoteValue,
                            phrase.velocities[vMod]
                        );
                    }
                    time = add(time, rhythmLength);
                    self.phraseTime = add(self.phraseTime, rhythmLength);
                    phrase.index += 1;
                    phrase.indexRest += 1;
                    if (self.phraseTime >= phrase.msLength) {
                        self.phraseCounter += 1;
                        self.phraseTime = 0;
                    }
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
                        args[key] = Object.keys(midi.pipes.outputs)[0];
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
                    newSet, pianoViewState, trackViewState, save, load;
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
                timesigTop.addEventListener('update', function () {
                    timeSignature[0] = parseInt(this.value, 10);
                });
                timesigBottom.addEventListener('change', function () {
                    timeSignature[1] = parseInt(this.value, 10);
                });
                tempoInput.addEventListener('change', function () {
                    tempo = parseFloat(this.value, 10);
                });
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
        midi.init(init);
    }
    sequencer({
        parentNode: document.body
    });
});