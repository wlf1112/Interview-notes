function MathHandler(x, y) {
  this.x = x
  this.y = y
}

MathHandler.prototype.add = function () {
  return this.x + this.y
}

var m = new MathHandler(1, 2)
console.log(m.add())