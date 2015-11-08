/*jslint browser: true*/
/*globals performance: false, requestAnimationFrame: false*/
define([], function () {
    'use strict';
    var self = {};
    function ce(tag, parentNode, className, innerHTML) {
        var e;
        if (typeof tag === 'string') {
            e = document.createElement(tag);
        } else {
            e = tag;
        }
        if (parentNode) {
            parentNode.appendChild(e);
        }
        if (className) {
            e.classList.add(className);
        }
        if (innerHTML) {
            e.innerHTML = innerHTML;
        }
        return e;
    }
    function getStyleBlock(callback) {
        if (self.styleSheet) {
            return callback(self.styleSheet);
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            self.styleSheet = ce('style');
            self.styleSheet.innerHTML = this.responseText;
            callback(self.styleSheet);
        };
        xhr.open('GET', 'css/ui.css');
        xhr.send();
    }
    self.combo = function (args) {
        var instance = {
                itemElements: []
            },
            container = ce('div', args.parentNode, 'ui-combo'),
            //root = container.createShadowRoot(true),
            root = container,
            menu = ce('div', undefined, 'ui-combo-menu'),
            menuMaxHeight = args.menuMaxHeight || 0.75,
            input = args.input || ce('input', root, 'ui-combo-input'),
            selectedIndex = 0,
            min = args.min || -Infinity,
            max = args.max || Infinity,
            mag = args.mag || 0.5,
            button = ce('div', root, 'ui-combo-button'),
            meter = ce('div', button, 'ui-combo-meter'),
            title = ce('div', meter, 'ui-combo-title'),
            updateTimeout,
            selectedElement,
            itemElements = [],
            dragged = false,
            updateTimeoutTime = 0,
            menuState = false;
        function keyup(e) {
            return e;
        }
        function resize() {
            var h, inputRect = input.getBoundingClientRect();
            menu.style.top = inputRect.bottom + 'px';
            menu.style.left = inputRect.left + 'px';
            if (itemElements[0]) {
                menu.style.width = itemElements.offsetWidth + 'px';
            }
            menu.style.minWidth = inputRect.width + button.offsetWidth + 'px';
            h = ((document.documentElement.clientHeight - inputRect.top) * menuMaxHeight) + 'px';
            menu.style.height = h;
            menu.style.maxHeight = h;
            meter.style.width = ((selectedIndex / instance.items.length) * button.offsetWidth)  + 'px';
        }
        function showMenu() {
            root.appendChild(menu);
            resize();
            menuState = true;
        }
        function hideMenu() {
            menuState = false;
            root.removeChild(menu);
        }
        function getValueByIndex(index) {
            return instance.items[index];
        }
        function getIndexByValue(value) {
            var v, x, i;
            for (x = 0; x < instance.items.length; x += 1) {
                i = instance.items[x];
                if (typeof i === 'object') {
                    v = Object.keys(i)[0];
                } else if (Array.isArray(i)) {
                    v = i[0];
                } else {
                    v = i;
                }
                if (value === v) {
                    return x;
                }
            }
        }
        function toggleMenu() {
            if (menuState) {
                hideMenu();
            } else {
                showMenu();
            }
        }
        function setIndex(index) {
            if (isNaN(index)) {
                throw new Error('Index cannot be NaN');
            }
            selectedIndex = index;
            var i = getValueByIndex(index),
                v,
                event = new Event('change');
            if (Array.isArray(i)) {
                v = i[1];
            } else if (typeof i === 'object') {
                v = Object.keys(i)[0];
            } else {
                v = i;
            }
            if (selectedElement) {
                selectedElement.classList.remove('ui-combo-selected-item');
            }
            selectedElement = itemElements[selectedIndex];
            if (selectedElement) {
                selectedElement.classList.add('ui-combo-selected-item');
                menu.scrollTop = selectedElement.offsetTop - (menu.offsetHeight * 0.5);
            }
            if (input.value !== v) {
                input.value = v;
                if (input.update) {
                    input.update();
                }
                input.dispatchEvent(event);
            }
            meter.style.width = ((selectedIndex / instance.items.length) * button.offsetWidth)  + 'px';
        }
        function setValue(value) {
            setIndex(getIndexByValue(value));
        }
        function refreshMenu() {
            if (!args.items) {
                return;
            }
            menu.innerHTML = '';
            function bindClickValue(value) {
                return function (e) {
                    input.value = value.apply(instance, [e]);
                };
            }
            itemElements = [];
            instance.items.forEach(function (item) {
                var key, o = ce('div', menu, 'ui-combo-menu-item');
                if (Array.isArray(item)) {
                    o.innerHTML = item[0];
                    if (typeof item[1] === 'function') {
                        o.addEventListener('click', bindClickValue(item[1]));
                    } else {
                        o.addEventListener('click', function () {
                            input.value = item[1];
                        });
                    }
                } else if (typeof item === 'object') {
                    key = Object.keys(item)[0];
                    o.innerHTML = key;
                    if (typeof item[key] === 'function') {
                        o.addEventListener('click', bindClickValue(item[key]));
                    } else {
                        o.addEventListener('click', function () {
                            input.value = item[key];
                        });
                    }
                } else {
                    o.innerHTML = item;
                    o.addEventListener('click', function () {
                        input.value = item;
                    });
                }
                o.addEventListener('click', hideMenu);
                itemElements.push(o);
            });
        }
        function drag(e) {
            dragged = true;
            selectedIndex += Math.floor((e.movementY + e.movementX) * mag);
            if (selectedIndex <= min) {
                selectedIndex = min;
            }
            if (selectedIndex >= max) {
                selectedIndex = max;
            }
            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(setIndex, updateTimeoutTime, selectedIndex);
        }
        function dragEnd() {
            document.exitPointerLock();
            document.body.removeEventListener('mousemove', drag);
            document.body.removeEventListener('mouseup', dragEnd);
            hideMenu();
        }

        function dragstart() {
            dragged = false;
            button.requestPointerLock();
            showMenu();
            document.body.addEventListener('mousemove', drag);
            document.body.addEventListener('mouseup', dragEnd);
        }
        function init() {
            menu.style.left = '-10000px';
            menu.style.height = '0';
            min = 0;
            max = instance.items.length - 1;
            if (args.input) {
                args.input.classList.add('ui-combo-input');
                if (!args.parentNode) {
                    input.parentNode.appendChild(container);
                }
                if (input.parentNode) {
                    input.parentNode.removeChild(input);
                }
                root.insertBefore(input, button);
            }
            getStyleBlock(function (styleBlock) {
                root.appendChild(styleBlock);
            });
            input.value = args.value || input.value;
            title.innerHTML = args.title;
            menu.style.position = 'absolute';
            button.style.display = 'inline-block';
            input.addEventListener('keyup', keyup);
            button.addEventListener('mousedown', dragstart);
            button.addEventListener('click', function () {
                if (!dragged) {
                    toggleMenu();
                }
            });
            refreshMenu();
            if (args.value !== undefined) {
                setValue(args.value);
            } else if (args.index !== undefined) {
                setIndex(parseInt(args.index, 10));
            } else if (args.input && args.input.value !== undefined && args.input.value !== "") {
                setValue(args.input.value);
            } else {
                setIndex(0);
            }
            resize();
        }
        instance.items = args.items;
        instance.input = input;
        instance.resize = resize;
        init();
        return instance;
    };
    return self;
});