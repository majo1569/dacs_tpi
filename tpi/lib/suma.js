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