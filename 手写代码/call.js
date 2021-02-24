//apply和call的区别在于：apply接收的参数是数组
Function.prototype.myApply = function (context, args) {
  const fn = Symbol('fn');//用Symbol是为了防止覆盖self上的方法
  context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');
  delete context.fn;//删除声明的fn属性
  return result;//返回执行结果
}
