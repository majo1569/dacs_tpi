(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jslane = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require('./lib/grupo8.js');
},{"./lib/grupo8.js":3}],2:[function(require,module,exports){
(function () {
    'use strict';
  
    const array = exports;
  
    // Sum an array
    array.sum = function (array) {
      let result = 0;
  
      for (let i = 0; i < array.length; ++i) {
        result += array[i];
      }
  
      return result;
    };
  }());
},{}],3:[function(require,module,exports){

(function () {
    'use strict';
  
    const grupo8 = exports;
  
    grupo8.array = require('./array.js');
    grupo8.suma = require('./suma.js');
  }());
},{"./array.js":2,"./suma.js":4}],4:[function(require,module,exports){
(function () {
    'use strict';
  
    const suma = exports;
  
    // Sum an array
    suma.sum = function (num1, num2) {
      let result = 0;
   
        result += num1 + num2; 
  
      return result;
    };
  }());
},{}]},{},[1])(1)
});
