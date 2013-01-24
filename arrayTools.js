"use strict";
module.exports = function () {

  var that = {}

  that.isArray = function (v) {
    return Object.prototype.toString.call(v) === "[object Array]";
  }
   
  that.isObj = function (v) {
    return (v != null) && (typeof v === 'object') && !isArray(v)
  }

  that.linspace = function (start, end, num) {
    var inc = (end - start) / num
    var a = []
    for( var ii = 0; ii <= num; ii++)
      a.push(start + ii*inc)
    return a
  }

  that.graph = function (x , y) {
    var a = []
    for (var i = 0; i < x.length - 1; i++)
      a = a.concat( linspace(y[i], y[i+1], x[i+1] - x[i] ) )
    return a
  }

  that.zip3 = function (a, b, c) {
      var len = Math.min.apply(null, [a.length, b.length, c.length]) 
      var result = []
      for (var n = 0; n < len; n++) {
          result.push([a[n], b[n], c[n]])
      }
      return result
  }

}