// call的本质：1.改变了this的指向   2.函数执行了
Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  //首先要获取调用call的函数，用this可以获取
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  //利用Array.toString方法
  let result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}
