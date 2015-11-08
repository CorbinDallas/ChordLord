/*jslint browser: true*/
/*globals define: false */
define(['ui'], function (ui) {
    'use strict';
    function init() {
        var x,
            items = [],
            input = document.createElement('input'),
            div = document.createElement('div');
        div.appendChild(input);
        document.body.appendChild(div);
        for (x = 0; x < 100; x += 1) {
            items.push(x);
        }
        ui.combo({
            input: input,
            parentNode: div,
            items: items
        });
    }
    init();
});