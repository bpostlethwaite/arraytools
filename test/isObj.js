var ar = require("../.")
var test = require("tape")


test('is object - object', function(t) {
  t.plan(1)
  var iobj = {"glue": "pot"}

  t.ok( ar.isObj(iobj) )
})


// test('matrix sum - Typed64Array array', function(t) {
//   t.plan(2)

//   var u = new Float64Array( 20 )

//   t.equal(ar.sum(u), 0)

//   for (var i = 0; i < u.length; i++)
//     u[i] = 1

//   t.equal(ar.sum(u) , 20)

// })
