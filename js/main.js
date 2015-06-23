(function () {
    document.addEventListener('DOMContentLoaded', main);
    function main(){
        Math.TAU = 2 * Math.PI;
        var ce = function(tag){ return document.createElement(tag); };
        var gi = function(id){ return document.getElementById(id); };
        var useColors = false;
        var content = ce('div');
        content.className = 'content';
        var selectedPitchClass = 0;
        var supressInMenus = [];
        var startingZinded = 10000;
        var colors = [
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
        ];
        var intervalKeys = Object.keys(intervals);
        var cirlceOfFifthsNotes = cirlceOfFifths.map(function(pitchClass){
            return noteNames[pitchClass];
        });
        var toggledIntervals = {};
        var maxFret = 12;
        var cirlceOfFifthsCoords = null;
        var chromaticCoords = null;
        var menu = ce('div');
        menu.className = 'menu';
        var searchButton = ce('button');
        menu.appendChild(searchButton);
        searchButton.innerHTML = 'Search';
        searchButton.onclick = search;
        document.body.appendChild(content);
        document.body.appendChild(menu);
        window.addEventListener('resize', function(){
            drawPitchClass(selectedPitchClass);
        });
        selectAd([0, 4, 7]);
        drawPitchClass(selectedPitchClass);
        function d3FormatSetList() {
            var o = {
                name: 'Set List',
                children: []
            };
            Object.keys(setList).forEach(function(set){
                var s = {
                    name: set,
                    children: []
                }
                o.children.push(s);
                Object.keys(setList[set]).forEach(function(family){
                    var f = {
                        name: family,
                        children: []
                    }
                    s.children.push(f);
                    Object.keys(setList[set][family]).forEach(function(scale){
                        var a = {
                            name: scale
                        }
                        f.children.push(a);
                    });
                });
            });
            return o;
        }
        function search() {
            var allMenus = [];
            function createXadMenu(parentNode, parentSet) {
                var searchMenu = document.createElement('div'),
                    children = [],
                    offset = (parentNode === document.body ?
                    0 : parentNode.offsetLeft + parentNode.offsetWidth);
                searchMenu.className = 'rootMenu';
                searchMenu.style.zIndex = startingZinded--;
                searchMenu.style.left = (offset - 250) + 'px';
                setTimeout(function () {
                    searchMenu.style.left = offset + 'px';
                }, 0);
                Object.keys(parentSet).forEach(function (set) {
                    if (supressInMenus.indexOf(set) !== -1) { return; }
                    var setEle = ce('div');
                    setEle.innerHTML = set;
                    setEle.onclick = function () {
                        if (Array.isArray(parentSet[set])) {
                            allMenus.forEach(function(menu){
                                if (menu) { menu.close(); }
                            });
                            selectAd(parentSet[set]);
                            drawPitchClass(selectedPitchClass);
                        } else {
                            var subMenu = createXadMenu(searchMenu, parentSet[set]);
                            children.push(subMenu);
                            allMenus.push(subMenu);
                            for(var x = 0; x < searchMenu.childNodes.length; x++ ){
                               (function (sib) {
                                    function subClose() {
                                        sib.removeEventListener('click', subClose);
                                        subMenu.close();
                                    }
                                    sib.addEventListener('click', subClose);
                                }(searchMenu.childNodes[x]));
                            }
                        }
                    }
                    searchMenu.appendChild(setEle);
                });
                function close () {
                    if (searchMenu.parentNode) {
                        searchMenu.parentNode.removeChild(searchMenu);
                    }
                    searchButton.onclick = search;
                    children.forEach(function (c){
                        c.close();
                    });
                }
                document.body.appendChild(searchMenu);
                return {
                    close: close,
                    searchMenu: searchMenu
                };
            }

            allMenus.push(createXadMenu(document.body, setList));
        
        }
        window.drawPitchClass = drawPitchClass;
        function drawPitchClass(pitchClass){
            var c,
                t,
                title = ce('h1');
                pitchCircle = ce('div');
                fifthCircle = ce('div');
                piano = ce('div');
            content.innerHTML = '';
            pitchCircle.className = 'pitchCircle';
            fifthCircle.className = 'fifthCircle';
            title.className = 'title';
            content.appendChild(title);
            content.appendChild(pitchCircle);
            content.appendChild(fifthCircle);
            content.appendChild(piano);
            selectedPitchClass = pitchClass;
            c = getChordNames().map(function (c){
                return c.name;
            });
            getAllXadIntervalMatrices();
            t = noteNames[pitchClass];
            if(c.length > 0){
                t += ' ' + c.join(', ');
            }
            title.innerHTML = t;

            drawPitchClassStaff(pitchClass);
            drawPitchClassTab(pitchClass);
            pitchCircle.innerHTML = '';
            fifthCircle.innerHTML = '';
            drawCircle(fifthCircle, cirlceOfFifths, pitchClass);
            drawCircle(pitchCircle, pitchClasses, pitchClass);
            //createPiano(piano, pitchClass);
            drawIntervals();
            updateIntervalMatrix();
            updateXadMatrix();
            
            //aim.innerHTML = getAllVectorMatrices();
        }
        function getSelectedIntervalCount(){
            var c = 0;
            for(var z = 0; z < intervalKeys.length; z ++) {
                if(toggledIntervals[intervalKeys[z]]){
                    c++;
                }
            }
            return c;
        }
        function chordMatch(chord){
            var selectedIntervalCount = getSelectedIntervalCount() + 1;
            if(selectedIntervalCount !== chord.length){
                return false;
            }
            var isMatch = true;
            for(var z = 1; z < chord.length; z++){
                if(!isAnInterval(0, chord[z])){
                    isMatch = false;
                }
            }
            return isMatch;
        }
        function getGetOrdinal(n) {
            var s=["th","st","nd","rd"],
                v=n%100;
            return n+(s[(v-20)%10]||s[v]||s[0]);
        }
        function getAllIntervals(){
            var intv = [0];
            for(var x = 0; x < intervalKeys.length; x++){
                if(toggledIntervals[intervalKeys[x]] === true){
                    intv.push(intervals[intervalKeys[x]]);
                }
            }
            return intv;
        }
        function getAllChords(){
            return;
            var matches = [];
            Object.keys(chords).forEach(function(xAd){
                matches = matches.concat(getAllXadChords(xAd));
            });
            return matches;
        }
        function getAllXadChords(xAd){
            var matches = [];
            Object.keys(setList[xAd]).map(function(family){
                Object.keys(setList[xAd][family]).map(function(chord){
                    matches.push({ad: xAd, family: family, name: chord, chord: setList[xAd][family][chord]});
                });
            });
            return matches;
        }
        function isSubsetOf(searchFor, searchIn){
            var isSubset = true;
            for(var x = 0; x < searchFor.length; x++){
                if(searchIn.indexOf(searchFor[x]) === -1){
                    return false;
                }
            }
            return isSubset;
        }
        function getXadIntervalMatrix(xAd){
            var intvs = getAllIntervals(),
                allChords = getAllXadChords(xAd),
                matches = [];
            for(var x = 0; x < intvs.length; x ++){
                tInvers = intvs.map(function(intv){
                    return (intv - intvs[x] + 12) % 12;
                });
                // loop thru every chord in the xad and see if any match
                allChords.map(function(chordMap){
                    if(isSubsetOf(chordMap.chord, tInvers)){
                        matches.push(chordMap);
                    }
                    /*
                    Eric says delete this, but you never know
                    chordMap.chord.inversions.map(function(invers){
                        if(isSubsetOf(invers, tInvers)){
                            matches.push(chordMap);
                        }
                    });
                    */
                });
            }
            return matches;
        }
        function getAllXadIntervalMatrices(){
            var chordTypes = Object.keys(setList),
                matches = [];
            for(var x = 0; x < chordTypes.length; x++){
                var m = getXadIntervalMatrix(chordTypes[x]);
                if(m.length > 0){
                    matches = matches.concat(m);
                }
            }
            return matches;
        }
        function getSelectedIntervals() {
            var o = [];
            Object.keys(intervalKeys).forEach(function (interval) {
                if(toggledIntervals[intervalKeys[interval]]){
                    o.push(intervals[intervalKeys[interval]]);
                }
            });
            return o;
        }
/*  
    setList = {
        triads: {
            "Tertial (3-11M) Major Triad": {
                "Major Triad": [0, 4, 7],
                "b6/b3 Tertial Triad": [0, 3, 8],
                "6/4 Tertial Triad": [0, 5, 9]
            },...
        },...
    }
*/
        function getChordNames() {
            var selectedIntervals = getSelectedIntervals(),
                names = [];
            selectedIntervals.unshift(0);
            selectedIntervals.sort();
            Object.keys(setList).forEach(function (rootItem) {
                Object.keys(setList[rootItem]).forEach(function (subItem) {
                    Object.keys(setList[rootItem][subItem]).forEach(function (name) {
                        var v = setList[rootItem][subItem][name].sort(),
                            x;
                        if (v.length !== selectedIntervals.length) {
                            return;
                        }
                        for(x = 0; x < v.length; x+=1){
                            if(selectedIntervals.indexOf(v[x]) === -1) {
                                return;
                            }
                        }
                        names.push({
                            rootItem: rootItem,
                            subItem: subItem,
                            name: name
                        });
                    });
                });
            });
            return names;
        }
        function isAnInterval(pitchClass, interval){
            for(var z = 0; z < intervalKeys.length; z ++) {
                if(toggledIntervals[intervalKeys[z]] && interval === (pitchClass + intervals[intervalKeys[z]]) % 12){
                    return true;
                }
            }
            return false;
        }
        function noSelect(eles) {
            try {
                var x, t = function () { return false; };
                for (x = 0; eles.length > x; x++) {
                    eles[x].onselectstart = t;
                    eles[x].unselectable = "on"; // For IE and Opera
                    eles[x].style.userSelect = "none";
                    eles[x].style.webkitUserSelect = "none";
                    eles[x].style.MozUserSelect = "none";
                }
            } catch (ignore) { }
            return this;
        }
        function getIntervalValue(intervalValue){
            for(var x = 0; x < intervalKeys.length; x ++){
                if(intervals[intervalKeys[x]] === intervalValue){
                    return intervalKeys[x];
                }
            }
        }
        function createPiano(parentNode, pitchClass){
            var keys = ['C', 'Db',
            'D', 'Eb', 'E','F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
            var p = parentNode;
            p.innerHTML = '';
            p.className = 'piano';
            var upper = ce('div');
            var lower = ce('div');
            upper.className = 'upper';
            lower.className = 'lower';
            var midiNoteNumber = 0;
            var nlist = [];
            function createOctave(octaveNumber){
                var blackKeys = ce('div');
                blackKeys.className = 'blackOctave';
                var whiteKeys = ce('div');
                whiteKeys.className = 'whiteOctave';
                
                for(var x = 0; x < 12; x++){
                    (function(x){
                        var k = ce('div');
                        var flat = keys[x].length > 1;
                        var className = 'key key_' + keys[x] + (flat ? ' blackKeys' : ' whiteKeys');
                        if(isAnInterval(pitchClass, x)){
                            className += ' selectedKey';
                        }
                        if(pitchClass === x){
                            className += ' selectedRootKey';
                        }
                        k.className = className;
                        k.innerHTML = '<div>' + keys[x] + (octaveNumber-2) + '</div>' + 
                        '<div class="midiNoteNumber">' + midiNoteNumber++ + '</div>';
                        nlist.push(keys[x] + (octaveNumber-2));
                        (flat ? blackKeys : whiteKeys).appendChild(k);
                        k.onclick = function(){
                            selectInterval(getIntervalValue(    (x + 12 - pitchClass) % 12));
                        }
                        k.ondblclick = function(){
                            drawPitchClass(x);
                        }
                    }(x));
                }
                lower.appendChild(whiteKeys);
                upper.appendChild(blackKeys);
            }
            p.appendChild(lower);
            p.appendChild(upper);
            for(var x = 0; x < 9; x++){
                createOctave(x);
            }
            noSelect([p, lower, upper]);
            //console.log(nlist.join(' '));
        }
        function createSeptadsList(){
            var ele = ce('div');
            for(var x = 0; x < families.length; x++){
                (function(x){
                    var family = families[x];
                    var fam = ce('div');
                    var title = ce('div');
                    var body = ce('div');
                    fam.className = 'family';
                    title.className = 'familyTitle';
                    title.innerHTML = family.name;
                    fam.appendChild(title);
                    title.toggle = false;
                    title.addEventListener('click', function(){
                        title.toggle = !title.toggle;
                        if(title.toggle){
                            body.style.display = 'inherit';
                        }else{
                            body.style.display = 'none';
                        }
                    });
                    fam.appendChild(body);
                    ele.appendChild(fam);
                    body.style.display = 'none';
                    for(var y = 0; y < family.scales.length; y++){
                        (function(y){
                            var s = family.scales[y];
                            var scale = ce('button');
                            scale.innerHTML = s.name + '<br>' + s.set.join(',');
                            scale.onclick = function(){
                                selectAd(s.set);
                            }
                            body.appendChild(scale);
                        })(y);
                    }
                })(x);
            }
            return ele;
        }
        function invert(i){
            return i > 6 ? 11 - i + 1 : i;
        }
        function combinations(str) {
            var fn = function(active, rest, a) {
                if (!active && !rest)
                    return;
                if (!rest) {
                    a.push(active);
                } else {
                    fn(active + rest[0], rest.slice(1), a);
                    fn(active, rest.slice(1), a);
                }
                return a;
            }
            return fn("", str, []);
        }
        function getAllVectorMatrices(){
            var c = combinations("0123456789AB");
            var matrices = [];
            for(var x = 0; x < c.length; x++){
                var i = c[x];
                var intervals = [];
                for(var y = 0; y < i.length; y++){
                    intervals.push(parseInt(i[y],16));
                }
                matrices.push(getMatrixFromIntervals(intervals));
            }
            return matrices;
        }
        function getMatrixFromIntervals(intv){
            var matrix = [0, 0, 0, 0, 0, 0];
            var s = [];
            for(var x = 0; x < intervalKeys.length; x++){
                if(intv.indexOf(intervals[intervalKeys[x]]) !== -1){
                    matrix[invert(intervals[intervalKeys[x]]) - 1]++;
                    s.push(intervals[intervalKeys[x]]);
                }
            }
            for(var x = 0; x < s.length; x++){
                for(var y = 0; y < s.length; y++){
                    if(x !== y){
                        matrix[invert( Math.abs(s[x] - s[y])) - 1] += 0.5;
                    }
                }
            }
            return matrix;
        }
        function updateXadMatrix(){
            return;
            var m = getAllXadIntervalMatrices();
            var chords = getAllChords();
            var t = ce('div');
            t.style.overflowY = 'scroll';
            t.style.height = '140px';
            chords.forEach(function(chord){
                m.forEach(function(matrixItem){
                    if(matrixItem.name === chord.name){
                        var hrc = ce('div');
                        hrc.className = 'xadMatrixChord';
                        hrc.innerHTML = chord.name;
                        t.appendChild(hrc);

                    }
                });
            });
            var i = gi('chordMatrix');
            i.innerHTML = '';
            i.appendChild(t);
        }
        function updateIntervalMatrix(){
            return;
            var i = gi('intervalMatrix');
            var intv = [];
            for(var x = 0; x < intervalKeys.length; x++){
                if(toggledIntervals[intervalKeys[x]] === true){
                    intv.push(intervals[intervalKeys[x]]);
                }
            }
            i.innerHTML = '<table class="intervalVector"><tr><th>Interval Class</th><th>1</th><th>2</th>' +
                '<th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td></td>' + 
                getMatrixFromIntervals(intv)
                .map(function(m){ return '<td>' + m + '</td>'}).join('') +
                '</tr></table>';
        }
        function selectInterval(interval, select){
            toggledIntervals[interval] = !toggledIntervals[interval];
            if(select === true || select === false){
                toggledIntervals[interval] = select;
            }
            drawPitchClass(selectedPitchClass);
        }
        function selectAd(xad){
            toggledIntervals = {};
            for(var x = 0; x < intervalKeys.length; x++){
                if(xad.indexOf(intervals[intervalKeys[x]]) !== -1){
                    toggledIntervals[intervalKeys[x]] = true;
                }
            }
            drawPitchClass(selectedPitchClass);
        }
        function createXadList(xad){
            var t = ce('div');
            Object.keys(chords[xad]).forEach(function(family){
                var h = ce('div'),
                    n = ce('div');
                n.className = 'xadgroup';
                h.className = 'xadfamily';
                h.innerHTML = family;
                n.style.display = 'none';
                t.appendChild(h);
                t.appendChild(n);
                h.onclick = function(){
                    if(/none/.test(n.style.display)){
                        n.style.display = 'block';
                    }else{
                        n.style.display = 'none';
                    }
                }
                Object.keys(chords[xad][family]).forEach(function(chord){
                    var d = ce('div'),
                        oc = chords[xad][family][chord];
                    d.className = 'family';
                    d.innerHTML = '<div>' + chord + '</div>';
                    function makeChordSelect(inv, msg){
                        var q = ce('button');
                        q.innerHTML = msg + '<br>' + inv.join();
                        q.onclick = function(){
                            selectAd(inv);
                        }
                        d.appendChild(q);
                    }
                    makeChordSelect(oc, 'Root');
                    var invCount = 1;
                    oc.inversions.forEach(function(inv){
                        makeChordSelect(inv, getGetOrdinal(invCount++) + ' inversion' );
                    });
                    n.appendChild(d);
                });
            });
            return t;
        }
        function popup(){
            var c = ce('div');
            c.style.position = 'absolute';
            c.style.top = '10px';
            c.style.left = '75px';
            c.className = 'popup';
            var close = ce('button');
            close.className = 'popupClose';
            close.innerHTML = 'x';
            close.onclick = function(){
                c.parentNode.removeChild(c);
            };
            c.appendChild(close);
            document.body.appendChild(c);
            return c;
        }
        function drawIntervals(){
            return;
            var container = gi('intervals');
            container.className = 'intervals';
            var i = ce('div');
            i.innerHTML = '<h3>Interval</h3>';
            for(var x = 0; x < intervalKeys.length; x++){
                (function(x){
                    var k = ce('button');
                    k.onclick = function(){
                        selectInterval(intervalKeys[x]);
                    };
                    k.className = 'interval_button';
                    if(toggledIntervals[intervalKeys[x]] === true){
                        k.style.background = '#555';
                        k.style.color = '#FFF';
                    }
                    if(x === intervalKeys.length - 1){
                        k.className = 'augmented_interval';
                    }
                    k.innerHTML = intervalKeys[x];
                    i.appendChild(k);
                }(x));
            }
            container.innerHTML = '';
            container.appendChild(i);
        }
        
        function drawPitchClassTab(pitchClass){
            // Get the rendering context
            var w = document.documentElement.clientWidth - 30;
            var canvas = ce('canvas');
            canvas.height = 200;
            canvas.width = w;
            content.appendChild(canvas);
            var renderer = new Vex.Flow.Renderer(canvas,
                Vex.Flow.Renderer.Backends.CANVAS);
            var ctx = renderer.getContext();
            ctx.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

            // Create and draw the tablature stave
            var tabstave = new Vex.Flow.TabStave(10, 0, w);
            tabstave.addTabGlyph();
            tabstave.setContext(ctx).draw();

            // Create some notes
            var notes = [];
            function createNote(fret, y){
                notes.push(new Vex.Flow.TabNote({
                    positions: [{str: y+1, fret: fret}],
                    duration: "64"}));
            }
            for(var x = 0; x < maxFret; x++){
                for(var y = 0; y < tunings.guitarStandard.length; y++){
                    var n = [];
                    var interval = (x + tunings.guitarStandard[y]) % 12;
                    if(interval === pitchClass){
                        n.push(interval);
                    }
                    // add selected intervals
                    for(var z = 0; z < intervalKeys.length; z++){
                        if(toggledIntervals[intervalKeys[z]]){
                            n.push((pitchClass + intervals[intervalKeys[z]]) % 12);
                        }
                    }
                    if(n.indexOf(interval) !== -1){
                        // create note
                        createNote(x, y);
                    }
                }
            }
            Vex.Flow.Formatter.FormatAndDraw(ctx, tabstave, notes);
        }
        function drawPitchClassStaff(pitchClass){
            var canvas = ce('canvas');
            var w = document.documentElement.clientWidth - 30;
            canvas.height = 100;
            canvas.width = w;
            content.appendChild(canvas);
            var renderer = new Vex.Flow.Renderer(canvas,
                Vex.Flow.Renderer.Backends.CANVAS);

            var ctx = renderer.getContext();
            var stave = new Vex.Flow.Stave(10, 0, w);
            stave.addClef("treble").setContext(ctx).draw();
            var notes = [];
            var n = [];
            var note;
            

            function addNote(i){
                var noteName = noteNames[i];
                var staveNote = new Vex.Flow.StaveNote({
                    keys: [ noteName + '/4' ],
                    duration: 'w'
                });
                if(noteName.length > 1){
                    staveNote = staveNote.addAccidental(0, new Vex.Flow.Accidental('b'));
                }
                notes.push(staveNote);
            }
            
            addNote(pitchClass);
            // add selected intervals
            for(var z = 0; z < intervalKeys.length; z++){
                if(toggledIntervals[intervalKeys[z]]){
                    addNote((pitchClass + intervals[intervalKeys[z]]) % 12);
                }
            }


            // Create a voice in 4/4
            var voice = new Vex.Flow.Voice({
                num_beats: 4 * notes.length,
                beat_value: 4,
                resolution: Vex.Flow.RESOLUTION
            });

            // Add notes to voice
            voice.addTickables(notes);
        
            var formatter = new Vex.Flow.Formatter().
                joinVoices([voice]).format([voice], 500);

            // Render voice
            voice.draw(ctx, stave);


        }

        function circle(context, centerX, centerY, radius, stroke, fill, strokeWidth){
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = fill;
            context.fill();
            context.lineWidth = strokeWidth;
            context.strokeStyle = stroke;
            context.stroke();
        }
        function drawCircle(parentNode, list, pitchClass){
            var objectSize = 200;
            var height = objectSize;
            var width = objectSize;
            var radius = objectSize * 0.486;
            var circlePadding = radius*0.225;
            var noteCircle = radius*0.1833;
            var paper = Raphael(parentNode, width, height);
            noSelect([parentNode]);
            var circleX = height / 2;
            var circleY = width / 2;
            var circle = paper.circle(circleX, circleY, radius);
            circle.attr("stroke-width", "3");
            circle.attr("fill", "#FFF");
            circle.attr("stroke", "#000");
            function drawAtPct(pct, thisPitch, index) {
                var armRadians = (Math.TAU * pct) - (Math.TAU/4);
                var targetX = circleX + Math.cos(armRadians) * (radius-circlePadding);
                var targetY = circleY + Math.sin(armRadians) * (radius-circlePadding);
                
                var p = paper.path('M'+circleX+','+circleY+'L'+targetX+','+targetY); 
                
                var circle = paper.circle(targetX, targetY, noteCircle);

                var thisColor = useColors ? colors[cirlceOfFifths[thisPitch]] : '#FFF';
                var isAnInterval = false;
                circle.attr('cursor', 'pointer');
                for(var z = 0; z < intervalKeys.length; z++){
                    if(toggledIntervals[intervalKeys[z]] && thisPitch === (pitchClass + intervals[intervalKeys[z]]) %12){
                        isAnInterval = true;
                    }
                }
                if(pitchClass === thisPitch){
                    circle.attr("fill", thisColor).attr("stroke", "#000")
                    .attr("stroke-width", "3");
                    p.attr("stroke", "#F00");
                    p.attr("stroke-width", "3");
                }else if(isAnInterval){
                    circle.attr("fill", "#000").attr("stroke", "#000");
                    p.attr("stroke", "#555");
                    p.attr("stroke-width", "2");
                    circle.attr('opacity', '1');
                }else{
                    circle.attr("fill", "#CCC").attr("stroke", "#EEE");
                    circle.attr('opacity', '1');
                    p.attr("stroke", "#EEE");
                }
                var clickTimer;
                var dblclick = function(e){
                    clearTimeout(clickTimer);
                    drawPitchClass(thisPitch);
                };
                var click = function(e){
                    clearTimeout(clickTimer);
                    clickTimer = setTimeout(function(){
                        selectInterval(getIntervalValue(    (thisPitch + 12 - pitchClass) % 12));
                    }, 300);
                };
                var text = paper.text(targetX + 1, targetY,
                    noteNames[thisPitch].replace(/b/,'\u266d'));
                text.attr('font-size', (radius*0.208) + 'px');
                text.attr('text-align', 'center');
                text.attr('cursor', 'pointer');
                if(isAnInterval){
                    text.attr('fill', '#FFF');
                }else if(pitchClass === thisPitch){
                    text.attr('fill', '#000');
                }else{
                    text.attr('fill', '#000');
                }
                circle.click(click);
                text.click(click);
                circle.dblclick(dblclick);
                text.dblclick(dblclick);
            }
            for(var x = 0; x < list.length; x++){
                drawAtPct((x+1)/12, list[x], x);
            }
            return;
        }
    }
}());