'use strict';

var arraytools  = function () {

  var that = {}

  function isPlainObj (v) {
    return (v != null) && (typeof v === 'object') && !Array.isArray(v)
  }

  function linspace (start, end, num) {
    var inc = (end - start) / (num - 1)
    var a = []
    for( var ii = 0; ii < num; ii++)
      a.push(start + ii*inc)
    return a
  }

  function zip3 (a, b, c) {
      var len = Math.min.apply(null, [a.length, b.length, c.length])
      var result = []
      for (var n = 0; n < len; n++) {
          result.push([a[n], b[n], c[n]])
      }
      return result
  }

  function sum (A) {
    var acc = 0
    accumulate(A, acc)
    function accumulate(x) {
      for (var i = 0; i < x.length; i++) {
        if (Array.isArray(x[i]))
          accumulate(x[i], acc)
        else
          acc += x[i]
      }
    }
    return acc
  }

  function copy2D (arr) {
    var carr = [];
    for (var i = 0; i < arr.length; ++i) {
      carr[i] = [];
      for (var j = 0; j < arr[i].length; ++j) {
        carr[i][j] = arr[i][j];
      }
    }

    return carr;
  }

  function isEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
      return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
        return false;
    }

    return true;
  }


  function str2RgbArray(str, oneBased) {
    // convert hex or rbg strings to 0->1 or 0->255 rgb array
    var rgb,
        match;

    if (typeof str !== 'string') return str;

    rgb = [];
    // hex notation
    if (str[0] === '#') {
      str = str.substr(1) // remove hash
      if (str.length === 3) str += str // fff -> ffffff
      match = parseInt(str, 16);
      rgb[0] = ((match >> 16) & 255);
      rgb[1] = ((match >> 8) & 255);
      rgb[2] = (match & 255);
    }

    // rgb(34, 34, 127) or rgb(34, 34, 127, 0.1) notation
    else if (/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,.*)?\)$/.test(str)) {
      match = str.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,.*)?\)$/);
      rgb[0] = parseInt(match[1]);
      rgb[1] = parseInt(match[2]);
      rgb[2] = parseInt(match[3]);
    }

    if (oneBased) {
      for (var j=0; j<3; ++j) rgb[j] = rgb[j]/255
    }


    return rgb;
  }




  that.isPlainObj = isPlainObj
  that.linspace = linspace
  that.zip3 = zip3
  that.sum = sum
  that.isEqual = isEqual;
  that.copy2D = copy2D;
  that.str2RgbArray = str2RgbArray;

  return that

}


module.exports = arraytools()