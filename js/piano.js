/*jslint browser: true*/
/*global define*/
define(['main'], function (main) {
    'use strict';
    return function createPiano(args) {
        var y,
            keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
            instance = {},
            p = document.createElement('div'),
            upper = document.createElement('div'),
            lower = document.createElement('div'),
            midiNoteNumber = 24,
            nlist = [],
            keyControls = [];
        p.className = 'piano';
        args.parentNode.appendChild(p);
        upper.className = 'upper';
        lower.className = 'lower';
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
        function createOctave(octaveNumber) {
            var blackKeys, x, whiteKeys;
            whiteKeys = document.createElement('div');
            blackKeys = document.createElement('div');
            blackKeys.className = 'blackOctave';
            whiteKeys.className = 'whiteOctave';
            function keyset(x, midiNoteNumber) {
                var k, flat, className;
                k = document.createElement('div');
                flat = keys[x].length > 1;
                className = 'key key_' + keys[x] + (flat ? ' blackKeys' : ' whiteKeys');
                if (main.isAnInterval(args.key, x)) {
                    className += ' selectedKey';
                }
                k.innerHTML = '<div>&#x25C9;</div>';
                if (args.key === x) {
                    className += ' selectedRootKey';
                    k.innerHTML = '<div>&#x25C8;</div>';
                }
                k.className = className;
                nlist.push(keys[x] + (octaveNumber - 2));
                (flat ? blackKeys : whiteKeys).appendChild(k);
                k.onclick = function () {
                    if (!args.keyClick) { return; }
                    args.keyClick.apply(this, [midiNoteNumber, instance]);
                };
                k.onmousedown = function () {
                    if (!args.keyMouseDown) { return; }
                    args.keyMouseDown.apply(this, [midiNoteNumber, instance]);
                };
                k.onmouseover = function () {
                    if (!args.keyMouseOver) { return; }
                    args.keyMouseOver.apply(this, [midiNoteNumber, instance]);
                };
                k.onmouseoff = function () {
                    if (!args.keyMouseOff) { return; }
                    args.keyMouseOff.apply(this, [midiNoteNumber, instance]);
                };
                k.ondblclick = function () {
                    if (!args.keyDblClick) { return; }
                    args.keyDblClick.apply(this, [midiNoteNumber, instance]);
                };
                keyControls.push({
                    highlight: function (i) {
                        k.classList.add('highlightKey');
                        if (i === undefined) { return; }
                        k.style.opacity = i;
                    },
                    unhighlight: function (i) {
                        k.classList.remove('highlightKey');
                        if (i === undefined) { return; }
                        k.style.opacity = 1;
                    },
                    select: function () {
                        k.classList.add('selectedKey');
                    },
                    deselect: function () {
                        k.classList.remove('selectedKey');
                    }
                });
            }
            for (x = 0; x < 12; x += 1) {
                keyset(x, midiNoteNumber);
                midiNoteNumber += 1;
            }
            lower.appendChild(whiteKeys);
            upper.appendChild(blackKeys);
        }
        p.appendChild(lower);
        p.appendChild(upper);
        for (y = 0; y < args.range; y += 1) {
            createOctave(y);
        }
        noSelect([p, lower, upper]);
        return {
            keys: keyControls,
            parentNode: args.parentNode,
            select: function (selection) {
                keyControls.forEach(function (s) {
                    s.deselect();
                });
                selection.forEach(function (s) {
                    keyControls[s].select();
                });
            },
            deselect: function (selection) {
                selection.forEach(function (s) {
                    keyControls[s].deselect();
                });
            },
            unhighlight: function (selection) {
                selection.forEach(function (s) {
                    keyControls[s].unhighlight();
                });
            },
            highlight: function (selection) {
                selection.forEach(function (s) {
                    keyControls[s].highlight();
                });
            }
        };
    };
});