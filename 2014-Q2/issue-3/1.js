
var co = require('co');

function read(file, encoding) {

  return function(fn) {

    fs.readFile(file, encoding, fn);
  }
}

var obj = [];
var index = 0;

function r() {
  return function(fn) {
    index++;
    setTimeout(function() {
      fn(null, index)
    }, 500)
  }
}

function *a() {
  obj.push(yield r());
  obj.push(yield r());
  obj.push(yield r());
}
function *b() {
  yield* a();
  obj.push(yield r());
}

function *c() {
  yield b();
  obj.push(yield r());

  return 1
}

co(function *() {

  var aa = yield *c();
  console.log(obj);
})();

// var gen = c();

// console.log(gen.next(34), gen.next(), gen.next(), gen.next(), gen.next(), gen.next())
