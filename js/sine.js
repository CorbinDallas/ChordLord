/*jslint browser: true*/
/*globals performance: false, requestAnimationFrame: false*/
'use strict';
function scheduler() {
    var bufferSize = 1,
        rate = 1,
        counter = performance.now(),
        v;
    while (performance.now() + bufferSize > counter) {
        v = Math.floor(127 * Math.abs(waveControl.value), 127);
        //sendMessage(message, deviceId, channel, value, value2, time)
        sendMessage(msg.controllerChange, Object.keys(pipes.outputs)[0], "1", 2, v, counter);
        counter += rate;
        console.log(waveControl.value, v);
    }
}
//setInterval(scheduler, 1);
function init() {
    window.waveControl = waveControl({tempo: 120, timeSignature: [4, 4]});
    document.body.appendChild(window.waveControl.canvas);



}
function waveControl(args) {
    args = args || {};
    args.parentNode = args.parentNode || document.body;
    var uiControlCounter = 0,
        height,
        width,
        atom = ((60000 / args.tempo) / 32) * (4 / args.timeSignature[1]),
        last = performance.now(),
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        tau = Math.PI * 2,
        waveTypes = {
            noise: function (t, f) {
                return (Math.random() * 2 - 1) * (f * 1000);
            },
            sine: function (t, f) {
                return Math.sin(t * tau * f);
            },
            saw: function (t, f) {
                var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]
                return -1 + (2 * n);
            },
            saw_i: function (t, f) {
                var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]
                return 1 - (2 * n);
            },
            triangle: function (t, f) {
                var n = ((t % (1 / f)) * f) % 1; // n = [0 -> 1]
                return n < 0.5 ? -1 + (2 * (2 * n)) : 1 - (2 * (2 * n));
            },
            square: function (t, f) {
                return ((t % (1 / f)) * f) % 1 > 0.5 ? 1 : -1;
            }
        },
        createRangeInput = function (title, min, max, value, magnitude) {
            uiControlCounter += 1;
            var uiIndex = uiControlCounter,
                ct = document.createElement("input"),
                cHeight,
                cWidth,
                tSize,
                rect = {},
                vmax = max * magnitude,
                vmin = min * magnitude,
                dragging = false,
                start = {x: 0, y: 0};
            function change() {
                ct.v = parseInt(ct.value, 10) * magnitude;
            }
            ct.type = 'range';
            ct.min = min;
            ct.max = max;
            ct.setAttribute('magnitude', magnitude);
            ct.value = value;
            ct.addEventListener('change', change);
            change();
            function drawControl() {
                //ctx.clearRect(0, 0, d.clientWidth, d.clientHeight);
                cHeight = height * 0.925;
                cWidth = width * 0.07;
                tSize = width * 0.03;
                var x  = (uiIndex * cWidth) + (uiIndex * 10) - cWidth;
                rect = {
                    left: x,
                    top: height * 0.025,
                    width: cWidth,
                    height: cHeight
                };
                ctx.strokeStyle = '#1366ff';
                ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
                ctx.fillRect(x, rect.top, cWidth, cHeight);
                ctx.strokeRect(x + 1, rect.top, cWidth, cHeight);
                ctx.fillStyle = "rgba(255, 0, 0, 0.25)";
                ctx.fillRect(x, rect.top, cWidth, cHeight * (ct.v / vmax));
                ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
                ctx.save();
                ctx.translate(x, 100);
                ctx.rotate(-Math.PI / 2);
                ctx.font = (tSize * 2) + "px sans-serif";
                ctx.fillText(title, (tSize * -1) * 12, tSize + 20);
                ctx.font = tSize + "px sans-serif";
                ctx.fillStyle = "rgba(255, 0, 0, .333)";
                ctx.fillText(ct.v.toFixed(4), (tSize * -1) * 2, tSize * 2);
                ctx.restore();
            }
            function startChange(e) {
                if (rect.top < e.clientY
                        && rect.height > e.clientY
                        && rect.left < e.clientX
                        && rect.left + rect.width > e.clientX) {
                    dragging = true;
                    start.x = e.clientX;
                    start.y = e.clientY;
                    canvas.requestPointerLock();
                }
            }
            function drag(e) {
                if (!dragging) { return; }
                ct.v += (e.movementY + e.movementX) * magnitude;
                if (ct.v <= vmin) {
                    ct.v = vmin;
                }
                if (ct.v >= vmax) {
                    ct.v = vmax;
                }
            }
            function endChange() {
                dragging = false;
                document.exitPointerLock();
            }
            ct.redraw = drawControl;
            drawControl();
            canvas.addEventListener('mouseup', endChange);
            canvas.addEventListener('mousemove', drag);
            canvas.addEventListener('mousedown', startChange);
            return ct;
        },
        t = 0,
        ticks = 0,
        xAxis,
        val,
        shapeCtrls = {
            frequency: createRangeInput('frequency', 1, 100, 0, 0.0001),
            amplitude: createRangeInput('amplitude', 3, 1000, 0, 0.1),
            softSync: createRangeInput('softSync', 1, 10000, 0, 0.0001),
            hardSync: createRangeInput('hardSync', 1, 10000, 0, 0.0001),
            syncReset: createRangeInput('syncReset', -100, 100, 0, 0.01),
            phase: createRangeInput('phase', 1, 1000, 0, 1)
        },
        shapes = Object.keys(shapeCtrls),
        waves = Object.keys(waveTypes),
        c = {},
        cKeys;
    ctx.strokeStyle = '#000';
    ctx.lineJoin = 'round';
    ctx.save();
    waves.forEach(function (w) {
        c[w] = createRangeInput(w, 0, 100, 0, 0.01);
    });
    shapes.forEach(function (w) {
        c[w] = shapeCtrls[w];
    });
    cKeys = Object.keys(c);
    function resize() {
        canvas.width = args.parentNode.offsetWidth;
        canvas.height = args.parentNode.offsetHeight;
        height = canvas.height;
        width = canvas.width;
        xAxis = Math.floor(height / 2);
    }
    window.addEventListener('resize', resize);
    function updateMeter(b) {
        ctx.save();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(b, 0);
        ctx.lineTo(b, height);
        ctx.stroke();
        ctx.restore();
    }
    function drawLine(aX, aY, bX, bY) {
        ctx.save();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(aX, aY);
        ctx.lineTo(bX, bY);
        ctx.stroke();
        ctx.restore();
    }
    function drawWave() {
        var i,
            x,
            b = Math.floor(((performance.now() - last) % width)),
            unit = (height / 8),
            y;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, width, height);
        ctx.save();
        ctx.strokeStyle = "rgba(0, 255, 0, 1)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        function getShape(t, f) {
            var n = 0;
            waves.forEach(function (wave) {
                var p = c[wave].v;
                n += waveTypes[wave](t, f) * p;
            });
            return n;
        }
        x = c.phase.v;
        y = getShape(x, c.frequency.v) * (1 / c.amplitude.v);
        ctx.moveTo(0, unit * y + xAxis);
        for (i = 0; i <= 2048; i += 1) {
            x = c.phase.v + i;
            y = getShape(x, c.frequency.v) * (1 / c.amplitude.v);
            if (c.hardSync.v > 0.0001) {
                if (waveTypes.sine(x, c.hardSync.v) <= 0) {
                    y = 0;
                }
            }

            if (c.softSync.v > 0.0001) {
                if (waveTypes.sine(x, c.softSync.v) <= 0) {
                    y += c.syncReset.v;
                }
            }
            ctx.lineTo(i, unit * y + xAxis);

        }
        ctx.stroke();
        for (i = 0; i <= 2048; i += 1) {
            if (i % atom === 0) {
                drawLine(0, i, i, height);
            }
        }
        //drawLine(10 * unit, width);
        ctx.stroke();
        drawLine(i);
        ctx.restore();
        updateMeter(b);

        requestAnimationFrame(function () {
            drawWave();
            redrawAllControls();
        });
    }
    function quickChange() {
        /*if (rect.top < e.clientY
                && rect.height > e.clientY
                && rect.left < e.clientX
                && rect.left + rect.width > e.clientX) {
            dragging = true;
            start.x = e.clientX;
            start.y = e.clientY;
            canvas.requestPointerLock();
        }*/
    }
    function redrawAllControls() {
        cKeys.forEach(function (key) {
            c[key].redraw();
        });
    }
    function redraw() {
        drawWave();
        redrawAllControls();
    }
    canvas.addEventListener('mousedown', quickChange);
    resize();
    redraw();
    return {
        controls: c,
        canvas: canvas,
        get value() {
            return val;
        }
    };
}