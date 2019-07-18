// This is an example to compile
function renderCurve () {
  // @number
  for (var a = 1, b = 10; a * b; a++, b--) { console.log(new Array(a * b).join('*')) }
}
renderCurve()

function someLocalsFn () {
  var thisfn = 1
  var has = 1
  var many = 1
  var locals = 1

  return thisfn + has + many + locals
}
