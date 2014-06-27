
function *a() {

  var a = yield 3;
  var b = yield a * 4;

  return b;
}

var gen = a();

console.log(gen.next(2), gen.next(3), gen.next(4))
