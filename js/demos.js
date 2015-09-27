document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var playbackTimer,
        playbackTimer2,
        duration = 0.5,
        durationInput = document.createElement('input');
    durationInput.type = 'range';
    durationInput.min = 1;
    durationInput.max = 20
    menu.className = 'menu';
    content.className = 'content';
    menu.appendChild(searchButton);
    menu.appendChild(tuningsButton);
    menu.appendChild(playMidiButton);
    menu.appendChild(durationInput);
    searchButton.innerHTML = 'Scales';
    tuningsButton.innerHTML = 'Tunings';
    playMidiButton.innerHTML = 'Play';
    searchButton.onclick = search;
    playMidiButton.onclick = function () {
        clearInterval(playbackTimer);
        clearInterval(playbackTimer2);
        var ii, i = getAllIntervals().map(function (n) {
            return n + 72 + selectedPitchClass;
        });
        var d = parseInt(durationInput.value, 10) / 10; 
        playSeq(i, d * 1000);
        playbackTimer = setInterval(function () {
            playSeq(i, d * 1000);
        }, i.length * d * 1000);
        ii = i.slice(0);
        ii.push(ii.shift());
        ii.push(ii.shift());
        playSeq(ii, d * 1000);
        playbackTimer2 = setInterval(function () {
            playSeq(ii, d * 1000);
        }, i.length * d * 1000);
    }
    document.body.appendChild(content);
    document.body.appendChild(menu);
    window.addEventListener('resize', function () {
        drawPitchClass(selectedPitchClass);
    });
    selectAd([0, 4, 7]);
    drawPitchClass(selectedPitchClass);
    window.drawPitchClass = drawPitchClass;
});
