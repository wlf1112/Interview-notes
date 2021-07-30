class MathHandler {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add() {
    return this.x + this.y
  }
}

const m = new MathHandler(1, 2)
console.log(m.add())
console.log(typeof MathHandler)
console.log(MathHandler.prototype.constructor)
console.log(MathHandler === MathHandler.prototype.constructor)
console.log(MathHandler.prototype === m.__proto__)