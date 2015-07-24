document.addEventListener('DOMContentLoaded', function () {
'use strict';
    menu.className = 'menu';
    content.className = 'content';
    menu.appendChild(searchButton);
    menu.appendChild(tuningsButton);
    searchButton.innerHTML = 'Scales';
    tuningsButton.innerHTML = 'Tunings';
    searchButton.onclick = search;
    document.body.appendChild(content);
    document.body.appendChild(menu);
    window.addEventListener('resize', function () {
        drawPitchClass(selectedPitchClass);
    });
    selectAd([0, 4, 7]);
    drawPitchClass(selectedPitchClass);
    window.drawPitchClass = drawPitchClass;
});
