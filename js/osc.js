document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var oscs = [],
        ac = new AudioContext(),
        osc = ac.createOscillator();
    osc.connect(ac.destination);
    osc.start();
    function play(r) {
        var l = r.length,
            real = new Float32Array(l),
            imag = new Float32Array(l),
            x,
            wave;
        for (x = 0; x < l; x += 1) {
            real[x] = r[x];
            imag[x] = 0;
        }
        wave = ac.createPeriodicWave(real, imag);
        osc.setPeriodicWave(wave);
    }
    var m = document.createElement('input');
    m.type = 'range';
    m.max = 100;
    m.min = 2;
    m.value = 2;
    document.body.appendChild(m);
    document.body.appendChild(document.createElement('br'));
    function p() {
        var n = oscs.map(function (i) {
            return parseInt(i.value, 10);
        });
        play(n);
    }
    m.oninput = function () {
        oscs.forEach(function (i) { 
            i.parentNode.removeChild(i);
        });
        oscs = [];
        for (var x = 0; x < parseInt(m.value, 10); x++){
            var d = document.createElement('input');
            oscs.push(d);
            d.type = 'range';
            d.min = 0;
            d.max = 100;
            d.value = Math.PI;
            document.body.appendChild(d);
            d.oninput = p;
        }
        p();
    };
});
