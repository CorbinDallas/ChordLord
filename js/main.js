/*jslint browser: true*/
/*globals intervals: true, cirlceOfFifths: true, noteNames: true, define */
define(['setList', '12tone', 'combinatorics', 'vexflow-min', 'raphael-min'], function (setListObject, tt, Combinatorics) {
    'use strict';
    Math.TAU = 2 * Math.PI;
    var self = {},
        setList = setListObject.list,
        intervals = tt.intervals,
        cirlceOfFifths = tt.cirlceOfFifths,
        noteNames = tt.noteNames,
        generatedSets = [],
        useColors = false,
        selectedPitchClass = 0,
        colors = [
            '#FF0000',
            '#FF6600',
            '#FF9900',
            '#FFCC00',
            '#FFFF00',
            '#99FF00',
            '#00CC00',
            '#009999',
            '#0033CC',
            '#330099',
            '#660099',
            '#CC0099'
        ],
        intervalKeys = Object.keys(intervals),
        toggledIntervals = {};
    function noSelect(eles) {
        try {
            var x, t = function () { return false; };
            for (x = 0; eles.length > x; x += 1) {
                eles[x].onselectstart = t;
                eles[x].unselectable = "on"; // For IE and Opera
                eles[x].style.userSelect = "none";
                eles[x].style.webkitUserSelect = "none";
                eles[x].style.MozUserSelect = "none";
            }
        } catch (ignore) { }
    }
    function numSort(a, b) {
        return a - b;
    }
    function arraysEqual(a, b, sort) {
        if (a === b) { return true; }
        if (a === null || b === null) { return false; }
        if (a.length !== b.length) { return false; }
        var i,
            aa = a.slice(),
            bb = b.slice();
        if (sort) {
            bb.sort(numSort);
            aa.sort(numSort);
        }
        for (i = 0; i < aa.length; i += 1) {
            if (aa[i] !== bb[i]) {
                return false;
            }
        }
        return true;
    }
    function getSiblings(set) {
        var siblings = [], x, sibling, y, isInList;
        for (x = 0; x < set.length; x += 1) {
            sibling = [];
            for (y = 0; y < set.length; y += 1) {
                sibling.push((set[y] + 12 - set[x]) % 12);
            }
            sibling.sort(numSort);
            isInList = false;
            for (y = 0; y < siblings.length; y += 1) {
                if (arraysEqual(siblings[y], sibling)) {
                    isInList = true;
                    break;
                }
            }
            if (!isInList) {
                siblings.push(sibling);
            }
        }
        return siblings;
    }
    function generateIntervalCombinations(intervals) {
        var x,
            a,
            cmb,
            l = {};
        for (x = 1; x <= intervals.length; x += 1) {
            cmb = Combinatorics.combination(intervals, x);
            //TODO: Make sure modifications work
            do {
                a = cmb.next();
                l[a.length] = l[a.length] || [];
                l[a.length].push(a);
            } while (a);
        }
        return l;
    }
    function getChordFromSet(chord) {
        var setKeys, x, familyKeys, chordKeys, siblings, s, sKeys, i, y, z;
        setKeys = Object.keys(setList);
        for (x = 0; x < setKeys.length; x += 1) {
            familyKeys = Object.keys(setList[setKeys[x]]);
            for (y = 0; y < familyKeys.length; y += 1) {
                chordKeys = Object.keys(setList[setKeys[x]][familyKeys[y]]);
                for (z = 0; z < chordKeys.length; z += 1) {
                    if (arraysEqual(setList[setKeys[x]][familyKeys[y]][chordKeys[z]], chord, true)) {
                        siblings = {};
                        s = setList[setKeys[x]][familyKeys[y]];
                        sKeys = Object.keys(s);
                        for (i = 0; i < sKeys.length; i += 1) {
                            siblings[tt.siblingNames[i]] = s[sKeys[i]].sort(numSort);
                        }
                        return {
                            name: chordKeys[z],
                            chord: chord,
                            set: setKeys[x],
                            family: familyKeys[y],
                            siblings: siblings
                        };
                    }
                }
            }
        }
    }
    self.generateSetList = function () {
        var l = {},
            sl = {},
            a,
            family,
            cmb,
            siblings,
            x,
            y,
            z,
            familyId;
        for (x = 0; x < 12; x += 1) {
            cmb = Combinatorics.combination(tt.pitchClasses, x + 1);
            //TODO: make sure these modifications work
            do {
                a = cmb.next();
                if (a.indexOf(0) !== -1) {
                    l[a.length] = l[a.length] || [];
                    l[a.length].push({set: a.sort(numSort)});
                }
            } while (a);
        }
        familyId = 0;
        for (x = 1; x < 12; x += 1) {
            sl[x] = {};
            sl[x].id = x;
            sl[x].families = [];
            for (y = 0; y < l[x].length; y += 1) {
                if (!l[x][y].used) {
                    familyId += 1;
                    family = {};
                    family.id = familyId;
                    l[x][y].used = true;
                    sl[x].families.push(family);
                    siblings = getSiblings(l[x][y].set);
                    for (z = 0; z < siblings.length; z += 1) {
                        family[tt.siblingNames[z]] = siblings[z];
                        for (a = 0; a < l[x].length; a += 1) {
                            if (arraysEqual(l[x][a].set, siblings[z])) {
                                l[x][a].used = true;
                                l[x][a].setListInfo = getChordFromSet(l[x][a].set);
                                generatedSets.push(l[x][a].setListInfo);
                            }
                        }
                    }
                }
            }
        }
        return sl;
    };
    self.getSelectedIntervalCount = function () {
        var c = 0, z;
        for (z = 0; z < intervalKeys.length; z += 1) {
            if (toggledIntervals[intervalKeys[z]]) {
                c += 1;
            }
        }
        return c;
    };
    self.isAnInterval = function (pitchClass, interval) {
        var z;
        for (z = 0; z < intervalKeys.length; z += 1) {
            if (toggledIntervals[intervalKeys[z]]
                    && interval === (pitchClass + intervals[intervalKeys[z]]) % 12) {
                return true;
            }
        }
        return false;
    };
    self.chordMatch = function chordMatch(chord) {
        var selectedIntervalCount, isMatch, z;
        selectedIntervalCount = self.getSelectedIntervalCount() + 1;
        if (selectedIntervalCount !== chord.length) {
            return false;
        }
        isMatch = true;
        for (z = 1; z < chord.length; z += 1) {
            if (!self.isAnInterval(0, chord[z])) {
                isMatch = false;
            }
        }
        return isMatch;
    };
    self.getGetOrdinal = function (n) {
        var s = ['th', 'st', 'nd', 'rd'],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    self.getAllIntervals = function () {
        var intv = [0], x;
        for (x = 0; x < intervalKeys.length; x += 1) {
            if (toggledIntervals[intervalKeys[x]] === true) {
                intv.push(intervals[intervalKeys[x]]);
            }
        }
        return intv;
    };
    self.getAllXadChords = function (xAd) {
        var matches = [];
        Object.keys(setList[xAd]).map(function (family) {
            Object.keys(setList[xAd][family]).map(function (chord) {
                matches.push({ad: xAd, family: family, name: chord, chord: setList[xAd][family][chord]});
            });
        });
        return matches;
    };
    self.getAllChords = function () {
        var matches = [];
        Object.keys(setList).forEach(function (xAd) {
            matches = matches.concat(self.getAllXadChords(xAd));
        });
        return matches;
    };
    self.isSubsetOf = function (searchFor, searchIn) {
        var isSubset = true, x;
        for (x = 0; x < searchFor.length; x += 1) {
            if (searchIn.indexOf(searchFor[x]) === -1) {
                return false;
            }
        }
        return isSubset;
    };
    self.getXadIntervalMatrix = function (xAd) {
        var intvs = self.getAllIntervals(),
            allChords = self.getAllXadChords(xAd),
            matches = [],
            tInvers;
        //TODO: this might be fucked up
        // check the functionality of the changes here
        intvs.forEach(function (v) {
            tInvers = intvs.map(function (intv) {
                return (intv - v + 12) % 12;
            });
            // loop thru every chord in the xad and see if any match
            allChords.map(function (chordMap) {
                if (self.isSubsetOf(chordMap.chord, tInvers)) {
                    chordMap.interval = v;
                    matches.push(chordMap);
                }
            });
        });
        return matches;
    };
    self.getAllXadIntervalMatrices = function () {
        var chordTypes = Object.keys(setList),
            matches = [],
            x,
            m;
        for (x = 0; x < chordTypes.length; x += 1) {
            m = self.getXadIntervalMatrix(chordTypes[x]);
            if (m.length > 0) {
                matches = matches.concat(m);
            }
        }
        return matches;
    };
    self.getSelectedIntervals = function () {
        var o = [];
        Object.keys(intervalKeys).forEach(function (interval) {
            if (toggledIntervals[intervalKeys[interval]]) {
                o.push(intervals[intervalKeys[interval]]);
            }
        });
        return o;
    };
    self.getChordNames = function (intv) {
        var selectedIntervals = intv || self.getSelectedIntervals(),
            names = [];
        selectedIntervals.sort(numSort);
        if (selectedIntervals[0] !== 0) {
            selectedIntervals.unshift(0);
        }
        Object.keys(setList).forEach(function (xAd) {
            Object.keys(setList[xAd]).forEach(function (family) {
                Object.keys(setList[xAd][family]).forEach(function (siblingKey) {
                    var sibling = setList[xAd][family][siblingKey],
                        v = sibling.set,
                        x;
                    if (v.length !== selectedIntervals.length) {
                        return;
                    }
                    for (x = 0; x < v.length; x += 1) {
                        if (selectedIntervals.indexOf(v[x]) === -1) {
                            return;
                        }
                    }
                    names.push({
                        xAd: xAd,
                        family: family,
                        sibling: sibling
                    });
                });
            });
        });
        return names;
    };
    self.getIntervalValue = function (intervalValue) {
        var x;
        for (x = 0; x < intervalKeys.length; x += 1) {
            if (intervals[intervalKeys[x]] === intervalValue) {
                return intervalKeys[x];
            }
        }
    };
    self.selectAd = function (xad) {
        var x;
        toggledIntervals = {};
        for (x = 0; x < intervalKeys.length; x += 1) {
            if (xad.indexOf(intervals[intervalKeys[x]]) !== -1) {
                toggledIntervals[intervalKeys[x]] = true;
            }
        }
    };
    self.createSeptadsList = function () {
        var ele = document.createElement('div');
        tt.families.forEach(function (family) {
            var fam = document.createElement('div'),
                title = document.createElement('div'),
                body = document.createElement('div');
            fam.className = 'family';
            title.className = 'familyTitle';
            title.innerHTML = family.name;
            fam.appendChild(title);
            title.toggle = false;
            title.addEventListener('click', function () {
                title.toggle = !title.toggle;
                if (title.toggle) {
                    body.style.display = 'inherit';
                } else {
                    body.style.display = 'none';
                }
            });
            fam.appendChild(body);
            ele.appendChild(fam);
            body.style.display = 'none';
            family.scales.forEach(function (s) {
                var scale = document.createElement('button');
                scale.innerHTML = s.name + '<br>' + s.set.join(',');
                scale.onclick = function () {
                    self.selectAd(s.set);
                };
                body.appendChild(scale);
            });
        });
        return ele;
    };
    function invert(i) {
        return i > 6 ? 11 - i + 1 : i;
    }
    self.getMatrixFromIntervals = function (intv) {
        var matrix = [0, 0, 0, 0, 0, 0],
            x,
            y,
            s = [];
        for (x = 0; x < intervalKeys.length; x += 1) {
            if (intv.indexOf(intervals[intervalKeys[x]]) !== -1) {
                matrix[invert(intervals[intervalKeys[x]]) - 1] += 1;
                s.push(intervals[intervalKeys[x]]);
            }
        }
        for (x = 0; x < s.length; x += 1) {
            for (y = 0; y < s.length; y += 1) {
                if (x !== y) {
                    matrix[invert(Math.abs(s[x] - s[y])) - 1] += 0.5;
                }
            }
        }
        return matrix;
    };
    //TODO: change to getFamilyIndex later
    self.getFamilyName = function (chord) {
        var x, y, familyKeys, setKeys = Object.keys(setList);
        for (x = 0; x < setKeys.length; x += 1) {
            familyKeys = Object.keys(setList[setKeys[x]]);
            for (y = 0; y < familyKeys.length; y += 1) {
                if (arraysEqual(setList[setKeys[x]][familyKeys[y]], chord)) {
                    return familyKeys[y];
                }
            }
        }
    };
    self.denormalizeChord = function (c, targetIndex) {
        var x, chord = c.slice();
        while (chord[0] !== targetIndex) {
            for (x = 0; x < chord.length; x += 1) {
                chord[x] += 1;
            }
        }
        return chord;
    };
    self.normalizeChord = function (c) {
        var x, chord = c.slice();
        while (chord[0] % 12 !== 0) {
            for (x = 0; x < chord.length; x += 1) {
                chord[x] += 1;
            }
        }
        return chord.map(function (i) {
            return i % 12;
        });
    };
    self.getTransposedSiblingA = function (invs, siblings) {
        var c = invs.slice(),
            count = 0,
            n;
        while (true) {
            n = self.normalizeChord(c);
            if (arraysEqual(n, siblings.a)) {
                return c;
            }
            c.unshift(c.pop());
            count += 1;
            if (count > 15) {
                throw new Error('cant find sibling' + invs.join(','));
            }
        }
    };
    self.updateXadMatrix = function (parentNode) {
        var content = document.createElement('div'),
            body = document.createElement('div'),
            tabs = [],
            selectedTab = null,
            selectedIntervals = self.getSelectedIntervals(),
            combos,
            x,
            v,
            m;
        selectedIntervals.unshift(0);
        combos = generateIntervalCombinations(selectedIntervals);
        content.className = 'xad-tab-container';
        for (x = 1; x < 13; x += 1) {
            (function (x) {
                var t, b, y, normalizedChord, i;
                t = document.createElement('div');
                b = document.createElement('div');
                tabs.push(t);
                t.innerHTML = x;
                content.appendChild(t);
                t.onclick = function () {
                    if (selectedTab) {
                        body.removeChild(body.firstChild);
                    }
                    selectedTab = t;
                    tabs.forEach(function (a) {
                        a.className = 'xad-tab';
                    });
                    t.className = 'xad-tab xad-selected-tab';
                    body.appendChild(b);
                    // select the first one by default
                    b.className = 'xad-body';
                    v = combos[x.toString()];
                    m = {};
                    b.innerHTML = '';
                    if (v) {
                        for (y = 0; y < v.length; y += 1) {
                            normalizedChord = self.normalizeChord(v[y]);
                            i = getChordFromSet(normalizedChord);
                            if (i === undefined) {
                                throw new Error(normalizedChord.join() +
                                    ' cannot be found in the set list');
                            }
                            i.intervals = v[y];
                            i.normalizeChord = normalizedChord;
                            i.notes = self.getTransposedSiblingA(i.intervals, i.siblings).map(function (n) {
                                var p = (n + selectedPitchClass) % 12;
                                return noteNames[p] + '<sup>' + p + '</sup>';
                            });
                            m[i.family] = m[i.family] || [];
                            m[i.family].push(i);
                        }
                        var stripe = 0;
                        b.innerHTML = '<table>' + Object.keys(m).map(function (i) {
                            stripe += 1;
                            return '<tr ' + (stripe % 2 === 0 ? 'class="even-row" ' : '') +
                                '><th rowspan="' + (m[i].length + 1) +
                                '">' + i + '</th></tr>' +
                                m[i].map(function (n) {
                                    return '<tr><td>' +
                                        n.notes.join('&nbsp;&nbsp;') + '</td></tr>';
                                }).join('');
                        }).join('') + '</table>';
                    }
                };
            }(x));
        }
        tabs[0].onclick();
        content.appendChild(body);
        parentNode.appendChild(content);
    };
    self.getCategoryName = function () {
        var selectedIntervals = self.getSelectedIntervals();
        console.log(selectedIntervals);
    };
    self.updateIntervalMatrix = function (parentNode) {
        var x,
            i = parentNode,
            intv = [];
        for (x = 0; x < intervalKeys.length; x += 1) {
            if (toggledIntervals[intervalKeys[x]] === true) {
                intv.push(intervals[intervalKeys[x]]);
            }
        }
        i.innerHTML = '<table class="intervalVector"><tr><th>Interval Class</th><th>1</th><th>2</th>' +
            '<th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td></td>' +
            self.getMatrixFromIntervals(intv)
            .map(function (m) { return '<td>' + m + '</td>'; }).join('') +
            '</tr></table>';
    };
    self.drawPitchClassTab = function (pitchClass, parentNode) {
        // Get the rendering context
        var w = document.documentElement.clientWidth - 30,
            canvas = document.createElement('canvas'),
            renderer,
            ctx,
            tabstave,
            notes,
            x,
            positions,
            y,
            n,
            interval,
            z,
            maxFret = 25;
        canvas.height = 200;
        canvas.width = w;
        parentNode.appendChild(canvas);
        renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
        ctx = renderer.getContext();
        ctx.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
        // Create and draw the tablature stave
        tabstave = new Vex.Flow.TabStave(10, 0, w);
        tabstave.addTabGlyph();
        tabstave.setContext(ctx).draw();
        // Create some notes
        notes = [];
        for (x = 0; x < maxFret; x += 1) {
            positions = [];
            for (y = 0; y < tt.tunings.guitarStandard.length; y += 1) {
                n = [];
                interval = (x + tt.tunings.guitarStandard[y]) % 12;
                if (interval === pitchClass) {
                    n.push(interval);
                }
                // add selected intervals
                for (z = 0; z < intervalKeys.length; z += 1) {
                    if (toggledIntervals[intervalKeys[z]]) {
                        n.push((pitchClass + intervals[intervalKeys[z]]) % 12);
                    }
                }
                if (n.indexOf(interval) !== -1) {
                    positions.push({str: y + 1, fret: x});
                }
            }
            if (positions.length > 0) {
                notes.push(new Vex.Flow.TabNote({
                    positions: positions,
                    duration: "q"
                }));
            }
        }
        Vex.Flow.Formatter.FormatAndDraw(ctx, tabstave, notes);
    };
    self.selectInterval = function selectInterval(interval, select) {
        toggledIntervals[interval] = !toggledIntervals[interval];
        if (select === true || select === false) {
            toggledIntervals[interval] = select;
        }
    };
    self.drawFretboard = function drawFretboard(args) {
        var table = document.createElement('table'),
            pitchClass = args.pitchClass,
            parentNode = args.parentNode,
            cellClick = args.cellClick,
            maxFret = args.maxFret,
            y,
            x,
            row,
            td,
            n,
            z,
            i;
        parentNode.className = 'fretboard';
        for (y = -1; y < tt.tunings.guitarStandard.length; y += 1) {
            row = document.createElement('tr');
            table.appendChild(row);
            for (x = 0; x < maxFret; x += 1) {
                (function (x, y) {
                    n = [];
                    td = document.createElement('td');
                    row.appendChild(td);
                    if (y === -1) {
                        td.className = 'fretboard-title';
                        td.innerHTML = x;
                        return;
                    }
                    var interval = (x + tt.tunings.guitarStandard[y]) % 12;
                    if (interval === pitchClass) {
                        n.push(interval);
                    }
                    // add selected intervals
                    for (z = 0; z < intervalKeys.length; z += 1) {
                        if (toggledIntervals[intervalKeys[z]]) {
                            n.push((pitchClass + intervals[intervalKeys[z]]) % 12);
                        }
                    }
                    if (interval === 0) {
                        td.className = 'fretboard-note fretboard-note-root';
                    } else if (n.indexOf(interval) !== -1) {
                        td.className = 'fretboard-note fretboard-note-selected';
                    } else {
                        td.className = 'fretboard-note';
                    }
                    i = (interval + pitchClass + 12) % 12;
                    td.innerHTML = '<div>' + noteNames[i] + '</div>';
                    function click(e) {
                        e.preventDefault();
                        if (cellClick) {
                            cellClick.apply(this, [i, x, y, e]);
                        } else {
                            self.selectInterval(self.getIntervalValue(i));
                        }
                        return false;
                    }
                    td.addEventListener('contextmenu', click);
                    td.addEventListener('click', click);
                    noSelect([td]);
                }(x, y));
            }
        }
        parentNode.appendChild(table);
    };
    self.drawPitchClassStaff = function (pitchClass, parentNode) {
        var canvas = document.createElement('canvas'),
            w = document.documentElement.clientWidth - 30,
            renderer,
            ctx,
            stave,
            notes,
            voice,
            formatter,
            z;
        canvas.height = 100;
        canvas.width = w;
        parentNode.appendChild(canvas);
        renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
        ctx = renderer.getContext();
        stave = new Vex.Flow.Stave(10, 0, w);
        stave.addClef("treble").setContext(ctx).draw();
        notes = [];
        function addNote(i) {
            var noteName = noteNames[i],
                staveNote = new Vex.Flow.StaveNote({
                    keys: [ noteName + '/4' ],
                    duration: 'w'
                });
            if (noteName.length > 1) {
                staveNote = staveNote.addAccidental(0, new Vex.Flow.Accidental('b'));
            }
            notes.push(staveNote);
        }
        addNote(pitchClass);
        // add selected intervals
        for (z = 0; z < intervalKeys.length; z += 1) {
            if (toggledIntervals[intervalKeys[z]]) {
                addNote((pitchClass + intervals[intervalKeys[z]]) % 12);
            }
        }
        // Create a voice in 4/4
        voice = new Vex.Flow.Voice({
            num_beats: 4 * notes.length,
            beat_value: 4,
            resolution: Vex.Flow.RESOLUTION
        });
        // Add notes to voice
        voice.addTickables(notes);
        formatter = new Vex.Flow.Formatter().
            joinVoices([voice]).format([voice], 500);
        // Render voice
        voice.draw(ctx, stave);
    };
    self.drawCircle = function (parentNode, list, pitchClass) {
        var objectSize = 200,
            height = objectSize,
            width = objectSize,
            radius = objectSize * 0.486,
            circlePadding = radius * 0.225,
            noteCircle = radius * 0.1833,
            paper = Raphael(parentNode, width, height),
            circleX = height / 2,
            circleY = width / 2,
            circle = paper.circle(circleX, circleY, radius),
            z,
            x;
        noSelect([parentNode]);
        circle.attr("stroke-width", "3");
        circle.attr("fill", "#FFF");
        circle.attr("stroke", "#000");
        function drawAtPct(pct, thisPitch) {
            var armRadians = (Math.TAU * pct) - (Math.TAU / 4),
                targetX = circleX + Math.cos(armRadians) * (radius - circlePadding),
                targetY = circleY + Math.sin(armRadians) * (radius - circlePadding),
                p = paper.path('M' + circleX + ',' + circleY + 'L' + targetX + ',' + targetY),
                thisColor = useColors ? colors[cirlceOfFifths[thisPitch]] : '#FFF',
                isInterval = false,
                clickTimer,
                dblclick,
                click,
                text;
            circle = paper.circle(targetX, targetY, noteCircle);
            circle.attr('cursor', 'pointer');
            for (z = 0; z < intervalKeys.length; z += 1) {
                if (toggledIntervals[intervalKeys[z]] && thisPitch === (pitchClass + intervals[intervalKeys[z]]) % 12) {
                    isInterval = true;
                }
            }
            if (pitchClass === thisPitch) {
                circle.attr("fill", thisColor).attr("stroke", "#000")
                    .attr("stroke-width", "3");
                p.attr("stroke", "#F00");
                p.attr("stroke-width", "3");
            } else if (isInterval) {
                circle.attr("fill", "#000").attr("stroke", "#000");
                p.attr("stroke", "#555");
                p.attr("stroke-width", "2");
                circle.attr('opacity', '1');
            } else {
                circle.attr("fill", "#CCC").attr("stroke", "#EEE");
                circle.attr('opacity', '1');
                p.attr("stroke", "#EEE");
            }
            dblclick = function () {
                clearTimeout(clickTimer);
            };
            click = function () {
                clearTimeout(clickTimer);
                clickTimer = setTimeout(function () {
                    self.selectInterval(self.getIntervalValue((thisPitch + 12 - pitchClass) % 12));
                }, 300);
            };
            text = paper.text(targetX + 1, targetY, noteNames[thisPitch].replace(/b/, '\u266d'));
            text.attr('font-size', (radius * 0.208) + 'px');
            text.attr('text-align', 'center');
            text.attr('cursor', 'pointer');
            if (isInterval) {
                text.attr('fill', '#FFF');
            } else if (pitchClass === thisPitch) {
                text.attr('fill', '#000');
            } else {
                text.attr('fill', '#000');
            }
            circle.click(click);
            text.click(click);
            circle.dblclick(dblclick);
            text.dblclick(dblclick);
        }
        for (x = 0; x < list.length; x += 1) {
            drawAtPct((x + 1) / 12, list[x], x);
        }
        return;
    };
    return self;
});