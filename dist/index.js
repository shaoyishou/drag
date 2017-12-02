(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Drag = function Drag(ele, options) {
    var _this = this;

    _classCallCheck(this, Drag);

    this._startDrag = function (ev) {
        _this.startX = ev.clientX - _this.ele.offsetLeft;
        _this.startY = ev.clientY - _this.ele.offsetTop;
        document.addEventListener('mousemove', _this._dragging, false);
        document.addEventListener('mouseup', _this._dragged, false);
        return false;
    };
    this._dragging = function (ev) {
        var left = ev.clientX - _this.startX;
        var top = ev.clientY - _this.startY;
        _this.ele.style.left = left + 'px';
        _this.ele.style.top = top + 'px';
        ev.preventDefault && ev.preventDefault();
    };
    this._dragged = function (ev) {
        document.removeEventListener('mousemove', _this._dragging, false);
        document.removeEventListener('mouseup', _this._dragged, false);
    };
    this.ele = ele;
    this.startX = 0;
    this.startY = 0;
    this.ele.addEventListener('mousedown', this._startDrag, false);
};

exports.default = Drag;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drag_1 = require("./drag");
var oBox = document.getElementById('box');
new drag_1.default(oBox);

},{"./drag":1}]},{},[2])

//# sourceMappingURL=index.js.map
