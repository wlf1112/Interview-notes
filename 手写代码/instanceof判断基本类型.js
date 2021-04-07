class PrimitiveNumber {
  //Symbol.hasInstance用于判断某对象是否为某构造器的实例
  static[Symbol.hasInstance](x) {
    return typeof x === 'number'
  }
}

console.log(111 instanceof PrimitiveNumber)