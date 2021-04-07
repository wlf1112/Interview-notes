//1.bind方法可以绑定this指向
//2.bind方法返回一个绑定后的函数
//3.如果绑定的函数被new了，当前函数的this就是当前的实例
Function.prototype.myBind = function (context) {
  if (typeof this != 'function') {
    throw new Error('Function.prototype.bind-what is trying to be bound is not callable');
  }
  //this执行调用bind的函数
  let that = this
  //获取myBind函数从第二个参数到最后一个参数
  let bindArgs = Array.prototype.slice.call(arguments, 1)
  //Object.creat原理
  function Fn() {}

  function fBound() {
    //arguments是bind返回的函数传入的参数
    let args = Array.prototype.slice.call(arguments)
    //当作为构造函数时，this指向实例，此时结果为true,将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值
    return that.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    )
  }
  //返回函数的prototype为绑定函数的prototype,实例可以继承函数原型中的值
  fBound.prototype = this.prototype
  fBound.prototype = new Fn()
  return fBound
}