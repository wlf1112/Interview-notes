//class的本质是语法糖
class MathHandle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add() {
    return this.x + this.y
  }
}

const m = new MathHandle(1, 2)
console.log(m.add());

console.log(typeof MathHandle);
console.log(MathHandle === MathHandle.prototype.constructor);