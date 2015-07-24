/*jslint browser: true*/
/*global drawFretboard: true */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var fretBoard = document.createElement('div'),
        colors = [
            ['transparent', 'white'],
            ['red', 'black'],
            ['black', 'white'],
            ['gray', 'black'],
            ['yellow', 'black']
        ],
        states = {};
    drawFretboard(0, fretBoard, function (pitch, fret, string, e) {
        var key = fret + ':' + string,
            b;
        states[key] = states[key] || 0;
        if (e.button === 0) {
            states[key] += 1;
            b = colors[states[key] % colors.length];
        } else {
            b = colors[0];
        }
        this.style.background = b[0];
        this.style.color = b[1];
    });
    document.body.appendChild(fretBoard);
});