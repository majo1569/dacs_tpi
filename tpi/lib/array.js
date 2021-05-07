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