// call的本质：1.改变了当前函数的this指向  
//             2.执行当前函数

//ES5写法
Function.prototype.mycall = function () {
  let context = context || window;
  let fn = Symbol('fn');
  context.fn = this;

  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  let result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}

//ES6写法
Function.prototype.myCall = function (context, ...args) {
  const fn = Symbol('fn') //用Symbol是为了防止覆盖self上的方法
  context = context || window
  context.fn = this //this就是调用myCall的方法
  const result = eval('context.fn(...args)') //执行函数
  delete context[fn] //删除声明的fn属性
  return result
}

