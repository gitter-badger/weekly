
function *B(index) {

  yield index * 2;
  yield index * 3;
  return index - 1;
}

function *A() {

  var a = 12;
  yield* B(a);
  yield a * 4;
  return a;
}

var g = A();

console.log(g.next(), g.next(), g.next(), g.next());